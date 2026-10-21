// <Map3D /> — proof of concept: the replay drawn on SquadCalc's 3D terrain.
// Heightmap + basemap are hotlinked from squadcalc.app (served with
// Access-Control-Allow-Origin: *); calibration comes from SquadCalc's maps.js
// (src/data/squadcalc3d.json). Same display frame as the 2D canvas, so play,
// pause and scrub stay in step; picking goes through the 2D hitTest, so hover
// and click open the same tooltip and panels.

import { useEffect, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import { useViewerStore } from "../state/viewerStore";
import type { CapGeometry, Deployable, Marker, Player, RallyPoint, Snapshot, Vehicle } from "../state/types";
import { displaySnapshot } from "./MapCanvas";
import { actionMarkerPlacer, capLabel, drawDeployableBadge, isAdminCam, isDowned, isSquadLeader,
  teamColor, vehicleSquadNumber } from "./draw";
import { arrowEnd, markerShape } from "./markerGeometry";
import { visibleCaps } from "./capVisibility";
import { replayClock } from "../state/replayClock";
import { hitTest, type Hit, type HitEntity } from "./hitTest";
import { colorizedIcon, deployableIconUrl, icon, markerIconUrl, roleIconUrl, vehicleIconUrl,
  vehicleTurretIconUrl } from "./icons";
import { deployKind3d, vehicleKind3d, type DeployKind3D, type VehicleKind3D } from "./kind3d";
import { teamViewSnapshot } from "./teamView";
import SQUADCALC from "../data/squadcalc3d.json";
// CC0 sky from Poly Haven (see sky/LICENCE.txt), bundled through Vite so it ships
// under /assets/ like the rest of the build.
import skyUrl from "./sky/sky.hdr?url";
import { loadProps } from "./squadcalc/squad3DProps.js";
import { loadTrees } from "./squadcalc/squad3DTrees.js";

// ponytail: hotlinks squadcalc.app — fine for a local POC; ask sharkman before
// shipping, or mirror the assets.
// ?assets=local (the benchmark): same files through the bench runner's local
// cache, so runs don't depend on the network or on SquadCalc changing them.
const SQUADCALC_API = new URLSearchParams(location.search).get("assets") === "local"
  ? "/__squadcalc" : "https://squadcalc.app/api";
// Terrain vertices per side, as SquadCalc: 4x fewer triangles than 1024 and it
// looks the same. Ground height for units still comes from this grid only
// when a vehicle has no z.
const GRID = 512;
// Frame cap: high-refresh screens otherwise render 144-240 fps for nothing.
const MAX_FPS = 100;
// Benchmark mode (?bench, driven by scripts/bench-3d.mjs): fixed frame, fixed
// camera shots, numbers on window.__benchResult.
const BENCH = new URLSearchParams(location.search).has("bench");
const BENCH_FRAME = Number(new URLSearchParams(location.search).get("frame")) || 600;
const MAX_PLAYERS = 128, MAX_VEHICLES = 256, MAX_DEPLOY = 256;
// Calibration knob: ?z3d=<metres> shifts the terrain up/down if soldiers float.
const Z_NUDGE = Number(new URLSearchParams(location.search).get("z3d")) || 0;

// Fly camera, SquadCalc's bindings by physical key (so AZERTY ZQSD works too).
// Space stays play/pause and F stays Fit, so up/down live on C/X (X sits left
// of C: down left, up right); Shift is a speed boost.
const KEYS: Record<string, "f" | "b" | "l" | "r" | "u" | "d"> = {
  KeyW: "f", KeyZ: "f", KeyS: "b", KeyA: "l", KeyQ: "l", KeyD: "r",
  KeyC: "u", PageUp: "u", KeyX: "d", PageDown: "d",
};
const HELP_KEY = "sqr.map3d.helpClosed";
const helpClosed = () => { try { return localStorage.getItem(HELP_KEY) === "1"; } catch { return false; } };

type MapMeta = {
  url: string; corner0: [number, number]; corner1: [number, number];
  heightScale: number | null; zOffset: number | null;
  heightScale3D: number | null; zOffset3D: number | null;
};

interface Terrain { mesh: THREE.Mesh; c0: [number, number]; size: number;
                    heights: Float32Array; base: string }

export const TEXTURES = [["basemap", "Satellite"], ["topomap", "Topographic"],
                         ["terrainmap", "Terrain"]] as const;
// Single-layer maps only ship basemap.webp: fall back to it (as SquadCalc does).
async function loadMapTexture(base: string, name: string): Promise<THREE.Texture> {
  const loader = new THREE.TextureLoader();
  const tex = await loader.loadAsync(`${base}${name}.webp`)
    .catch((e) => { if (name === "basemap") throw e; return loader.loadAsync(`${base}basemap.webp`); });
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

async function loadTerrain(meta: MapMeta, textureName: string): Promise<Terrain> {
  const base = SQUADCALC_API + meta.url;
  let res = await fetch(base + "3d/landscape.png");
  const landscape = res.ok;
  if (!res.ok) res = await fetch(base + "heightmap.png");
  if (!res.ok) throw new Error(`no heightmap for ${meta.url}`);
  const bmp = await createImageBitmap(await res.blob(),
    { colorSpaceConversion: "none", premultiplyAlpha: "none" });
  // Downsample on the GPU canvas, nearest-neighbour like SquadCalc does.
  const cv = new OffscreenCanvas(GRID, GRID);
  const ctx = cv.getContext("2d", { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bmp, 0, 0, GRID, GRID);
  const px = ctx.getImageData(0, 0, GRID, GRID).data;

  const scale = (landscape ? meta.heightScale3D : null) ?? meta.heightScale ?? 1;
  const zOff = (landscape ? meta.zOffset3D : null) ?? meta.zOffset ?? 0;
  const size = Math.abs(meta.corner1[0] - meta.corner0[0]);
  const geo = new THREE.PlaneGeometry(size, size, GRID - 1, GRID - 1);
  geo.rotateX(-Math.PI / 2);       // row 0 (image top) → -Z = north
  const pos = geo.attributes.position;
  const heights = new Float32Array(GRID * GRID);
  for (let i = 0; i < GRID * GRID; i++) {
    // SquadCalc encoding: height_m = (255 + r - b) * scale, green unused.
    heights[i] = (255 + px[i * 4] - px[i * 4 + 2]) * scale + zOff + Z_NUDGE;
    pos.setY(i, heights[i]);
  }
  geo.computeVertexNormals();
  const tex = await loadMapTexture(base, textureName);
  const mesh = new THREE.Mesh(geo,
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, metalness: 0 }));
  return { mesh, c0: meta.corner0, size, heights, base };
}

// Game cm → three.js metres. Game X → +X (east), game Y → +Z (south), Z → up.
function toWorld(t: Terrain, x: number, y: number): [number, number] {
  return [x / 100 - t.c0[0] - t.size / 2, y / 100 - t.c0[1] - t.size / 2];
}
function toGame(t: Terrain, X: number, Z: number): [number, number] {
  return [(X + t.size / 2 + t.c0[0]) * 100, (Z + t.size / 2 + t.c0[1]) * 100];
}
function groundAt(t: Terrain, X: number, Z: number): number {
  const col = Math.round(((X + t.size / 2) / t.size) * (GRID - 1));
  const row = Math.round(((Z + t.size / 2) / t.size) * (GRID - 1));
  const c = Math.max(0, Math.min(GRID - 1, col)), r = Math.max(0, Math.min(GRID - 1, row));
  return t.heights[r * GRID + c];
}
// First point where the ray dips under the terrain (cheaper than raycasting
// a two-million-triangle mesh on every mouse move).
function rayGround(t: Terrain, ray: THREE.Ray): THREE.Vector3 | null {
  const p = new THREE.Vector3();
  for (let d = 0; d < 20000; d += Math.max(1, d * 0.005)) {
    ray.at(d, p);
    if (p.y <= groundAt(t, p.x, p.z)) return p;
  }
  return null;
}

// ── Low-poly models: vehicles + deployables ─────────────────────────────────
// Built nose along +X (UE yaw 0), resting on y = 0. Each part carries a grey
// `shade` vertex colour that multiplies the per-instance team colour, so
// tracks, wheels and glass read darker than the hull without extra meshes.
function shaded(g: THREE.BufferGeometry, shade: number): THREE.BufferGeometry {
  const n = g.attributes.position.count;
  g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(shade), 3));
  return g;
}
function box(w: number, h: number, d: number, x: number, y: number, z = 0, shade = 1) {
  return shaded(new THREE.BoxGeometry(w, h, d).translate(x, y, z), shade);
}
function cyl(rTop: number, rBot: number, h: number, x: number, y: number, z = 0,
             shade = 1, seg = 12) {
  return shaded(new THREE.CylinderGeometry(rTop, rBot, h, seg).translate(x, y, z), shade);
}
// Gun barrel pointing forward from (x, y).
function barrel(r: number, len: number, x: number, y: number, shade = 0.55) {
  return shaded(new THREE.CylinderGeometry(r, r, len, 8).rotateZ(-Math.PI / 2)
    .translate(x + len / 2, y, 0), shade);
}
// ── Unit tokens: board-game pieces carrying the 2D map's icons ──────────────
// Soldier: a team cylinder (origin = capsule centre, so it stands on FEET) with
// a dark notch toward the heading; the 2D role badge floats above it, facing
// the camera. Vehicle: a team block sized for its class with the 2D vehicle
// icon printed on the roof, turned with the hull.
const FEET = -0.85, TOKEN_R = 0.55, TOKEN_H = 1.7;
const ROLE_FALLBACK = "./icons/roles/T_role_rifleman.png";
const tokenGeometry = () => mergeGeometries([
  cyl(TOKEN_R, TOKEN_R, TOKEN_H, 0, FEET + TOKEN_H / 2, 0, 1, 20),
  box(0.3, 0.35, 0.3, TOKEN_R, FEET + TOKEN_H * 0.7, 0, 0.3),
])!;
// Block size per class: length (along the heading), height, width, metres.
const VEHICLE_DIMS: Record<VehicleKind3D, [number, number, number]> = {
  mbt: [8.5, 2.4, 3.6], tankDestroyer: [7.2, 2.4, 2.9], ifvTracked: [6.8, 2.4, 3.2],
  ifvWheeled: [7, 2.4, 2.9], apcTracked: [5.4, 2.1, 2.8], apcWheeled: [7, 2.4, 2.8],
  mrap: [5.2, 2.1, 2.4], jeep: [4.8, 1.6, 2.1], bike: [2, 1, 1], truck: [7.6, 2.8, 2.5],
  logiTruck: [7.6, 2.8, 2.5], heli: [9, 1.6, 9], heliLight: [6, 1.3, 6], boat: [6.5, 1, 2.6],
  other: [5, 2, 2.6],
};
// The 2D icons are drawn nose-up; this lays a quad flat with the image top
// toward +X (the hull's front at yaw 0).
const FLAT = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, -Math.PI / 2, 0, "YXZ"));
const iconQuad = new THREE.PlaneGeometry(1, 1);
const ICON_CAP = 160;
const vehicleIconTextures = new Map<string, THREE.Texture>();
function vehicleIconTexture(url: string): THREE.Texture | null {
  const hit = vehicleIconTextures.get(url);
  if (hit) return hit;
  const img = icon(url);
  if (!img.complete || !img.naturalWidth) return null;
  const t = new THREE.Texture(img);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.needsUpdate = true;
  vehicleIconTextures.set(url, t);
  return t;
}

