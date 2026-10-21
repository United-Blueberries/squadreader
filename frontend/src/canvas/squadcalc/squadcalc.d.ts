// Types for the vendored SquadCalc loaders (plain JS).
declare module "*/squad3DProps.js" {
  import type { Mesh } from "three";
  export function loadProps(mapBase: string): Promise<Mesh[]>;
}
declare module "*/squad3DTrees.js" {
  import type { Object3D } from "three";
  export function loadTrees(mapBase: string): Promise<{ vegetation: Object3D[]; structures: Object3D[] }>;
}
