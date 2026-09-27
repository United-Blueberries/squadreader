// A frame with no `layer` block is fitted to its entities. One garbage memory
// read — a projectile at x≈5e151, in the first frame of a real recording —
// stretched the view so far that drawGrid looped forever and the tab ran out
// of memory. Framework-free, as the tests beside it are.
import { autoFit } from "./worldToScreen.ts";

let passed = 0, failed = 0;
function ok(cond: any, msg: string) {
  if (cond) { passed++; } else { failed++; console.error("  FAIL:", msg); }
}

{
  const snap: any = {
    players: [{ soldier: { position: { x: 1000, y: 2000 } } }],
    vehicles: [{ position: { x: -3000, y: 500 } }],
    projectiles: [
      { position: { x: 4.9851259298819877e+151, y: 3.05e-61 } },
      { position: { x: NaN, y: 0 } },
    ],
  };
  const v = autoFit(snap, { width: 800, height: 600 });
  ok(v.maxX < 10000 && v.minX > -10000, `garbage coords ignored (got ${v.minX}..${v.maxX})`);
  ok(Number.isFinite(v.minY) && Number.isFinite(v.maxY), "y stays finite");
}

console.log(`worldToScreen: ${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