const DEPLOY_SHAPES: Record<Exclude<DeployKind3D, "helipad"> | "rally", () => THREE.BufferGeometry[]> = {
  // FOB radio: big radio set, a thick mast with cross-bars, and a bright team
  // beacon on top. No flag: that's the rally's.
  radio: () => [box(1.3, 0.9, 0.9, 0, 0.45, 0, 0.35), box(0.9, 0.5, 0.7, 0, 1.15, 0, 0.55),
                cyl(0.07, 0.09, 5, -0.3, 2.9, 0, 0.3, 8),
                box(0.05, 0.05, 1.2, -0.3, 3.6, 0, 0.3), box(0.05, 0.05, 0.9, -0.3, 4.6, 0, 0.3),
                shaded(new THREE.SphereGeometry(0.28, 12, 8).translate(-0.3, 5.55, 0), 1.6)],
  // HAB: sandbagged bunker with a pitched roof and a dark doorway.
  hab: () => [box(5.5, 2, 5.5, 0, 1, 0, 0.7),
              shaded(new THREE.ConeGeometry(4.3, 1.7, 4).rotateY(Math.PI / 4).translate(0, 2.85, 0), 1),
              box(0.1, 1.5, 1.4, 2.76, 0.75, 0, 0.15)],
  // Rally: duffel bag on the ground and a big triangular squad flag on a short pole.
  rally: () => [box(0.75, 0.4, 0.45, 0.45, 0.2, 0.2, 0.55), cyl(0.03, 0.03, 1.9, 0, 0.95, 0, 0.35, 6),
                // Pennant: a thin 3-sided prism, base on the pole, tip pointing +X.
                shaded(new THREE.CylinderGeometry(0.7, 0.7, 0.03, 3).rotateX(Math.PI / 2)
                  .rotateZ(Math.PI / 2).translate(0.35, 1.5, 0), 1.2)],
  ammoCrate: () => [box(1.6, 0.75, 1, 0, 0.38, 0, 0.7), box(1.65, 0.12, 1.05, 0, 0.81, 0, 1),
                    box(0.12, 0.76, 1.02, 0, 0.38, 0, 1.2)],
  ammoBag: () => [box(0.55, 0.3, 0.35, 0, 0.15, 0, 0.8)],
  construction: () => [box(1.5, 0.7, 1.5, 0, 0.35, 0, 0.7), box(1.6, 0.18, 1.6, 0, 0.8, 0, 1.25)],
  // Repair station: workbench with a crane jib.
  repair: () => [box(2, 0.9, 1.3, 0, 0.45, 0, 0.75), box(0.2, 1.9, 0.2, -0.7, 1.85, 0, 0.35),
                 box(1.8, 0.2, 0.2, 0.1, 2.8, 0, 0.35), cyl(0.2, 0.2, 0.12, -0.4, 0.96, 0.3, 1.2)],
  // Mortar: baseplate, tube at 50°, bipod.
  mortar: () => [cyl(0.45, 0.45, 0.08, 0, 0.04, 0, 0.4),
                 shaded(new THREE.CylinderGeometry(0.06, 0.07, 1.3, 8).rotateZ(-0.7).translate(0.4, 0.55, 0), 0.35),
                 ...[-1, 1].map((sd) => shaded(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 5)
                   .rotateX(sd * 0.35).translate(0.65, 0.4, sd * 0.15), 0.35)),
                 box(0.4, 0.25, 0.3, -0.5, 0.13, 0.4, 1)],
  // Mine: flat disc, team tinted.
  mine: () => [cyl(0.25, 0.3, 0.1, 0, 0.05, 0, 0.6, 14), cyl(0.06, 0.06, 0.04, 0, 0.12, 0, 1.2, 8)],
  // Emplacement: sandbag ring, tripod, gun.
  emplacement: () => [cyl(1.3, 1.4, 0.6, 0, 0.3, 0, 0.65, 10), box(0.3, 0.7, 0.3, 0, 0.95, 0, 0.35),
                      box(0.9, 0.3, 0.3, 0.1, 1.4, 0, 0.5), barrel(0.05, 1.2, 0.5, 1.4)],
  // Infantry sandbags: a small, low pile.
  sandbags: () => [box(1.4, 0.35, 0.55, 0, 0.18, 0, 0.6), box(1.1, 0.3, 0.5, 0, 0.5, 0, 0.66)],
  sandbagWall: () => [box(3, 0.45, 0.7, 0, 0.23, 0, 0.6), box(2.8, 0.4, 0.6, 0, 0.65, 0, 0.66),
                      box(2.6, 0.35, 0.55, 0, 1.02, 0, 0.6)],
  // Hesco: one 2 x 1 m gabion, 1.4 m tall, with a darker rim.
  hesco: () => [box(2, 1.4, 1, 0, 0.7, 0, 0.6), box(2.04, 0.08, 1.04, 0, 1.38, 0, 0.35)],
  // Razor wire: a low coil.
  razorwire: () => [shaded(new THREE.CylinderGeometry(0.4, 0.4, 3, 10, 1, true)
                      .rotateZ(Math.PI / 2).translate(0, 0.4, 0), 0.3)],
  // Small bunker: sandbagged walls, flat roof, dark firing slit.
  bunker: () => [box(3, 1.5, 3, 0, 0.75, 0, 0.6), box(3.3, 0.25, 3.3, 0, 1.62, 0, 0.7),
                 box(0.1, 0.25, 1.6, 1.51, 1.1, 0, 0.15)],
  explosive: () => [box(0.3, 0.12, 0.2, 0, 0.06, 0, 0.45), box(0.08, 0.05, 0.08, 0.05, 0.14, 0, 1.3)],
  ladder: () => [box(0.06, 2.6, 0.06, 0, 1.3, -0.22, 0.4), box(0.06, 2.6, 0.06, 0, 1.3, 0.22, 0.4),
                 ...[0.4, 0.9, 1.4, 1.9, 2.4].map((y) => box(0.05, 0.05, 0.44, 0, y, 0, 0.4))],
  other: () => [box(1, 1, 1, 0, 0.5, 0, 0.8)],
};

function instanced(geo: THREE.BufferGeometry, max: number): THREE.InstancedMesh {
  const m = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial(
    { roughness: 0.7, vertexColors: !!geo.attributes.color }), max);
  // Allocate colours up front: created lazily after the first render, the
  // shader would never pick them up.
  m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
  m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  m.frustumCulled = false;
  m.count = 0;
  return m;
}

// ── Tree fading ─────────────────────────────────────────────────────────────
// Trees dissolve near the camera (shader) and over soldiers/vehicles (a per-
// instance aFade the frame loop writes), so units under canopy stay visible.
// Alpha-to-coverage turns the alpha into MSAA coverage: a smooth fade with no
// transparent sorting, and depth still works.
const CAM_FADE_NEAR = 15, CAM_FADE_FAR = 45;   // metres from the camera
const UNIT_FADE_R = 10, CELL = 16;             // metres around a unit; grid cell
const MIN_TREE_ALPHA = 0.3;                    // faded, never gone
interface Fadeable {
  fade: Float32Array; attr: THREE.InstancedBufferAttribute;
  xz: Float32Array; grid: Map<number, number[]>; touched: number[];
}
const cellKey = (cx: number, cz: number) => cx * 73856093 ^ cz * 19349663;
// Multiplies the material's alpha by an `aFade` attribute (per instance or per
// vertex). Trees also fade by distance to the camera, from their instance origin.
function patchFade(mat: THREE.MeshStandardMaterial, camFade: boolean) {
  mat.alphaToCoverage = true;
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float aFade;\nvarying float vFade;")
      .replace("#include <begin_vertex>", camFade ? `#include <begin_vertex>
        vec3 instW = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vFade = min(aFade, mix(${MIN_TREE_ALPHA.toFixed(2)}, 1.0,
          smoothstep(${CAM_FADE_NEAR.toFixed(1)}, ${CAM_FADE_FAR.toFixed(1)},
                     distance(instW, cameraPosition))));`
        : "#include <begin_vertex>\nvFade = aFade;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vFade;")
      .replace("#include <color_fragment>",
        "#include <color_fragment>\ndiffuseColor.a *= vFade;");
  };
  // Same onBeforeCompile source for both variants: key the program cache apart.
  mat.customProgramCacheKey = () => (camFade ? "fade-cam" : "fade");
  mat.needsUpdate = true;
}
function makeFadeable(mesh: THREE.InstancedMesh): Fadeable {
  const n = mesh.count;
  const fade = new Float32Array(n).fill(1);
  const attr = new THREE.InstancedBufferAttribute(fade, 1);
  attr.setUsage(THREE.DynamicDrawUsage);
  // Own copy: the loader may share a placeholder geometry between species meshes.
  mesh.geometry = mesh.geometry.clone();
  mesh.geometry.setAttribute("aFade", attr);
  patchFade(mesh.material as THREE.MeshStandardMaterial, true);
  // Instance origins in world XZ, bucketed into a coarse grid for the unit lookup.
  mesh.updateMatrixWorld(true);
  const xz = new Float32Array(n * 2), grid = new Map<number, number[]>();
  const m = new THREE.Matrix4(), v = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    mesh.getMatrixAt(i, m);
    v.setFromMatrixPosition(m).applyMatrix4(mesh.matrixWorld);
    xz[i * 2] = v.x; xz[i * 2 + 1] = v.z;
    const k = cellKey(Math.floor(v.x / CELL), Math.floor(v.z / CELL));
    (grid.get(k) ?? grid.set(k, []).get(k)!).push(i);
  }
  return { fade, attr, xz, grid, touched: [] };
}
// Uploads only the instances whose fade changed (old + new), merged into runs:
// a forest is 100k+ instances, re-sending it whole every frame was the cost.
function uploadRuns(attr: THREE.BufferAttribute, changed: number[]) {
  if (!changed.length) return;
  changed.sort((a, b) => a - b);
  attr.clearUpdateRanges();
  let start = changed[0]!, end = start;
  for (const i of changed) {
    if (i - end > 16) { attr.addUpdateRange(start, end - start + 1); start = i; }
    end = i;
  }
  attr.addUpdateRange(start, end - start + 1);
  attr.needsUpdate = true;
}
// One grid over every tree tile (entries packed as tile * 2^20 + instance), so
// a unit looks at the few cells around it once, not once per tile: with 256
// tiles the per-tile search cost ~7 ms a frame.
const PACK = 1 << 20;
function treeIndex(fs: Fadeable[]): Map<number, number[]> {
  const grid = new Map<number, number[]>();
  fs.forEach((f, fi) => {
    for (const [k, list] of f.grid) {
      const dst = grid.get(k) ?? grid.set(k, []).get(k)!;
      for (const i of list) dst.push(fi * PACK + i);
    }
  });
  return grid;
}
function fadeAroundUnits(fs: Fadeable[], grid: Map<number, number[]>, units: number[]) {
  const was = new Map<Fadeable, number[]>();
  for (const f of fs) if (f.touched.length) {
    was.set(f, f.touched.slice());
    for (const i of f.touched) f.fade[i] = 1;
    f.touched.length = 0;
  }
  for (let u = 0; u < units.length; u += 3) {
    const ux = units[u]!, uz = units[u + 2]!;
    const c0x = Math.floor((ux - UNIT_FADE_R) / CELL), c1x = Math.floor((ux + UNIT_FADE_R) / CELL);
    const c0z = Math.floor((uz - UNIT_FADE_R) / CELL), c1z = Math.floor((uz + UNIT_FADE_R) / CELL);
    for (let cx = c0x; cx <= c1x; cx++) for (let cz = c0z; cz <= c1z; cz++) {
      for (const e of grid.get(cellKey(cx, cz)) ?? []) {
        const f = fs[Math.floor(e / PACK)]!, i = e % PACK;
        const d = Math.hypot(f.xz[i * 2]! - ux, f.xz[i * 2 + 1]! - uz);
        if (d >= UNIT_FADE_R) continue;
        // Faintest within 60% of the radius, easing back in at the edge.
        const a = Math.max(MIN_TREE_ALPHA, Math.min(1, (d / UNIT_FADE_R - 0.6) / 0.4));
        if (a < f.fade[i]!) { if (f.fade[i] === 1) f.touched.push(i); f.fade[i] = a; }
      }
    }
  }
  for (const f of fs) {
    const old = was.get(f);
    if (old || f.touched.length) uploadRuns(f.attr, (old ?? []).concat(f.touched));
  }
}

// ── Deployables + rallies: the 2D map's badges, as constant-size sprites ────
const RALLY_ICON = "./icons/mark/rallypoint.png";
const BADGE_LIFT = 2.5;                       // metres above the item
const badgeTextures = new Map<string, THREE.CanvasTexture>();
// Paints the 2D map's badge (team disc + icon), with an optional pill label
// under it, into a canvas. False until the icon image has loaded.
function paintBadge(cv: HTMLCanvasElement, url: string, color: string,
                    emphasis: boolean, label: string | null): boolean {
  const img = icon(url);
  if (!img.complete || !img.naturalWidth) return false;
  const S = 128;
  cv.width = S; cv.height = label ? Math.round(S * 1.42) : S;
  const ctx = cv.getContext("2d")!;
  drawDeployableBadge(ctx, S / 2, S / 2, S * 0.84, color, img, emphasis);
  if (label) {
    // Pill under the badge, like the 2D rally label.
    ctx.font = "bold 40px system-ui, sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const w = Math.max(ctx.measureText(label).width + 22, 50), h = 46, y = S * 0.93;
    ctx.fillStyle = "#13171f"; ctx.strokeStyle = color; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.roundRect(S / 2 - w / 2, y, w, h, 9); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.fillText(label, S / 2, y + h / 2 + 1);
  }
  return true;
}
// Shared texture per look (icon x disc colour x emphasis x label).
function badgeTexture(url: string, color: string, emphasis: boolean,
                      label: string | null): THREE.CanvasTexture | null {
  const key = `${url}|${color}|${emphasis}|${label ?? ""}`;
  const hit = badgeTextures.get(key);
  if (hit) return hit;
  const cv = document.createElement("canvas");
  if (!paintBadge(cv, url, color, emphasis, label)) return null;
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  badgeTextures.set(key, t);
  return t;
}

// ── Deaths + wrecks, keyed off replay time so pause/scrub/speed just work ──
const DEATH_ICON = "./icons/scoreboard/deaths.png";
const BLAST_MS = 1800;
const pKey = (p: Player) => p.eosId ?? (p.playerId != null ? `pid:${p.playerId}` : `name:${p.name ?? "?"}`);
const ts = (f: Snapshot) => Date.parse(f.timestamp) || 0;
interface Death { t: number; player: Player; x: number; y: number; z: number | null }
interface Events { first: Snapshot | null; upto: number; deaths: Death[];
                   blasts: Map<string, { t: number; x: number; y: number; z: number | null }> }
