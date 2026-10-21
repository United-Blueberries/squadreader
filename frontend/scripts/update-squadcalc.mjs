// Re-import everything the 3D view takes from SquadCalc, pinned to one commit:
//
//   src/data/squadcalc3d.json          map corners + heightmap calibration (from src/data/maps.js)
//   src/canvas/squadcalc/squad3DProps.js, squad3DTrees.js   building/tree loaders, verbatim
//   src/canvas/squadcalc/source.json   which commit all of the above came from
//
//   npm run update:squadcalc                 # latest master
//   npm run update:squadcalc -- --ref <sha>  # a specific commit/branch/tag
//
// Then `git diff` shows exactly what moved upstream, and `npm test` re-checks it.
// The heightmaps, basemaps and props.bin/trees.bin are not copied: the view
// loads them from squadcalc.app at runtime.

import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const REPO = "sh4rkman/SquadCalc";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const refArg = process.argv.indexOf("--ref");
const ref = refArg > 0 ? process.argv[refArg + 1] : "master";

async function get(url, as = "text") {
  const res = await fetch(url, { headers: { "User-Agent": "squadreader-update-squadcalc" } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return as === "json" ? res.json() : res.text();
}

const commit = await get(`https://api.github.com/repos/${REPO}/commits/${ref}`, "json");
const sha = commit.sha;
const short = sha.slice(0, 12);
const raw = (path) => get(`https://raw.githubusercontent.com/${REPO}/${sha}/${path}`);
console.log(`SquadCalc ${ref} -> ${short} (${commit.commit.committer.date})`);

// ── 1. Map metadata ──────────────────────────────────────────────────────────
// maps.js is plain data plus two tiny helpers. It has to be executed to read it
// (it's JS, not JSON), so refuse anything that looks like more than data first.
const mapsSrc = await raw("src/data/maps.js");
const suspicious = /\bimport\b|\brequire\s*\(|\bfetch\s*\(|\bprocess\b|\beval\s*\(|\bFunction\s*\(|globalThis|\bwindow\b|\bdocument\b/;
const hit = mapsSrc.split("\n").find((l) => !l.trim().startsWith("//") && suspicious.test(l));
if (hit) throw new Error(`maps.js no longer looks like pure data, refusing to run it:\n  ${hit.trim()}`);
const tmp = mkdtempSync(join(tmpdir(), "squadcalc-"));
let MAPS;
try {
  writeFileSync(join(tmp, "maps.mjs"), mapsSrc);
  ({ MAPS } = await import(pathToFileURL(join(tmp, "maps.mjs")).href));
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
const maps = {};
for (const m of MAPS) {
  const sdk = m.SDK_data ?? {};
  if (!sdk.minimap?.corner0 || !sdk.minimap?.corner1) { console.warn(`  skip ${m.name}: no minimap corners`); continue; }
  maps[m.name] = {
    url: m.mapURL,
    corner0: sdk.minimap.corner0,
    corner1: sdk.minimap.corner1,
    heightScale: sdk.landscapeScale?.[2] ?? null,
    zOffset: sdk.zOffset ?? null,
    heightScale3D: sdk.landscape3D?.landscapeScale?.[2] ?? null,
    zOffset3D: sdk.landscape3D?.zOffset ?? null,
  };
}
const jsonPath = join(root, "src/data/squadcalc3d.json");
let before = {};
try { before = JSON.parse(readFileSync(jsonPath, "utf8")); } catch { /* first run */ }
writeFileSync(jsonPath, JSON.stringify(maps, null, 1) + "\n");
const added = Object.keys(maps).filter((k) => !(k in before));
const removed = Object.keys(before).filter((k) => !(k in maps));
const changed = Object.keys(maps).filter((k) => k in before && JSON.stringify(maps[k]) !== JSON.stringify(before[k]));
console.log(`  maps: ${Object.keys(maps).length} (added ${added.join(", ") || "-"}; removed ${removed.join(", ") || "-"}; changed ${changed.join(", ") || "-"})`);

// Maps squadreader knows that SquadCalc has no 3D data for: those fall back to "No SquadCalc 3D data".
const ours = Object.keys(JSON.parse(readFileSync(join(root, "../data/static/map_config.json"), "utf8")));
const missing = ours.filter((k) => !(k in maps));
if (missing.length) console.warn(`  no SquadCalc entry for: ${missing.join(", ")}`);

// ── 2. Loaders, verbatim ─────────────────────────────────────────────────────
for (const name of ["squad3DProps", "squad3DTrees"]) {
  const src = await raw(`src/js/${name}.js`);
  // They may only depend on three.js; anything else needs a look before shipping.
  const imports = [...src.matchAll(/^\s*import\s.*?from\s+["']([^"']+)["']/gm)].map((m) => m[1]);
  const foreign = imports.filter((i) => i !== "three" && !i.startsWith("three/addons/"));
  if (foreign.length) throw new Error(`${name}.js now imports ${foreign.join(", ")}: vendor by hand`);
  if (!new RegExp(`export\\s+async\\s+function\\s+load${name.slice(7)}\\b`).test(src))
    throw new Error(`${name}.js no longer exports load${name.slice(7)}(): check squadcalc.d.ts / Map3D.tsx`);
  const header = `// Vendored verbatim from SquadCalc (https://github.com/${REPO}),\n`
    + `// src/js/${name}.js @ ${short}. (c) Maxime "sharkman" Boussard,\n`
    + `// MIT License (Non-Commercial) - see the SquadCalc repo LICENSE.\n`
    + `// Regenerate with: npm run update:squadcalc\n\n`;
  writeFileSync(join(root, `src/canvas/squadcalc/${name}.js`), header + src);
  console.log(`  ${name}.js`);
}

writeFileSync(join(root, "src/canvas/squadcalc/source.json"), JSON.stringify({
  repo: REPO, ref, commit: sha, committed: commit.commit.committer.date,
}, null, 2) + "\n");
console.log("Done. Review with `git diff`, then `npm test` and a look at a replay with ?view=3d.");
