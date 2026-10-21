// Standalone unit test for the 3D vehicle/deployable classes. Run by
// scripts/run-tests.mjs (every *.test.mts under src/).
import { readFileSync } from "node:fs";
import { deployKind3d, vehicleKind3d } from "./kind3d.ts";

// Read at run time, not imported: the Docker UI stage type-checks src/ with
// only frontend/ copied in, so a static import of the repo's data/ fails tsc.
// Path is from the bundle the runner writes to node_modules/.cache/tests/.
const catalog: Record<string, unknown> = JSON.parse(readFileSync(
  new URL("../../../../data/static/vehicle_factions.json", import.meta.url), "utf8"));

let passed = 0, failed = 0;
function ok(cond: any, msg: string) {
  if (cond) { passed++; } else { failed++; console.error("  FAIL:", msg); }
}
function eq(a: any, b: any, msg: string) { ok(a === b, `${msg} (got ${JSON.stringify(a)}, want ${JSON.stringify(b)})`); }

// Every vehicle class the game knows gets a real model.
for (const cls of Object.keys(catalog)) ok(vehicleKind3d(cls) !== "other", `${cls} has a 3D kind`);

const cases: [string, string][] = [
  ["BP_M1151_C", "mrap"], ["BP_M1151_Light_TOW_C", "mrap"], ["BP_MATV_CROWS_C", "mrap"],
  ["BP_Tigr_RWS_C", "mrap"], ["BP_BRDM-2_RUS_C", "mrap"], ["BP_CSK131_QJY88_C", "mrap"],
  ["BP_M1151_Technical_C", "jeep"], ["BP_Technical4Seater_Logi_C", "jeep"], ["BP_LUVW_M2_C", "jeep"],
  ["BP_Safir_Kornet_C", "jeep"], ["BP_Technical2Seater_White_BMP1_C", "jeep"], ["BP_CPV_M134_C", "jeep"],
  ["BP_M1A2_C", "mbt"], ["BP_T72B3_C", "mbt"], ["BP_2A6_Desert_C", "mbt"], ["BP_ZTZ99_wCage_C", "mbt"],
  ["BP_M1128_C", "tankDestroyer"], ["BP_Sprut_C", "tankDestroyer"],
  ["BP_BMP2_C", "ifvTracked"], ["BP_BFV_C", "ifvTracked"], ["BP_FV510_C", "ifvTracked"], ["BP_MTLBM_6MB_RUS_C", "ifvTracked"],
  ["BP_LAV25_C", "ifvWheeled"], ["BP_BTR82A_RUS_C", "ifvWheeled"], ["BP_ZBL08_HJ73C_C", "ifvWheeled"], ["BP_PARS3_C", "ifvWheeled"],
  ["BP_M113A3_M2_C", "apcTracked"], ["BP_MTLB_LOGI_RUS_C", "apcTracked"], ["BP_BTR-D_Kord_C", "apcTracked"],
  ["BP_AAVP7A1_C", "apcTracked"], ["BP_ZSD89_C", "apcTracked"],
  ["BP_BTR80_RUS_C", "apcWheeled"], ["BP_M1126_C", "apcWheeled"], ["BP_PMV_Mag58_C", "apcWheeled"],
  ["BP_PARS3_M2_C", "apcWheeled"], ["BP_WZ551B_QLZ-87_C", "apcWheeled"],
  ["BP_US_Util_USMC_Desert_Logi_C", "logiTruck"], ["BP_Kamaz_5350_Logi_C", "logiTruck"], ["BP_CTM131_Logistic_C", "logiTruck"],
  ["BP_Kraz_6322_BM21Grad_C", "truck"], ["BP_Ural_375_ZU23_C", "truck"], ["BP_Aussie_Util_Truck_C", "truck"],
  ["BP_UH60_C", "heli"], ["BP_MRH90_Mag58_C", "heli"], ["BP_Loach_CAS_C", "heliLight"],
  ["BP_RHIB_US_M2_C", "boat"], ["BP_Minsk_black_C", "bike"], ["BP_M-Gator_Transport_C", "bike"],
];
for (const [cls, want] of cases) eq(vehicleKind3d(cls), want, cls);

const deploy: [string, boolean, string][] = [
  ["BP_FOBRadio_PLA_C", false, "radio"], ["BP_Whatever_C", true, "radio"], ["PLA_Hab_C", false, "hab"],
  ["BP_Ammocrate_PLA_C", false, "ammoCrate"], ["BP_GenericAmmocrate_C", false, "ammoCrate"],
  ["BP_InfantryAmmobag_PLA_C", false, "ammoBag"], ["BP_Deployable_Type72Mine_C", false, "mine"],
  ["BP_PP87Mortar_Deployable_C", false, "mortar"], ["BP_vehicle_repair_PLA_C", false, "repair"],
  ["BP_helicopter_repair_pad_C", false, "helipad"],
  // Real classes from an Al Basrah recording.
  ["BP_InfantrySandbags_C", false, "sandbags"], ["BP_SandBagWall_Desert_C", false, "sandbagWall"],
  ["BP_DesertSandbag_C", false, "sandbagWall"], ["BP_HescoWall_USA_Desert_C", false, "hesco"],
  ["BP_InfantryRazorwire_C", false, "razorwire"], ["BP_Razorwire_clean_2_C", false, "razorwire"],
  ["BP_smallbunker_Desert_C", false, "bunker"], ["BP_M2_USA_Bunker_Desert_C", false, "emplacement"],
  ["BP_Deployable_CompB_Explosive_C", false, "explosive"],
  ["BP_Deployable_M112_C4Explosive_Timed_C", false, "explosive"], ["BP_TestLadder_Metal_C", false, "ladder"],
  ["BP_Kornet_Tripod_C", false, "emplacement"], ["BP_AGS17_C", false, "emplacement"],
];
for (const [cls, isFob, want] of deploy) eq(deployKind3d({ classShort: cls, isFob }), want, cls);

console.log(`\nkind3d: ${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