// A soldier worth drawing. The agent flags a soldier stale when a read fails,
// and while someone is down that is often just the HP read: lifeState still
// says incapacitated and the position is still there. A downed body doesn't
// move, so keep it (otherwise it vanished mid-bleed and was taken for a
// give-up).
const present = (so: { position: unknown; stale?: boolean } & Parameters<typeof isDowned>[0]) =>
  !!so.position && (!so.stale || isDowned(so));
// Incremental scan of the frame list (it only grows while a replay loads):
// a soldier who was down in one frame and gone (not revived) in the next gave
// up or bled out; a vehicle's first frame at <= 0 HP is its explosion.
function scanEvents(ev: Events, frames: Snapshot[]) {
  if (frames[0] !== ev.first || frames.length < ev.upto) {
    ev.first = frames[0] ?? null; ev.upto = 0; ev.deaths = []; ev.blasts = new Map();
  }
  for (let i = Math.max(1, ev.upto); i < frames.length; i++) {
    const prev = frames[i - 1]!, f = frames[i]!, t = ts(f);
    const now = new Map((f.players ?? []).map((pl) => [pKey(pl), pl.soldier]));
    for (const pl of prev.players ?? []) {
      const so = pl.soldier;
      if (!so?.position || !isDowned(so)) continue;
      const n = now.get(pKey(pl));
      if (n && present(n)) continue;          // still down, or revived
      ev.deaths.push({ t, player: pl, ...so.position });
    }
    for (const v of f.vehicles ?? [])
      if ((v.health ?? 1) <= 0 && v.position && !ev.blasts.has(v.id))
        ev.blasts.set(v.id, { t, ...v.position });
  }
  ev.upto = frames.length;
}
let downedX: THREE.CanvasTexture | null = null;
function downedXTexture(): THREE.CanvasTexture {
  if (downedX) return downedX;
  const cv = document.createElement("canvas");
  cv.width = cv.height = 64;
  const ctx = cv.getContext("2d")!;
  ctx.lineCap = "round";
  for (const [w, c] of [[14, "rgba(0,0,0,0.6)"], [8, "#ffffff"]] as const) {
    ctx.strokeStyle = c; ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(14, 14); ctx.lineTo(50, 50); ctx.moveTo(50, 14); ctx.lineTo(14, 50); ctx.stroke();
  }
  downedX = new THREE.CanvasTexture(cv);
  downedX.colorSpace = THREE.SRGBColorSpace;
  return downedX;
}
let smokeTex: THREE.CanvasTexture | null = null;
function smokeTexture(): THREE.CanvasTexture {
  if (smokeTex) return smokeTex;
  const cv = document.createElement("canvas");
  cv.width = cv.height = 64;
  const ctx = cv.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(70,68,66,0.9)"); g.addColorStop(1, "rgba(70,68,66,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return (smokeTex = new THREE.CanvasTexture(cv));
}

type BadgeHit = { type: "deployable"; e: Deployable } | { type: "rally"; e: RallyPoint }
  | { type: "marker"; e: Marker }
  | { type: "player"; e: Player };

// ── Buildings: transparent while anything is inside ─────────────────────────
// Each building is one item with a world AABB and an aFade slot: an instance
// (generic placeholder houses) or a vertex range of a merged category mesh
// (SquadCalc's baked props, whose loader keeps per-part bounds + index slices).
const BUILDING_ALPHA = 0.25, BCELL = 32, INSIDE_MARGIN = 0.5;
const MIN_BUILDING_H = 2.5, MIN_BUILDING_W = 2;   // metres
interface BoxFade {
  fade: Float32Array; attr: THREE.BufferAttribute;
  boxes: Float32Array;              // minX,minY,minZ,maxX,maxY,maxZ per item
  ranges: Uint32Array | null;       // vertex start,count per item (merged mesh)
  grid: Map<number, number[]>; touched: number[];
}
function makeBoxFade(mesh: THREE.Mesh): BoxFade | null {
  mesh.updateMatrixWorld(true);
  const boxes: THREE.Box3[] = [];
  let fade: Float32Array, attr: THREE.BufferAttribute, ranges: Uint32Array | null = null;
  if ((mesh as THREE.InstancedMesh).isInstancedMesh) {
    const im = mesh as THREE.InstancedMesh;
    im.geometry = im.geometry.clone();
    im.geometry.computeBoundingBox();
    const m = new THREE.Matrix4();
    for (let i = 0; i < im.count; i++) {
      im.getMatrixAt(i, m);
      boxes.push(im.geometry.boundingBox!.clone().applyMatrix4(m.premultiply(im.matrixWorld)));
    }
    fade = new Float32Array(im.count).fill(1);
    attr = new THREE.InstancedBufferAttribute(fade, 1);
  } else {
    const parts = mesh.userData.parts as { box: THREE.Box3; start: number; count: number }[] | undefined;
    const index = mesh.geometry.index;
    if (!parts || !index) return null;
    ranges = new Uint32Array(parts.length * 2);
    parts.forEach((pt, i) => {
      // mergeGeometries keeps each part's vertices contiguous; find the run.
      let lo = Infinity, hi = -1;
      for (let k = pt.start; k < pt.start + pt.count; k++) {
        const v = index.getX(k);
        if (v < lo) lo = v;
        if (v > hi) hi = v;
      }
      ranges![i * 2] = lo; ranges![i * 2 + 1] = hi - lo + 1;
      boxes.push(pt.box.clone().applyMatrix4(mesh.matrixWorld));
    });
    fade = new Float32Array(mesh.geometry.attributes.position.count).fill(1);
    attr = new THREE.BufferAttribute(fade, 1);
  }
  attr.setUsage(THREE.DynamicDrawUsage);
  mesh.geometry.setAttribute("aFade", attr);
  patchFade(mesh.material as THREE.MeshStandardMaterial, false);
  const flat = new Float32Array(boxes.length * 6), grid = new Map<number, number[]>();
  boxes.forEach((b, i) => {
    flat.set([b.min.x, b.min.y, b.min.z, b.max.x, b.max.y, b.max.z], i * 6);
    // Only things you can be inside: tall enough to hide a soldier and not a
    // thin wall/fence/slab a passer-by would brush (those would just flicker).
    if (b.max.y - b.min.y < MIN_BUILDING_H
        || Math.min(b.max.x - b.min.x, b.max.z - b.min.z) < MIN_BUILDING_W) return;
    for (let cx = Math.floor(b.min.x / BCELL); cx <= Math.floor(b.max.x / BCELL); cx++)
      for (let cz = Math.floor(b.min.z / BCELL); cz <= Math.floor(b.max.z / BCELL); cz++) {
        const k = cellKey(cx, cz);
        (grid.get(k) ?? grid.set(k, []).get(k)!).push(i);
      }
  });
  return { fade, attr, boxes: flat, ranges, grid, touched: [] };
}
function setItemFade(f: BoxFade, i: number, a: number) {
  if (!f.ranges) { f.fade[i] = a; return; }
  const start = f.ranges[i * 2]!, count = f.ranges[i * 2 + 1]!;
  f.fade.fill(a, start, start + count);
  f.attr.addUpdateRange(start, count);
}
function fadeOccupied(f: BoxFade, units: number[]) {
  const was = f.touched;
  f.touched = [];
  const hit = new Set<number>();
  for (let u = 0; u < units.length; u += 3) {
    const x = units[u]!, y = units[u + 1]!, z = units[u + 2]!;
    for (const i of f.grid.get(cellKey(Math.floor(x / BCELL), Math.floor(z / BCELL))) ?? []) {
      const b = i * 6, m = INSIDE_MARGIN;
      if (x > f.boxes[b]! - m && y > f.boxes[b + 1]! - m && z > f.boxes[b + 2]! - m
          && x < f.boxes[b + 3]! + m && y < f.boxes[b + 4]! + m && z < f.boxes[b + 5]! + m)
        hit.add(i);
    }
  }
  if (!was.length && !hit.size) return;
  f.attr.clearUpdateRanges();
  for (const i of was) if (!hit.has(i)) setItemFade(f, i, 1);
  for (const i of hit) { setItemFade(f, i, BUILDING_ALPHA); f.touched.push(i); }
  if (!f.ranges) f.attr.clearUpdateRanges();   // instanced: tiny, upload whole
  f.attr.needsUpdate = true;
}

// Controls panel: a key-cap column and what it does.
function Row({ keys, label }: { keys: ReactNode; label: string }) {
  return <div className="m3d-row"><span className="m3d-keys">{keys}</span><span>{label}</span></div>;
}
// A mouse outline with the used button (or the wheel) lit.
function Mouse({ button }: { button?: "left" | "wheel" }) {
  return (
    <svg className="m3d-mouse" viewBox="0 0 14 20" aria-label={button ? `${button} mouse button` : "mouse"}>
      <rect x="1" y="1" width="12" height="18" rx="6" />
      <path d="M7 1v7M1 8h12" />
      {button === "left" && <path className="lit" d="M7 1.5A5.5 5.5 0 0 0 1.5 7V8H7Z" />}
      {button === "wheel" && <rect className="lit" x="5.8" y="3" width="2.4" height="4.2" rx="1.2" />}
    </svg>
  );
}

// ── Tree tiles ──────────────────────────────────────────────────────────────
// SquadCalc's loader gives one InstancedMesh per species for the whole map, so
// every tree was drawn every frame. Split into tiles the GPU can frustum-cull,
// and hide bushes / bare trunks past where they still read.
const TREE_TILE = 500;   // metres
function tileInstanced(mesh: THREE.InstancedMesh): THREE.InstancedMesh[] {
  const m = new THREE.Matrix4(), v = new THREE.Vector3(), c = new THREE.Color();
  const groups = new Map<number, number[]>();
  for (let i = 0; i < mesh.count; i++) {
    mesh.getMatrixAt(i, m);
    v.setFromMatrixPosition(m);
    const k = cellKey(Math.floor(v.x / TREE_TILE), Math.floor(v.z / TREE_TILE));
    (groups.get(k) ?? groups.set(k, []).get(k)!).push(i);
  }
  return [...groups.values()].map((idx) => {
    const t = new THREE.InstancedMesh(mesh.geometry, mesh.material, idx.length);
    t.name = mesh.name;
    t.position.copy(mesh.position); t.quaternion.copy(mesh.quaternion); t.scale.copy(mesh.scale);
    idx.forEach((src, j) => {
      mesh.getMatrixAt(src, m);
      t.setMatrixAt(j, m);
      if (mesh.instanceColor) { mesh.getColorAt(src, c); t.setColorAt(j, c); }
    });
    t.computeBoundingSphere();
    return t;
  });
}
const cullDistance = (name: string) =>
  /bush/i.test(name) ? 450 : /trunk/i.test(name) ? 1500 : Infinity;

// ── Capture zones ───────────────────────────────────────────────────────────
// The 2D map's shapes (SquadCalc geometry around the static anchor) as
// translucent walls standing on the terrain, fading out upward, plus a name
// label. Geometry is game cm; rot in degrees as drawCapGeometry/capOccupancy.
const CAP_WALL_H = 22;                     // metres
function capOutline(anchor: { x: number; y: number }, g: CapGeometry): [number, number][] {
  const cx = anchor.x + g.dx, cy = anchor.y + g.dy, pts: [number, number][] = [];
  if (g.type === "sphere") {
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      pts.push([cx + Math.cos(a) * g.radius, cy + Math.sin(a) * g.radius]);
    }
    return pts;
  }
  const local: [number, number][] = [];
  if (g.type === "box") {
    local.push([-g.extX, -g.extY], [g.extX, -g.extY], [g.extX, g.extY], [-g.extX, g.extY]);
  } else {
    // Capsule along local Y, half-length (length - radius), as capOccupancy.
    const half = Math.max(0, g.length - g.radius);
    for (let i = 0; i <= 16; i++) {
      const a = (i / 16) * Math.PI;
      local.push([Math.cos(a) * g.radius, half + Math.sin(a) * g.radius]);
    }
    for (let i = 0; i <= 16; i++) {
      const a = Math.PI + (i / 16) * Math.PI;
      local.push([Math.cos(a) * g.radius, -half + Math.sin(a) * g.radius]);
    }
  }
  const r = ((g.rot || 0) * Math.PI) / 180, co = Math.cos(r), si = Math.sin(r);
  for (const [lx, ly] of local) pts.push([cx + co * lx - si * ly, cy + si * lx + co * ly]);
  return pts;
}
// Closed wall strip along the outline: opaque-ish at the ground, gone at the top.
function capWall(t: Terrain, outline: [number, number][]): THREE.BufferGeometry {
  const n = outline.length, pos: number[] = [], col: number[] = [], idx: number[] = [];
  for (const [x, y] of outline) {
    const [X, Z] = toWorld(t, x, y), g = groundAt(t, X, Z);
    pos.push(X, g - 1, Z, X, g + CAP_WALL_H, Z);
    col.push(1, 1, 1, 0.6, 1, 1, 1, 0);
  }
  for (let i = 0; i < n; i++) {
    const a = i * 2, b = ((i + 1) % n) * 2;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 4));
  geo.setIndex(idx);
  return geo;
}
const capLabelTextures = new Map<string, THREE.CanvasTexture>();
function capLabelTexture(text: string, color: string): THREE.CanvasTexture {
  const key = `${text}|${color}`;
  const hit = capLabelTextures.get(key);
  if (hit) return hit;
  const cv = document.createElement("canvas"), ctx = cv.getContext("2d")!;
  const font = "bold 30px system-ui, sans-serif";
  ctx.font = font;
  cv.width = Math.ceil(ctx.measureText(text).width) + 32; cv.height = 48;
  ctx.font = font; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(15,17,22,0.85)"; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.roundRect(2, 2, cv.width - 4, cv.height - 4, 10); ctx.fill(); ctx.stroke();
  ctx.fillStyle = "#fff"; ctx.fillText(text, cv.width / 2, cv.height / 2 + 1);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  capLabelTextures.set(key, t);
  return t;
}

// ── Ground overlays: rings, discs and arrows lying on the terrain ───────────
// SquadCalc drapes its FOB/weapon bands in a shader; ours sit still (FOBs,
// rallies, placed markers), so they are draped once on the CPU from the
// height grid and cached by object + shape.
const DRAPE_LIFT = 0.8;   // metres above the ground grid, plus polygon offset
function groundSmooth(t: Terrain, X: number, Z: number): number {
  const fx = ((X + t.size / 2) / t.size) * (GRID - 1), fz = ((Z + t.size / 2) / t.size) * (GRID - 1);
  const c0 = Math.max(0, Math.min(GRID - 2, Math.floor(fx))), r0 = Math.max(0, Math.min(GRID - 2, Math.floor(fz)));
  const tx = Math.max(0, Math.min(1, fx - c0)), tz = Math.max(0, Math.min(1, fz - r0));
  const h = (r: number, c: number) => t.heights[r * GRID + c]!;
  return (h(r0, c0) * (1 - tx) + h(r0, c0 + 1) * tx) * (1 - tz)
       + (h(r0 + 1, c0) * (1 - tx) + h(r0 + 1, c0 + 1) * tx) * tz;
}
// Quads given as XZ corners (a, b on one edge, c, d on the other), draped.
function drape(t: Terrain, build: (quad: (...xz: number[]) => void) => void): THREE.BufferGeometry {
  const pos: number[] = [], idx: number[] = [];
  build((ax, az, bx, bz, cx, cz, dx, dz) => {
    const i = pos.length / 3;
    for (const [x, z] of [[ax, az], [bx, bz], [cx, cz], [dx, dz]] as const)
      pos.push(x, groundSmooth(t, x, z) + DRAPE_LIFT, z);
    idx.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}
function drapedRing(t: Terrain, X: number, Z: number, r0: number, r1: number, dashed = false) {
  const seg = Math.max(48, Math.min(720, Math.ceil((2 * Math.PI * r1) / 5)));
  return drape(t, (quad) => {
    for (let i = 0; i < seg; i++) {
      if (dashed && i % 4 >= 2) continue;
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      quad(X + Math.cos(a0) * r0, Z + Math.sin(a0) * r0, X + Math.cos(a1) * r0, Z + Math.sin(a1) * r0,
           X + Math.cos(a0) * r1, Z + Math.sin(a0) * r1, X + Math.cos(a1) * r1, Z + Math.sin(a1) * r1);
    }
  });
}
function drapedDisc(t: Terrain, X: number, Z: number, r: number) {
  return drape(t, (quad) => {
    const rings = 8, seg = 72;
    for (let j = 0; j < rings; j++) for (let i = 0; i < seg; i++) {
      const r0 = (j / rings) * r, r1 = ((j + 1) / rings) * r;
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      quad(X + Math.cos(a0) * r0, Z + Math.sin(a0) * r0, X + Math.cos(a1) * r0, Z + Math.sin(a1) * r0,
           X + Math.cos(a0) * r1, Z + Math.sin(a0) * r1, X + Math.cos(a1) * r1, Z + Math.sin(a1) * r1);
    }
  });
}
// A stroke along the ground: solid with an arrowhead (director) or dashed
// without one (frontline).
function drapedArrow(t: Terrain, x0: number, z0: number, x1: number, z1: number, w: number, head: boolean) {
  const len = Math.hypot(x1 - x0, z1 - z0) || 1, ux = (x1 - x0) / len, uz = (z1 - z0) / len;
  const px = -uz, pz = ux;
  const headLen = head ? Math.min(len * 0.35, w * 4) : 0, shaft = len - headLen;
  const half = (d: number) => d <= shaft ? w / 2 : (w * 1.4) * (1 - (d - shaft) / Math.max(1e-6, headLen));
  return drape(t, (quad) => {
    const step = 4;
    for (let d = 0; d < len; d += step) {
      const e = Math.min(len, d + step);
      if (!head && Math.floor(d / 8) % 2) continue;          // frontline dashes
      const h0 = d < shaft && e > shaft ? w / 2 : half(d), h1 = half(e);
      const ax = x0 + ux * d, az = z0 + uz * d, bx = x0 + ux * e, bz = z0 + uz * e;
      quad(ax - px * h0, az - pz * h0, bx - px * h1, bz - pz * h1,
           ax + px * h0, az + pz * h0, bx + px * h1, bz + pz * h1);
      if (head && d < shaft && e > shaft) {                  // widen into the head
        const sx = x0 + ux * shaft, sz = z0 + uz * shaft, hw = w * 1.4;
        quad(sx - px * hw, sz - pz * hw, bx - px * h1, bz - pz * h1,
             sx + px * hw, sz + pz * hw, bx + px * h1, bz + pz * h1);
      }
    }
  });
}
const overlayMats = new Map<string, THREE.MeshBasicMaterial>();
function overlayMat(color: string, opacity: number): THREE.MeshBasicMaterial {
  const key = `${color}|${opacity}`;
  let m = overlayMats.get(key);
  if (!m) {
    m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false,
      side: THREE.DoubleSide, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2,
      polygonOffsetUnits: -2 });
    overlayMats.set(key, m);
  }
  return m;
}
// Map-marker pictures: the 2D icon tinted to the team, a POI diamond, a point.
const markerTextures = new Map<string, THREE.Texture>();
function markerTexture(m: Marker, color: string): THREE.Texture | null {
  const shape = markerShape(m);
  const url = shape ? null : markerIconUrl(m);
  const key = `${shape ?? url}|${color}`;
  const hit = markerTextures.get(key);
  if (hit) return hit;
  let source: HTMLCanvasElement | HTMLImageElement;
  if (shape === "diamond" || shape === "point") {
    const cv = document.createElement("canvas"), ctx = cv.getContext("2d")!;
    cv.width = cv.height = 64;
    ctx.fillStyle = color; ctx.strokeStyle = "rgba(0,0,0,0.8)"; ctx.lineWidth = 5;
    ctx.beginPath();
    if (shape === "diamond") { ctx.moveTo(32, 6); ctx.lineTo(58, 32); ctx.lineTo(32, 58); ctx.lineTo(6, 32); ctx.closePath(); }
    else ctx.arc(32, 32, 14, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    source = cv;
  } else {
    if (!url) return null;
    const img = icon(url);
    if (!img.complete || !img.naturalWidth) return null;
    source = colorizedIcon(img, color) ?? img;
  }
  const t = new THREE.Texture(source);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  markerTextures.set(key, t);
  return t;
}

const TEX_KEY = "sqr.map3d.texture", FPS_KEY = "sqr.map3d.fps", SENS_KEY = "sqr.map3d.flySens";
const pref = (k: string, d: string) => { try { return localStorage.getItem(k) ?? d; } catch { return d; } };
const savePref = (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } };

interface Props {
  onHover: (hit: Hit | null, cssX: number, cssY: number) => void;
  onLeave: () => void;
  onClick: (hit: Hit | null) => void;
}

export function Map3D({ onHover, onLeave, onClick }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);
  // Latest handlers without re-running the scene effect.
  const cb = useRef({ onHover, onLeave, onClick });
  cb.current = { onHover, onLeave, onClick };
  const [help, setHelp] = useState(() => !helpClosed());
  const [flyingUi, setFlyingUi] = useState(false);
  const [texture, setTexture] = useState(() => pref(TEX_KEY, "basemap"));
  const [showFps, setShowFps] = useState(() => pref(FPS_KEY, "0") === "1");
  const api = useRef<{ setTexture(name: string): void } | null>(null);
  const fpsRef = useRef<HTMLDivElement | null>(null);
  const showFpsRef = useRef(showFps);
  showFpsRef.current = showFps;
  // Fly-mode mouse sensitivity, radians per pixel ×1000. Drag-look keeps 3.
  const [flySens, setFlySens] = useState(() => Number(pref(SENS_KEY, "1.5")) || 1.5);
  const flySensRef = useRef(flySens);
  flySensRef.current = flySens;
  const toggleHelp = (open: boolean) => {
    setHelp(open);
    try { localStorage.setItem(HELP_KEY, open ? "0" : "1"); } catch { /* private mode */ }
  };

  useEffect(() => {
    const host = hostRef.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // ponytail: capped at 1.5 — a 2x screen with MSAA was the biggest GPU bill;
    // lift the cap if the sharpness is missed more than the frame rate.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    const canvas = renderer.domElement;
    canvas.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab";
    host.prepend(canvas);
    const scene = new THREE.Scene();
    // Lighting as SquadCalc: neutral tone mapping, an HDR sky that is both the
    // background and the ambient/reflected light, a soft ambient and one sun at
    // 35 deg elevation / 130 deg azimuth. No shadows (they read too harsh here).
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 0.85;
    scene.background = new THREE.Color("#a9c4dc");       // until the sky arrives
    scene.environmentIntensity = 0.5;
    scene.add(new THREE.AmbientLight("#ffffff", 0.5));
    const sun = new THREE.DirectionalLight("#ffffff", 1.6);
    sun.position.setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 35), THREE.MathUtils.degToRad(130));
    scene.add(sun);
    new HDRLoader().load(skyUrl, (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = tex;
      scene.environment = tex;
      invalidate = true;
    });
    const camera = new THREE.PerspectiveCamera(55, 1, 0.5, 30000);
    camera.rotation.order = "YXZ";
    let yaw = 0, pitch = -Math.PI / 4;   // yaw 0 looks north (-Z)

    // Soldiers: a horizontal cone pointing along their heading.
    const soldierMeshes = { token: instanced(tokenGeometry(), MAX_PLAYERS) };
    scene.add(soldierMeshes.token);
    const drawnSoldiers = new Map<THREE.InstancedMesh, Player[]>();
    // Downed soldiers: a body lying along their heading, greyed team colour.
    // Downed: the token knocked flat into a grey puck.
    const bodies = instanced(new THREE.CylinderGeometry(TOKEN_R, TOKEN_R, 0.3, 20).translate(0, 0.15, 0), MAX_PLAYERS);
    scene.add(bodies);
    let drawnBodies: Player[] = [];
    // Explosions + wreck smoke, pooled by key and dropped when unused.
    const fxGroup = new THREE.Group();
    scene.add(fxGroup);
    const fxPool = new Map<string, THREE.Mesh | THREE.Sprite>();
    const blastGeo = new THREE.SphereGeometry(1, 16, 12);
    const events: Events = { first: null, upto: 0, deaths: [], blasts: new Map() };
    // Ground vehicles are blocks; helicopters a round disc (their rotor footprint).
    const vehMeshes = {
      box: instanced(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), MAX_VEHICLES),
      round: instanced(new THREE.CylinderGeometry(0.5, 0.5, 1, 32).translate(0, 0.5, 0), MAX_VEHICLES),
    };
    scene.add(vehMeshes.box, vehMeshes.round);
    // Icon quads (role badges, vehicle roof icons): one InstancedMesh per
    // texture, refilled every frame; each instance remembers its unit for picking.
    const iconGroup = new THREE.Group();
    scene.add(iconGroup);
    const iconLayers = new Map<string, { mesh: THREE.InstancedMesh; hits: HitEntity[] }>();
    const white = new THREE.Color(1, 1, 1);
    const addIcon = (key: string, tex: THREE.Texture | null, m: THREE.Matrix4, hit: HitEntity,
                     tint: THREE.Color = white, onTop = 0) => {
      if (!tex) { invalidate = true; return; }   // image still loading: try next frame
      let layer = iconLayers.get(key);
      if (!layer) {
        const mesh = new THREE.InstancedMesh(iconQuad, new THREE.MeshBasicMaterial(
          { map: tex, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide, depthWrite: false,
            depthTest: !onTop, toneMapped: false }), ICON_CAP);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        mesh.count = 0;
        mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(ICON_CAP * 3).fill(1), 3);
        // Turrets over hulls; badges (onTop) over everything, bigger ones last.
        mesh.renderOrder = onTop || (key.startsWith("t|") ? 1 : 0);
        iconGroup.add(mesh);
        layer = { mesh, hits: [] };
        iconLayers.set(key, layer);
      }
      if (layer.hits.length >= ICON_CAP) return;
      layer.mesh.setMatrixAt(layer.hits.length, m);
      layer.mesh.setColorAt(layer.hits.length, tint);
      layer.hits.push(hit);
    };
    type DeployMeshKind = Exclude<DeployKind3D, "helipad"> | "rally";
    const deployMeshes = {} as Record<DeployMeshKind, THREE.InstancedMesh>;
    for (const k of Object.keys(DEPLOY_SHAPES) as DeployMeshKind[]) {
      deployMeshes[k] = instanced(mergeGeometries(DEPLOY_SHAPES[k]())!, MAX_DEPLOY);
      scene.add(deployMeshes[k]);
    }
    const drawnDeploys = new Map<THREE.InstancedMesh, BadgeHit[]>();
    // HABs go see-through while a soldier is inside, like buildings.
    const habFade = new Float32Array(MAX_DEPLOY).fill(1);
    const habFadeAttr = new THREE.InstancedBufferAttribute(habFade, 1);
    habFadeAttr.setUsage(THREE.DynamicDrawUsage);
    deployMeshes.hab.geometry.setAttribute("aFade", habFadeAttr);
    patchFade(deployMeshes.hab.material as THREE.MeshStandardMaterial, false);
    // What each instance index stands for, for picking.
    let drawnPlayers: Player[] = [];
    const drawnVehicles = new Map<THREE.InstancedMesh, Vehicle[]>();
    let drawnSnap: Snapshot | null = null;
    if (import.meta.env.DEV) Object.assign(window, { __map3d: { soldierMeshes, vehMeshes, camera, scene, store: useViewerStore,
      buildingFades: () => buildingFades } });

    let terrain: Terrain | null = null;
    let textureName = pref(TEX_KEY, "basemap");
    api.current = {
      setTexture(name: string) {
        if (name === textureName) return;
        textureName = name;
        const t = terrain;
        if (!t) return;
        loadMapTexture(t.base, name).then((tex) => {
          if (terrain !== t || textureName !== name) { tex.dispose(); return; }
          const mat = t.mesh.material as THREE.MeshStandardMaterial;
          mat.map?.dispose();
          mat.map = tex;
          mat.needsUpdate = true;
          invalidate = true;
        }).catch((e) => setStatus(String(e)));
      },
    };
    let loadT0 = 0, terrainMs = 0, propsMs = 0;
    let vegTiles: THREE.InstancedMesh[] = [];
    let cullTiles: { mesh: THREE.InstancedMesh; center: THREE.Vector3; radius: number; max: number }[] = [];
    // Ground overlays (FOB/rally rings, marker arrows): built once per object +
    // shape, dropped when the object is gone or hidden.
    const overlays = new Map<string, { mesh: THREE.Mesh; sig: string }>();
    const overlayGroup = new THREE.Group();
    scene.add(overlayGroup);
    const clearOverlays = () => {
      for (const o of overlays.values()) { o.mesh.geometry.dispose(); overlayGroup.remove(o.mesh); }
      overlays.clear();
    };
    // Lines from each action marker to the player who placed it.
    const MAX_LINES = 64;
    const linePos = new Float32Array(MAX_LINES * 6), lineCol = new Float32Array(MAX_LINES * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(lineCol, 3).setUsage(THREE.DynamicDrawUsage));
    const actionLines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial(
      { vertexColors: true, transparent: true, opacity: 0.85, toneMapped: false }));
    actionLines.frustumCulled = false;
    scene.add(actionLines);
    // Follow camera: distance behind the target, changed with the wheel.
    let followDist = 45, following = "";
    let hoverRally: string | null = null;
    const caps = new Map<string, { group: THREE.Group; label: THREE.Sprite; mat: THREE.MeshBasicMaterial; sig: string }>();
    const capGroup = new THREE.Group();
    scene.add(capGroup);
    const clearCaps = () => {
      for (const c of caps.values()) {
        c.group.traverse((o) => (o as THREE.Mesh).geometry?.dispose());
        c.mat.dispose(); c.label.material.dispose();
        capGroup.remove(c.group);
      }
      caps.clear();
    };
    let fadeables: Fadeable[] = [];
    let treeGrid = new Map<number, number[]>();
    let buildingFades: BoxFade[] = [];
    // World X,Y,Z of everything that should see through trees / out of buildings.
    const unitXYZ: number[] = [];
    const overview = () => {
      if (!terrain) return;
      camera.position.set(0, terrain.size * 0.4, terrain.size * 0.45);
      yaw = 0; pitch = -Math.PI / 4;
    };
    let loadingMap: string | null = null;
    const setStatus = (t: string) => { if (statusRef.current) statusRef.current.textContent = t; };
    const ensureTerrain = (mapId: string | undefined) => {
      if (!mapId || mapId === loadingMap) return;
      loadingMap = mapId;
      const meta = (SQUADCALC as unknown as Record<string, MapMeta>)[mapId];
      if (!meta) { setStatus(`No SquadCalc 3D data for ${mapId}`); return; }
      setStatus(`Loading ${mapId} terrain…`);
      loadT0 = performance.now();
      loadTerrain(meta, textureName).then((t) => {
        if (loadingMap !== mapId) return;
        if (terrain) scene.remove(terrain.mesh);
        fadeables = [];
        treeGrid = new Map();
        buildingFades = [];
        cullTiles = [];
        clearCaps();
        clearOverlays();
        terrain = t;
        terrainMs = performance.now() - loadT0;
        scene.add(t.mesh);
        invalidate = true;
        overview();
        setStatus("Loading buildings & trees…");
        // Buildings + trees, in absolute metres like the terrain: only the corner
        // shift is needed (SquadCalc's terrain sits at -zOffset, ours doesn't).
        const props = new THREE.Group();
        props.position.set(-meta.corner0[0] - t.size / 2, Z_NUDGE,
                           -meta.corner0[1] - t.size / 2);
        t.mesh.add(props);
        const base = SQUADCALC_API + meta.url;
        return Promise.all([loadProps(base), loadTrees(base)]).then(([b, tr]) => {
          const tiles = tr.vegetation.flatMap((o) => (o as THREE.InstancedMesh).isInstancedMesh
            ? tileInstanced(o as THREE.InstancedMesh) : []);
          props.add(...b, ...tr.structures, ...tiles);
          props.updateMatrixWorld(true);
          invalidate = true;
          fadeables = tiles.map(makeFadeable);
          treeGrid = treeIndex(fadeables);
          cullTiles = tiles.map((m) => ({
            mesh: m, center: m.boundingSphere!.center.clone().applyMatrix4(m.matrixWorld),
            radius: m.boundingSphere!.radius, max: cullDistance(m.name),
          })).filter((c) => c.max < Infinity);
          buildingFades = [...b, ...tr.structures]
            .filter((o): o is THREE.Mesh => (o as THREE.Mesh).isMesh)
            .map(makeBoxFade).filter((f): f is BoxFade => f !== null);
          propsMs = performance.now() - loadT0;
          vegTiles = tiles;
          setStatus("");
        });
      }).catch((e) => setStatus(String(e)));
    };

    // ── Picking: entity meshes first, else the ground point through hitTest ──
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const pick = (cssX: number, cssY: number): Hit | null => {
      if (!terrain || !drawnSnap) return null;
      ndc.set((cssX / canvas.clientWidth) * 2 - 1, -(cssY / canvas.clientHeight) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      // Overlapping badges (an ammo crate beside its HAB): the bigger badge wins.
      const iconHit = raycaster.intersectObjects(iconGroup.children, false)
        .filter((i) => i.instanceId != null)
        .sort((a, b) => b.object.renderOrder - a.object.renderOrder || a.distance - b.distance)[0];
      if (iconHit) for (const layer of iconLayers.values())
        if (layer.mesh === iconHit.object && layer.hits[iconHit.instanceId!])
          return { d2: 0, hit: layer.hits[iconHit.instanceId!]! };
      const hits = raycaster.intersectObjects(
        [...Object.values(soldierMeshes), bodies, ...Object.values(vehMeshes), ...Object.values(deployMeshes)], false);
      const h = hits.find((i) => i.instanceId != null);
      if (h) {
        const sol = drawnSoldiers.get(h.object as THREE.InstancedMesh)?.[h.instanceId!];
        if (sol) return { d2: 0, hit: { type: "player", e: sol } };
        if (h.object === bodies) return { d2: 0, hit: { type: "player", e: drawnBodies[h.instanceId!]! } };
        const dep = drawnDeploys.get(h.object as THREE.InstancedMesh)?.[h.instanceId!];
        if (dep) return { d2: 0, hit: dep };
        const v = drawnVehicles.get(h.object as THREE.InstancedMesh)?.[h.instanceId!];
        if (v) return { d2: 0, hit: { type: "vehicle", e: v } };
      }
      const g = rayGround(terrain, raycaster.ray);
      if (!g) return null;
      const [gx, gy] = toGame(terrain, g.x, g.z);
      // ~12 css px at that distance, in game cm (matches the 2D hover radius).
      const px = (2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.distanceTo(g))
        / Math.max(1, canvas.clientHeight);
      return hitTest(drawnSnap, gx, gy, Math.max(300, 12 * px * 100));
    };

    // ── Controls: drag to look, WASD/ZQSD to fly, wheel zooms to the cursor ──
    const held = new Set<string>();
    let down: { x: number; y: number; moved: number } | null = null;
    // Two ways to look. Drag: no pointer lock, so Chrome's "controls your
    // pointer" banner never shows; the cursor just moves. Fly mode (double-click
    // or Enter, Esc leaves): one lock for the whole session, mouse looks without
    // a button held, and a centre crosshair does the picking.
    const flying = () => document.pointerLockElement === canvas;
    const centre = () => [canvas.clientWidth / 2, canvas.clientHeight / 2] as const;
    const enterFly = () => {
      if (!flying()) Promise.resolve(canvas.requestPointerLock()).catch(() => {});
    };
    const look = (e: PointerEvent) => {
      const k = flying() ? flySensRef.current / 1000 : 0.003;
      yaw -= e.movementX * k;
      pitch = Math.max(-1.55, Math.min(1.2, pitch - e.movementY * k));
    };
    const onPointerDown = (e: PointerEvent) => {
      if (flying()) return;
      down = { x: e.offsetX, y: e.offsetY, moved: 0 };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    // Hover picks once per frame (in the loop), not on every mouse event, and
    // only tells the app when something changed: each call re-renders the whole
    // App (tooltip state lives there), which made fly mode stutter.
    let hoverAt: { x: number; y: number } | null = null;
    let lastHover = "";
    const hover = (hit: Hit | null, x: number, y: number) => {
      const e = hit?.hit.e as { id?: string; eosId?: string | null; name?: string | null } | undefined;
      // Same unit + spot: refresh at most twice a second so its HP/weapon stay current.
      const key = hit ? `${hit.hit.type}:${e?.id ?? e?.eosId ?? e?.name}|${x}|${y}|${Math.floor(performance.now() / 500)}` : "none";
      if (key === lastHover) return;
      lastHover = key;
      const rally = hit?.hit.type === "rally" ? hit.hit.e.id : null;
      if (rally !== hoverRally) { hoverRally = rally; invalidate = true; }
      cb.current.onHover(hit, x, y);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (flying()) {
        look(e);
        const [cx, cy] = centre();
        hoverAt = { x: cx, y: cy };
        return;
      }
      if (down) {
        down.moved += Math.abs(e.movementX) + Math.abs(e.movementY);
        look(e);
        hoverAt = null;
        hover(null, 0, 0);
        return;
      }
      hoverAt = { x: e.offsetX, y: e.offsetY };
    };
    const onPointerUp = (e: PointerEvent) => {
      if (e.button === 0) {
        if (flying()) { const [cx, cy] = centre(); cb.current.onClick(pick(cx, cy)); }
        else if (down && down.moved < 5) cb.current.onClick(pick(e.offsetX, e.offsetY));
      }
      down = null;
      canvas.style.cursor = "grab";
    };
    const onLockChange = () => {
      setFlyingUi(flying());
      if (!flying()) hover(null, 0, 0);
    };
    const stopFollow = () => {
      const st = useViewerStore.getState();
      if (st.followKey) st.setFollowKey(null);
      if (st.followVehicleId) st.setFollowVehicleId(null);
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!terrain) return;
      if (following) {
        followDist = Math.max(6, Math.min(2000, followDist * (e.deltaY > 0 ? 1.2 : 1 / 1.2)));
        invalidate = true;
        return;
      }
      if (flying()) ndc.set(0, 0);
      else ndc.set((e.offsetX / canvas.clientWidth) * 2 - 1, -(e.offsetY / canvas.clientHeight) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const g = rayGround(terrain, raycaster.ray);
      const dist = g ? camera.position.distanceTo(g) : 500;
      // Each notch covers 20% of the way to what's under the cursor.
      const step = Math.sign(e.deltaY) * -Math.max(2, dist * 0.2);
      if (step > 0 && dist - step < 3) return;
      camera.position.addScaledVector(raycaster.ray.direction, step);
    };
    const typing = (e: KeyboardEvent) =>
      e.target instanceof HTMLElement && e.target.closest("input,textarea,[contenteditable]");
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || typing(e)) return;
      if (e.code === "KeyF") { stopFollow(); overview(); return; }
      if (e.code === "Enter") { enterFly(); return; }
      if (KEYS[e.code] || e.code.startsWith("Shift")) held.add(e.code);
    };
    const onKeyUp = (e: KeyboardEvent) => { held.delete(e.code); };
    const onBlur = () => held.clear();
    const noMenu = (e: Event) => e.preventDefault();
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("dblclick", enterFly);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", () => cb.current.onLeave());
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("contextmenu", noMenu);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    window.addEventListener("map3d-fit", overview);
    document.addEventListener("pointerlockchange", onLockChange);

    const fwd = new THREE.Vector3(), right = new THREE.Vector3();
    const fly = (dt: number) => {
      camera.rotation.set(pitch, yaw, 0);
      if (!terrain) return;
      const ground = groundAt(terrain, camera.position.x, camera.position.z);
      const act = new Set([...held].map((c) => KEYS[c]));
      if (act.size && following) stopFollow();      // flying away ends the follow
      if (act.size) {
        // Faster the higher you are; Shift triples it.
        const boost = held.has("ShiftLeft") || held.has("ShiftRight") ? 3 : 1;
        const speed = Math.max(15, Math.min(800, camera.position.y - ground)) * boost * dt;
        fwd.set(-Math.sin(yaw), 0, -Math.cos(yaw));
        right.set(Math.cos(yaw), 0, -Math.sin(yaw));
        if (act.has("f")) camera.position.addScaledVector(fwd, speed);
        if (act.has("b")) camera.position.addScaledVector(fwd, -speed);
        if (act.has("r")) camera.position.addScaledVector(right, speed);
        if (act.has("l")) camera.position.addScaledVector(right, -speed);
        if (act.has("u")) camera.position.y += speed;
        if (act.has("d")) camera.position.y -= speed;
      }
      camera.position.y = Math.max(camera.position.y,
        groundAt(terrain, camera.position.x, camera.position.z) + 2);
    };

    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(),
      p = new THREE.Vector3(), sc = new THREE.Vector3(),
      up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
    const place = (mesh: THREE.InstancedMesh, i: number, t: Terrain,
                   x: number, y: number, z: number | null, yaw: number | null,
                   team: number | null | undefined, minScreen: number, color?: THREE.Color,
                   dims?: [number, number, number]): number => {
      const [X, Z] = toWorld(t, x, y);
      // Null z (some vehicles) → sit on the terrain.
      p.set(X, z != null ? z / 100 : groundAt(t, X, Z), Z);
      // UE yaw turns +X toward +Y (south = +Z); three's Y-rotation turns +X
      // toward -Z, hence the minus.
      q.setFromAxisAngle(up, -((yaw ?? 0) * Math.PI) / 180);
      // Life-size up close, never smaller than ~minScreen of the view far away.
      const k = Math.max(1, camera.position.distanceTo(p) / minScreen);
      if (dims) sc.set(dims[0] * k, dims[1] * k, dims[2] * k); else sc.setScalar(k);
      mesh.setMatrixAt(i, m4.compose(p, q, sc));
      mesh.setColorAt(i, color ?? col.set(teamColor(team)));
      return k;
    };
    const qIcon = new THREE.Quaternion(), qTurret = new THREE.Quaternion(), camUp = new THREE.Vector3();
    const downDark = new THREE.Color("#15171c");
    const grey = new THREE.Color("#8a8f98"), wreck = new THREE.Color("#2b2623"), tmpCol = new THREE.Color();

    const lastClock = { current: 0 };
    let raf = 0, last = performance.now();
    // Render on demand: a paused replay with a still camera draws nothing.
    // `invalidate` covers what arrives on its own (terrain, props, icon images).
    let invalidate = true;
    let prev = { cam: "", clock: -1, snap: null as unknown, team: null as unknown,
                 layers: null as unknown, ui: "" };
    let frames = 0, fpsAt = performance.now();
    let benching = false, renderMs = 0;
    // Bench-only section timers (ms summed per shot): where the update goes.
    const prof: Record<string, number> = {};
    let lapT = 0;
    const lap = (name: string) => {
      if (!benching) return;
      const t = performance.now();
      if (name !== "start") prof[name] = (prof[name] ?? 0) + t - lapT;
      lapT = t;
    };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!benching) frame(performance.now());
    };
    const frame = (now: number) => {
      if (now - last < 1000 / MAX_FPS - 1) return;          // frame cap
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (now - fpsAt >= 500) {
        const fps = Math.round((frames * 1000) / (now - fpsAt));
        if (fpsRef.current) fpsRef.current.textContent = showFpsRef.current
          ? (fps ? `${fps} fps` : "idle") : "";
        frames = 0; fpsAt = now;
      }
      const w = host.clientWidth, h = host.clientHeight;
      if (canvas.width !== Math.floor(w * renderer.getPixelRatio())
          || canvas.height !== Math.floor(h * renderer.getPixelRatio())) {
        renderer.setSize(w, h, false);
        camera.aspect = w / Math.max(1, h);
        camera.updateProjectionMatrix();
      }
      const s = useViewerStore.getState();
      ensureTerrain(s.curSnap?.gameState?.layer?.mapId);
      fly(dt);
      if (hoverAt) {
        hover(pick(hoverAt.x, hoverAt.y), hoverAt.x, hoverAt.y);
        hoverAt = null;
      }
      const cam = `${camera.position.toArray()}|${yaw}|${pitch}|${w}x${h}`;
      const clock = s.mode === "replay" && replayClock.valid ? replayClock.ms : -1;
      const ui = `${s.followKey}|${s.followVehicleId}|${s.selectedInfo?.kind}:${s.selectedInfo?.id}`;
      if (!invalidate && s.mode === "replay" && cam === prev.cam && clock === prev.clock
          && s.curSnap === prev.snap && s.teamView === prev.team && s.layers === prev.layers
          && ui === prev.ui) return;
      invalidate = false;
      prev = { cam, clock, snap: s.curSnap, team: s.teamView, layers: s.layers, ui };
      const shown = s.curSnap ? displaySnapshot(s, lastClock) ?? s.curSnap : null;
      const snap = shown ? teamViewSnapshot(shown, s.teamView) : null;
      if (terrain && snap) {
        lap("start");
        // Projectiles aren't drawn in 3D, so keep them out of picking too (the
        // 2D hitTest would otherwise answer a hover with a passing 30mm round).
        // The 2D settings' layer switches apply here too (and to picking).
        const L = s.layers;
        const shownPlayers = L.players ? snap.players ?? [] : [];
        const shownVehicles = L.vehicles ? snap.vehicles ?? [] : [];
        const shownDeploys = L.deployables ? snap.deployables ?? [] : [];
        const shownRallies = L.rallies ? snap.rallyPoints ?? [] : [];
        const shownMarkers = L.markers ? snap.markers ?? [] : [];
        drawnSnap = { ...snap, projectiles: [], players: shownPlayers, vehicles: shownVehicles,
                      deployables: shownDeploys, rallyPoints: shownRallies, markers: shownMarkers };

        // Follow: the camera trails the followed player/vehicle; drag still
        // turns it around them, the wheel sets the distance.
        const fKey = s.followKey, fVeh = s.followVehicleId;
        const nowFollowing = fKey ? "p" + fKey : fVeh ? "v" + fVeh : "";
        if (nowFollowing && nowFollowing !== following && pitch > -0.25) pitch = -0.5;
        following = nowFollowing;
        const fp = fKey ? (snap.players ?? []).find((pl) => pKey(pl) === fKey) : undefined;
        const fv = fVeh ? (snap.vehicles ?? []).find((v) => v.id === fVeh) : undefined;
        const fpos = fp?.soldier?.position ?? fv?.position;
        if (fpos) {
          const [X, Z] = toWorld(terrain, fpos.x, fpos.y);
          const Y = (fpos.z != null ? fpos.z / 100 : groundAt(terrain, X, Z)) + (fv ? 2.5 : 1.2);
          camera.position.set(
            X + Math.sin(yaw) * Math.cos(pitch) * followDist,
            Y - Math.sin(pitch) * followDist,
            Z + Math.cos(yaw) * Math.cos(pitch) * followDist);
          camera.position.y = Math.max(camera.position.y, groundAt(terrain, camera.position.x, camera.position.z) + 2);
          camera.rotation.set(pitch, yaw, 0);
        }
        // Spotlight: following a player dims everyone outside their squad.
        const spot = fp && fp.squadId != null ? { team: fp.teamId, squad: fp.squadId } : null;
        const inSpot = (pl: Player) => !spot || (pl.teamId === spot.team && pl.squadId === spot.squad);
        const dimTint = new THREE.Color(0.42, 0.42, 0.42);
        const replay = s.mode === "replay";
        const frames = replay ? s.replay.frames : s.snapBuffer.map((b) => b.snap);
        const nowMs = replay && replayClock.valid ? replayClock.ms : ts(snap);
        scanEvents(events, frames);
        // A vehicle is a wreck from the moment its explosion plays, not from the
        // interpolation's next frame (which showed the wreck before the blast).
        const isWreck = (v: Vehicle) => {
          const b = events.blasts.get(v.id);
          return b ? nowMs >= b.t : (v.health ?? 1) <= 0;
        };
        drawnPlayers = [];
        drawnBodies = [];
        for (const m of Object.values(soldierMeshes)) drawnSoldiers.set(m, []);
        for (const layer of iconLayers.values()) layer.hits.length = 0;
        for (const pl of shownPlayers) {
          const so = pl.soldier;
          if (!so?.position || !present(so) || so.attached || isAdminCam(so)) continue;
          if (isDowned(so)) {
            if (drawnBodies.length >= MAX_PLAYERS) continue;
            // The capsule centre sits ~0.8 m up; a body lies on the ground. A
            // downed capsule is already low, so never go below the terrain mesh
            // (or the puck sinks out of sight); upper floors keep their height.
            const [bx, bz] = toWorld(terrain, so.position.x, so.position.y);
            const bodyZ = Math.max((so.position.z ?? -Infinity) - 70, groundSmooth(terrain, bx, bz) * 100 + 5);
            const k = place(bodies, drawnBodies.length, terrain, so.position.x, so.position.y,
                            bodyZ, so.yaw, pl.teamId, 120,
                            tmpCol.set(teamColor(pl.teamId)).lerp(downDark, 0.7));
            // A white X lying on the puck.
            p.y += 0.32 * k;
            addIcon("x", downedXTexture(), m4.compose(p, FLAT, sc.set(1.1 * k, 1.1 * k, 1)),
                    { type: "player", e: pl });
            drawnBodies.push(pl);
            continue;
          }
          const mesh = soldierMeshes.token, list = drawnSoldiers.get(mesh)!;
          if (list.length >= MAX_PLAYERS) continue;
          const lit = inSpot(pl), tc = teamColor(pl.teamId);
          const k = place(mesh, list.length, terrain, so.position.x, so.position.y,
                          so.position.z, so.yaw, pl.teamId, 120,
                          lit ? undefined : tmpCol.set(tc).lerp(downDark, 0.6));
          // The 2D role badge, floating above the token and facing the camera.
          const url = roleIconUrl(pl) ?? ROLE_FALLBACK;
          p.y += (FEET + TOKEN_H + 0.8) * k;
          const hit: HitEntity = { type: "player", e: pl };
          addIcon(`r|${url}|${tc}`, badgeTexture(url, tc, false, null),
                  m4.compose(p, camera.quaternion, sc.setScalar((spot && lit ? 1.8 : 1.5) * k)), hit,
                  lit ? white : dimTint);
          // Squad number under the badge (2D's "Squad leader numbers" / "All numbers").
          if (pl.squadId != null && ((L.slNumbers && isSquadLeader(pl)) || L.squadNumbers)) {
            const nt = capLabelTexture(String(pl.squadId), tc), img = nt.image as HTMLCanvasElement;
            p.y -= 1.25 * k;
            addIcon(`n|${pl.squadId}|${tc}`, nt,
                    m4.compose(p, camera.quaternion, sc.set(0.6 * k * img.width / img.height, 0.6 * k, 1)),
                    hit, lit ? white : dimTint);
          }
          list.push(pl);
          drawnPlayers.push(pl);
        }
        for (const [m, list] of drawnSoldiers) m.count = list.length;
        bodies.count = drawnBodies.length;
        for (const m of Object.values(vehMeshes)) drawnVehicles.set(m, []);
        const eosSquad = new Map<string, number>();
        if (L.squadNumbers) for (const pl of snap.players ?? [])
          if (pl.eosId && pl.squadId != null) eosSquad.set(pl.eosId, pl.squadId);
        for (const v of shownVehicles) {
          if (!v.position) continue;
          const kind = vehicleKind3d(v.classShort), heli = kind === "heli" || kind === "heliLight";
          const dead = isWreck(v);
          const mesh = heli ? vehMeshes.round : vehMeshes.box, list = drawnVehicles.get(mesh)!;
          if (list.length >= MAX_VEHICLES) continue;
          const dims = VEHICLE_DIMS[kind];
          const k = place(mesh, list.length, terrain, v.position.x, v.position.y, v.position.z,
                          v.yaw, v.team, 300, dead ? wreck : undefined, dims);
          list.push(v);
          // The 2D vehicle icon printed on the roof, turned with the hull.
          const url = vehicleIconUrl(v);
          if (url) {
            p.y += dims[1] * k + 0.05;
            const size = dims[0] * (heli ? 0.95 : 1.15) * k;   // fit inside the round disc
            addIcon(`v|${url}`, vehicleIconTexture(url),
                    m4.compose(p, qIcon.multiplyQuaternions(q, FLAT), sc.set(size, size, 1)),
                    { type: "vehicle", e: v });
            // Tanks/IFVs: the 2D base icon has no turret; lay the turret icon on
            // top (same size + centre, like 2D) turned to hull yaw + turret yaw.
            // Unknown turret yaw: straight ahead rather than no turret at all.
            const turretUrl = vehicleTurretIconUrl(v);
            if (turretUrl) {
              const tYaw = (v.yaw ?? 0) + (v.turrets?.[0]?.yaw ?? 0);
              qTurret.setFromAxisAngle(up, -(tYaw * Math.PI) / 180);
              p.y += 0.05 * k;
              addIcon(`t|${turretUrl}`, vehicleIconTexture(turretUrl),
                      m4.compose(p, qIcon.multiplyQuaternions(qTurret, FLAT), sc.set(size, size, 1)),
                      { type: "vehicle", e: v });
            }
          }
          // Driver's squad number above the vehicle ("All numbers").
          const sq = L.squadNumbers ? vehicleSquadNumber(v, eosSquad) : null;
          if (sq != null) {
            const tcv = teamColor(v.team), nt = capLabelTexture(String(sq), tcv);
            const img = nt.image as HTMLCanvasElement, hgt = 2.4 * k;
            p.y += 2.5 * k;
            addIcon(`n|${sq}|${tcv}`, nt,
                    m4.compose(p, camera.quaternion, sc.set(hgt * img.width / img.height, hgt, 1)),
                    { type: "vehicle", e: v });
          }
        }
        lap("players+vehicles");
        unitXYZ.length = 0;
        const pushUnit = (pos: { x: number; y: number; z: number | null }, lift: number) => {
          const [X, Z] = toWorld(terrain!, pos.x, pos.y);
          unitXYZ.push(X, (pos.z != null ? pos.z / 100 : groundAt(terrain!, X, Z)) + lift, Z);
        };
        for (const pl of [...drawnPlayers, ...drawnBodies]) pushUnit(pl.soldier!.position!, 0);
        // A vehicle's origin is at its wheels; test a point inside the hull.
        for (const list of drawnVehicles.values()) for (const v of list) pushUnit(v.position!, 1);
        // Badges: FOB radios, HABs, ammo/repair/mortars/mines, rallies.
        // Constant on-screen size: px → world size per metre of camera distance.
        const pxScale = (2 * Math.tan((camera.fov * Math.PI) / 360)) / Math.max(1, canvas.clientHeight);
        const badge = (url: string | null, pos: { x: number; y: number; z: number | null } | null,
                       color: string, emphasis: boolean, label: string | null,
                       px: number, hit: BadgeHit, opts: { texture?: THREE.Texture | null } = {}) => {
          if ((!url && !("texture" in opts)) || !pos) return;
          const tex = "texture" in opts ? opts.texture ?? null : badgeTexture(url!, color, emphasis, label);
          if (!tex) { invalidate = true; return; }
          const [bx, bz] = toWorld(terrain!, pos.x, pos.y);
          // One draw call per picture instead of one per badge: a sprite each
          // cost ~25 us of CPU, and a match carries 100+ badges and markers.
          // Scaled with distance to keep a constant on-screen size.
          const img = tex.image as HTMLCanvasElement;
          p.set(bx, (pos.z != null ? pos.z / 100 : groundAt(terrain!, bx, bz)) + BADGE_LIFT, bz);
          const wpx = px * pxScale * camera.position.distanceTo(p), hpx = wpx * img.height / img.width;
          // Keep the disc centre on the anchor; a label pill hangs below it.
          camUp.set(0, 1, 0).applyQuaternion(camera.quaternion);
          p.addScaledVector(camUp, -(hpx - Math.min(hpx, wpx)) / 2);
          addIcon(`b|${tex.uuid}`, tex, m4.compose(p, camera.quaternion, sc.set(wpx, hpx, 1)),
                  hit, white, 10 + px);
          if (hit.type !== "marker") unitXYZ.push(bx, p.y - BADGE_LIFT + 0.3, bz);
        };
        for (const m of Object.values(deployMeshes)) drawnDeploys.set(m, []);
        const model = (k: DeployMeshKind, pos: { x: number; y: number; z: number | null } | null,
                       yaw: number | null, team: number | null, hit: BadgeHit, color?: THREE.Color) => {
          if (!pos) return;
          const mesh = deployMeshes[k], list = drawnDeploys.get(mesh)!;
          if (list.length >= MAX_DEPLOY) return;
          place(mesh, list.length, terrain!, pos.x, pos.y, pos.z, yaw, team, 220, color);
          list.push(hit);
        };
        // Ground overlays seen this frame; the rest are dropped below.
        const ovSeen = new Set<string>();
        const overlay = (key: string, sig: string, build: () => THREE.BufferGeometry,
                         mat: THREE.MeshBasicMaterial) => {
          let o = overlays.get(key);
          if (o && o.sig !== sig) { o.mesh.geometry.dispose(); overlayGroup.remove(o.mesh); overlays.delete(key); o = undefined; }
          if (!o) {
            o = { mesh: new THREE.Mesh(build(), mat), sig };
            o.mesh.renderOrder = 2;
            overlayGroup.add(o.mesh);
            overlays.set(key, o);
          }
          o.mesh.material = mat;
          ovSeen.add(key);
        };
        const at = (pos: { x: number; y: number }) => toWorld(terrain!, pos.x, pos.y);
        const posSig = (pos: { x: number; y: number }) => `${Math.round(pos.x)},${Math.round(pos.y)}`;
        for (const d of shownDeploys) {
          // FOB: 150 m build-block disc + ring, dashed 400 m influence ring.
          if (d.isFob && d.position) {
            const [X, Z] = at(d.position), tc = teamColor(d.team), sg = posSig(d.position);
            overlay(`fob-fill:${d.id}`, sg, () => drapedDisc(terrain!, X, Z, 150), overlayMat(tc, 0.1));
            overlay(`fob-ring:${d.id}`, sg, () => drapedRing(terrain!, X, Z, 148.5, 151.5), overlayMat(tc, 0.55));
            overlay(`fob-inf:${d.id}`, sg, () => drapedRing(terrain!, X, Z, 398, 402, true), overlayMat(tc, 0.8));
          }
          const isHab = !d.isFob && (d.classShort ?? "").toUpperCase().includes("HAB");
          const hit: BadgeHit = { type: "deployable", e: d };
          const dk = deployKind3d(d);
          // Helipads are flat ground markings: badge only, no model.
          badge(deployableIconUrl(d), d.position, teamColor(d.team),
                !!(d.isFob || isHab), null, d.isFob ? 30 : isHab ? 28 : 22, hit);
          if (dk !== "helipad") model(dk, d.position, d.yaw, d.team, hit);
        }
        const selRally = s.selectedInfo?.kind === "rally" ? s.selectedInfo.id : null;
        for (const rp of shownRallies) {
          const hit: BadgeHit = { type: "rally", e: rp };
          // 30 m radius: hovered or selected rally (as 2D), and any under siege.
          if (rp.position && (rp.sieged || rp.id === hoverRally || rp.id === selRally)) {
            const [X, Z] = at(rp.position), sg = posSig(rp.position);
            const rc = rp.sieged ? "#ff3b3b" : teamColor(rp.squadTeamId ?? rp.team);
            overlay(`rally-fill:${rp.id}`, sg, () => drapedDisc(terrain!, X, Z, 30), overlayMat(rc, 0.14));
            overlay(`rally-ring:${rp.id}`, sg, () => drapedRing(terrain!, X, Z, 29.6, 30.4, true), overlayMat(rc, 0.9));
          }
          badge(RALLY_ICON, rp.position,
                rp.spawningEnabled ? teamColor(rp.squadTeamId ?? rp.team) : "#5a5a5a",
                false, rp.squadId != null ? String(rp.squadId) : "?", 26, hit);
          model("rally", rp.position, null, rp.squadTeamId ?? rp.team, hit,
                rp.spawningEnabled ? undefined : grey);
        }
        lap("deployables+rallies");
        // Map markers: pictures as badges, dragged directions/frontlines on the ground.
        let lines = 0;
        for (const m of shownMarkers) {
          if (!m.position) continue;
          const mc = teamColor(m.team), shape = markerShape(m), hit: BadgeHit = { type: "marker", e: m };
          const end = shape === "arrow" || shape === "frontline" ? arrowEnd(m) : null;
          if (end) {
            // An EnemyDirector calls out the other side: drawn in their colour (as 2D).
            const shaft = /enemydirector/i.test(m.type ?? "")
              ? teamColor(m.team === 1 ? 2 : m.team === 2 ? 1 : 0) : mc;
            const [X0, Z0] = at(m.position), [X1, Z1] = at(end);
            overlay(`mk:${m.id}`, `${posSig(m.position)}>${posSig(end)}|${shape}`,
                    () => drapedArrow(terrain!, X0, Z0, X1, Z1, shape === "arrow" ? 4 : 3, shape === "arrow"),
                    overlayMat(shaft, 0.85));
            continue;
          }
          badge(null, m.position, mc, false, null, 24, hit, { texture: markerTexture(m, mc) });
          const placer = lines < MAX_LINES ? actionMarkerPlacer(m, shownPlayers) : null;
          if (placer) {
            const sp = placer.soldier!.position!, [AX, AZ] = at(sp), [BX, BZ] = at(m.position);
            const ay = sp.z != null ? sp.z / 100 + 1 : groundAt(terrain, AX, AZ) + 1;
            const by = groundSmooth(terrain, BX, BZ) + 1;
            linePos.set([AX, ay, AZ, BX, by, BZ], lines * 6);
            const c = tmpCol.set(mc);
            lineCol.set([c.r, c.g, c.b, c.r, c.g, c.b], lines * 6);
            lines++;
          }
        }
        lineGeo.setDrawRange(0, lines * 2);
        lineGeo.attributes.position!.needsUpdate = true;
        lineGeo.attributes.color!.needsUpdate = true;
        for (const [key, o] of overlays) if (!ovSeen.has(key)) {
          o.mesh.geometry.dispose(); overlayGroup.remove(o.mesh); overlays.delete(key);
        }
        // Graves (gave up / bled out) stay until that player is back on the
        // map: respawned, or downed again elsewhere. Only the latest one counts.
        const graves = new Map<string, Death>();
        if (L.players) for (const d of events.deaths) if (d.t <= nowMs) graves.set(pKey(d.player), d);
        for (const pl of snap.players ?? []) if (pl.soldier && present(pl.soldier)) graves.delete(pKey(pl));
        for (const d of graves.values())
          badge(DEATH_ICON, d, "#4a505a", false, null, 18, { type: "player", e: d.player });
        lap("markers+graves");
        // Explosions: a fireball for BLAST_MS from the frame HP hit zero.
        const fxSeen = new Set<string>();
        const fx = <T extends THREE.Mesh | THREE.Sprite>(key: string, make: () => T): T => {
          let o = fxPool.get(key) as T | undefined;
          if (!o) { o = make(); fxPool.set(key, o); fxGroup.add(o); }
          fxSeen.add(key);
          return o;
        };
        for (const [id, b] of L.vehicles ? [...events.blasts] : []) {
          const age = nowMs - b.t;
          if (age < 0 || age > BLAST_MS) continue;
          const k = age / BLAST_MS, [X, Z] = toWorld(terrain, b.x, b.y);
          const Y = b.z != null ? b.z / 100 : groundAt(terrain, X, Z);
          // Opaque orange shell + bright additive core, fast out, slow fade.
          for (const [layer, colr, size] of [[0, "#ff6a10", 7], [1, "#fff1b0", 3.5]] as const) {
            const m = fx("b" + layer + id, () => new THREE.Mesh(blastGeo, new THREE.MeshBasicMaterial({
              color: colr, transparent: true, depthWrite: false,
              blending: layer ? THREE.AdditiveBlending : THREE.NormalBlending })));
            m.position.set(X, Y + 1.5 + k * 4, Z);
            m.scale.setScalar(1 + size * Math.pow(k, 0.3));
            (m.material as THREE.MeshBasicMaterial).opacity = Math.pow(1 - k, layer ? 2 : 1.3) * 0.95;
          }
        }
        // Wrecks: charred hull (above) plus a rising smoke column while the game
        // keeps the wreck around.
        const sec = nowMs / 1000;
        for (const v of shownVehicles) {
          if (!isWreck(v) || !v.position) continue;
          const [X, Z] = toWorld(terrain, v.position.x, v.position.y);
          const Y = v.position.z != null ? v.position.z / 100 : groundAt(terrain, X, Z);
          for (let k = 0; k < 6; k++) {
            const h = (sec * 2 + k * 3) % 18;            // metres risen, loops
            const sp = fx(`s${k}${v.id}`, () => new THREE.Sprite(new THREE.SpriteMaterial({
              map: smokeTexture(), transparent: true, depthWrite: false })));
            sp.position.set(X + Math.sin(h * 0.4 + k) * 0.8 + h * 0.25, Y + 2 + h, Z);
            sp.scale.setScalar(3 + h * 0.45);
            sp.material.opacity = 0.7 * (1 - h / 18);
          }
        }
        for (const [key, o] of fxPool) if (!fxSeen.has(key)) {
          fxGroup.remove(o); (o.material as THREE.Material).dispose(); fxPool.delete(key);
        }
        lap("fx");
        for (const c of cullTiles)
          c.mesh.visible = camera.position.distanceTo(c.center) - c.radius < c.max;

        // Capture zones (AAS/Invasion) or, on RAAS, the lane's static objectives.
        const capSeen = new Set<string>();
        const showCap = (key: string, anchor: { x: number; y: number }, geometry: CapGeometry[],
                         color: string, strength: number, text: string) => {
          const sig = `${Math.round(anchor.x)},${Math.round(anchor.y)}|${JSON.stringify(geometry)}`;
          let c = caps.get(key);
          if (c && c.sig !== sig) {
            c.group.traverse((o) => (o as THREE.Mesh).geometry?.dispose());
            capGroup.remove(c.group);
            caps.delete(key);
            c = undefined;
          }
          if (!c) {
            const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true,
              side: THREE.DoubleSide, depthWrite: false, toneMapped: false });
            const group = new THREE.Group();
            for (const g of geometry) group.add(new THREE.Mesh(capWall(terrain!, capOutline(anchor, g)), mat));
            const label = new THREE.Sprite(new THREE.SpriteMaterial(
              { sizeAttenuation: false, depthTest: false, depthWrite: false, toneMapped: false }));
            label.center.set(0.5, 0);
            label.renderOrder = 5;
            const [X, Z] = toWorld(terrain!, anchor.x, anchor.y);
            label.position.set(X, groundAt(terrain!, X, Z) + CAP_WALL_H + 3, Z);
            group.add(label);
            capGroup.add(group);
            c = { group, label, mat, sig };
            caps.set(key, c);
          }
          c.mat.color.set(color);
          c.mat.opacity = strength;
          if (text) {
            const tex = capLabelTexture(text, color);
            if (c.label.material.map !== tex) { c.label.material.map = tex; c.label.material.needsUpdate = true; }
            const img = tex.image as HTMLCanvasElement, hpx = 22 * pxScale;
            c.label.scale.set(hpx * img.width / img.height, hpx, 1);
          }
          c.label.visible = !!text;
          capSeen.add(key);
        };
        const zones = visibleCaps(snap.captureZones ?? []);
        for (const cz of zones) {
          const anchor = cz.staticPosition ?? cz.position;
          if (!anchor) continue;
          const contested = (cz.capturingTeam ?? 0) > 0 && cz.capturingTeam !== cz.owningTeam;
          const col = teamColor(contested ? cz.capturingTeam : cz.owningTeam);
          const pct = cz.capturePercent != null && cz.capturePercent > 0 && cz.capturePercent < 1
            ? ` ${Math.round(cz.capturePercent * 100)}%` : "";
          showCap("z" + cz.id, anchor,
                  cz.geometry?.length ? cz.geometry : [{ type: "sphere", dx: 0, dy: 0, radius: 7500 }],
                  col, cz.isLocked ? 0.35 : contested ? 1 : 0.75, capLabel(cz) + pct);
        }
        if (!zones.length) for (const o of snap.gameState?.lane?.staticObjectives ?? []) {
          if (!o.position || !o.geometry?.length) continue;
          showCap("o" + (o.name ?? ""), o.position, o.geometry, "#c9d3e0", 0.6,
                  o.staticName ?? o.name ?? "");
        }
        for (const [key, c] of caps) if (!capSeen.has(key)) {
          c.group.traverse((o) => (o as THREE.Mesh).geometry?.dispose());
          c.mat.dispose(); c.label.material.dispose();
          capGroup.remove(c.group);
          caps.delete(key);
        }

        lap("cull+caps");
        fadeAroundUnits(fadeables, treeGrid, unitXYZ);
        lap("treeFade");
        for (const f of buildingFades) fadeOccupied(f, unitXYZ);
        lap("buildingFade");
        // Soldiers only: unitXYZ also holds the HAB's own badge point.
        const habs = drawnDeploys.get(deployMeshes.hab)!;
        habs.forEach((hit, i) => {
          const hp = (hit.e as Deployable).position!;
          const inside = [...drawnPlayers, ...drawnBodies].some((pl) => {
            const sp = pl.soldier!.position!;
            return Math.hypot(sp.x - hp.x, sp.y - hp.y) < 330
              && (sp.z == null || hp.z == null || Math.abs(sp.z - hp.z) < 400);
          });
          habFade[i] = inside ? BUILDING_ALPHA : 1;
        });
        habFadeAttr.needsUpdate = true;
        for (const m of Object.values(deployMeshes)) m.count = drawnDeploys.get(m)!.length;
        for (const layer of iconLayers.values()) {
          layer.mesh.count = layer.hits.length;
          layer.mesh.visible = layer.hits.length > 0;
          // Fresh bounds (a handful of instances) so off-screen layers are culled.
          if (layer.hits.length) layer.mesh.computeBoundingSphere();
          layer.mesh.instanceMatrix.needsUpdate = true;
          layer.mesh.instanceColor!.needsUpdate = true;
        }
        for (const m of [...Object.values(soldierMeshes), bodies,
                         ...Object.values(vehMeshes), ...Object.values(deployMeshes)]) {
          if (drawnVehicles.has(m)) m.count = drawnVehicles.get(m)!.length;
          m.instanceMatrix.needsUpdate = true;
          m.instanceColor!.needsUpdate = true;
        }
      }
      lap("rest");
      const r0 = performance.now();
      renderer.render(scene, camera);
      renderMs = performance.now() - r0;
      frames++;
    };
    raf = requestAnimationFrame(tick);

    // ── Benchmark: same shots every run, so numbers compare across changes ──
    const runBench = async () => {
      const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
      const nextFrame = () => new Promise((r) => requestAnimationFrame(r));
      while (useViewerStore.getState().replay.frames.length <= BENCH_FRAME + 120 || !propsMs || !terrain)
        await wait(250);
      const st = useViewerStore.getState();
      st.stepReplayFrame(BENCH_FRAME - st.replay.currentIdx);
      await wait(500);
      benching = true;
      const gl = renderer.getContext();
      const shot = async (name: string, n = 90) => {
        const times: number[] = [], cpu: number[] = [], rend: number[] = [];
        for (const k of Object.keys(prof)) delete prof[k];
        for (let i = 0; i < 10 + n; i++) {          // 10 warm-up frames
          await nextFrame();
          invalidate = true;
          last = 0;
          const t0 = performance.now();
          frame(t0);
          const t1 = performance.now();             // JS update + draw submission
          gl.finish();                               // include GPU time
          if (i >= 10) { times.push(performance.now() - t0); cpu.push(t1 - t0); rend.push(renderMs); }
        }
        // A picture of the shot for visual review (canvas only, no HTML overlays).
        invalidate = true; last = 0; frame(performance.now());
        images[name] = canvas.toDataURL("image/jpeg", 0.85);
        times.sort((a, b) => a - b);
        cpu.sort((a, b) => a - b);
        rend.sort((a, b) => a - b);
        const r = renderer.info.render;
        return { name, medianMs: +times[n >> 1]!.toFixed(2), p95Ms: +times[Math.floor(n * 0.95)]!.toFixed(2),
                 cpuMs: +cpu[n >> 1]!.toFixed(2), renderMs: +rend[n >> 1]!.toFixed(2),
                 sections: Object.fromEntries(Object.entries(prof).map(([k, v]) => [k, +(v / (10 + n)).toFixed(2)])),
                 drawCalls: r.calls, triangles: r.triangles };
      };
      const t = terrain!;
      const shots = [];
      const images: Record<string, string> = {};
      overview();
      shots.push(await shot("overview"));
      // Low over the densest group of soldiers.
      const pts = drawnPlayers.map((pl) => toWorld(t, pl.soldier!.position!.x, pl.soldier!.position!.y));
      const cx = pts.reduce((a, q) => a + q[0], 0) / Math.max(1, pts.length);
      const cz = pts.reduce((a, q) => a + q[1], 0) / Math.max(1, pts.length);
      const unitsPose = () => {
        camera.position.set(cx, groundAt(t, cx, cz) + 60, cz + 60);
        yaw = 0; pitch = -Math.PI / 4;
      };
      unitsPose();
      shots.push(await shot("units-60m"));
      // At ground level in the densest tree tile, looking across it.
      const dense = vegTiles.reduce<THREE.InstancedMesh | null>((a, m) => (!a || m.count > a.count ? m : a), null);
      if (dense) {
        const c = dense.boundingSphere!.center.clone().applyMatrix4(dense.matrixWorld);
        camera.position.set(c.x, groundAt(t, c.x, c.z) + 4, c.z);
        yaw = 0; pitch = -0.1;
        shots.push(await shot("forest-ground"));
      }
      // Playback at 1x, low over the units.
      unitsPose();
      window.dispatchEvent(new KeyboardEvent("keydown", { key: " ", code: "Space" }));
      shots.push(await shot("playing-1x", 120));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: " ", code: "Space" }));
      // Picture only (not timed): follow camera + squad spotlight on a soldier.
      const followed = drawnPlayers.find((pl) => pl.squadId != null);
      if (followed) {
        useViewerStore.getState().setFollowKey(pKey(followed));
        for (let i = 0; i < 3; i++) { await nextFrame(); invalidate = true; last = 0; frame(performance.now()); }
        images["follow"] = canvas.toDataURL("image/jpeg", 0.85);
        useViewerStore.getState().setFollowKey(null);
      }
      benching = false;

      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      const mem = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      const result = {
        recording: st.replay.id, frame: BENCH_FRAME, map: snapMap(),
        gpu: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : "unknown",
        viewport: `${canvas.width}x${canvas.height}`,
        loadMs: { terrain: Math.round(terrainMs), propsAndTrees: Math.round(propsMs) },
        scene: { geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures,
                 programs: renderer.info.programs?.length ?? 0, treeTiles: vegTiles.length,
                 groundOverlays: overlays.size, iconLayers: iconLayers.size,
                 markers: drawnSnap?.markers?.length ?? 0,
                 jsHeapMB: mem ? Math.round(mem.usedJSHeapSize / 1048576) : null },
        shots,
        images,
      };
      Object.assign(window, { __benchResult: result });
      console.log("[bench3d]", JSON.stringify(result));
    };
    const snapMap = () => useViewerStore.getState().curSnap?.gameState?.layer?.mapId ?? null;
    if (BENCH) void runBench();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("map3d-fit", overview);
      document.removeEventListener("pointerlockchange", onLockChange);
      if (flying()) document.exitPointerLock();
      renderer.dispose();
      canvas.remove();
    };
  }, []);
  useEffect(() => { api.current?.setTexture(texture); savePref(TEX_KEY, texture); }, [texture]);
  useEffect(() => {
    savePref(FPS_KEY, showFps ? "1" : "0");
    if (!showFps && fpsRef.current) fpsRef.current.textContent = "";
  }, [showFps]);
  useEffect(() => savePref(SENS_KEY, String(flySens)), [flySens]);

  return (
    <div ref={hostRef} style={{ position: "absolute", inset: 0 }}>
      <div className="m3d-overlay">
        <div ref={statusRef} className="m3d-chip m3d-status" />
      </div>
      <div className="m3d-dock">
        <div className={"m3d-help" + (help ? "" : " m3d-collapsed")} role="note" aria-label="3D camera controls">
          <header onClick={() => toggleHelp(!help)} title={help ? "Hide the controls" : "Show the controls"}>
            <span>{flyingUi ? "Fly mode" : "3D controls"}</span>
            {/* FPS lives here, not in a screen corner: the player panel covers
                the corner, this header stays visible even collapsed. */}
            <span ref={fpsRef} className="m3d-fps" aria-live="off" />
            {/* Same chevron as the kill feed. */}
            <svg className={"m3d-caret" + (help ? " open" : "")} viewBox="0 0 24 24"
                 width="12" height="12" aria-hidden="true">
              <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </header>
          {help && <>
            {flyingUi ? <>
              <Row keys={<Mouse />} label="look around" />
              <Row keys={<Mouse button="left" />} label="select at crosshair" />
              <Row keys={<kbd>Esc</kbd>} label="leave fly mode" />
            </> : <>
              <Row keys={<><Mouse button="left" /><em>drag</em></>} label="look around" />
              <Row keys={<><Mouse button="left" /><em>×2</em><em>or</em><kbd>Enter</kbd></>} label="fly mode" />
            </>}
            <Row keys={<><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></>} label="move" />
            <Row keys={<><kbd>C</kbd><kbd>X</kbd></>} label="up / down" />
            <Row keys={<kbd>Shift</kbd>} label="faster" />
            <Row keys={<Mouse button="wheel" />} label={flyingUi ? "zoom to crosshair" : "zoom to cursor"} />
            <Row keys={<kbd>F</kbd>} label="overview" />
            <div className="m3d-settings">
              <label>
                <span>Map</span>
                <select value={texture} onChange={(e) => setTexture(e.target.value)}>
                  {TEXTURES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </label>
              <label title="Mouse sensitivity in fly mode">
                <span>Fly look</span>
                <input type="range" min={0.3} max={4} step={0.1} value={flySens}
                       onChange={(e) => setFlySens(Number(e.target.value))} />
              </label>
              <label>
                <input type="checkbox" checked={showFps} onChange={(e) => setShowFps(e.target.checked)} />
                <span>FPS counter</span>
              </label>
            </div>
          </>}
        </div>
      </div>
      {flyingUi && <div className="m3d-crosshair" aria-hidden="true" />}
    </div>
  );
}
