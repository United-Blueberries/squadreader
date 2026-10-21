// 3D model choice for vehicles and deployables, from the blueprint class name.
// Finer than the 2D icon buckets: the 3D view can tell an MRAP from a jeep,
// tracked from wheeled, a tank from a tank destroyer. Order matters — the
// first match wins, most specific first. kind3d.test.mts runs every class in
// data/static/vehicle_factions.json through vehicleKind3d.

export type VehicleKind3D =
  | "mbt" | "tankDestroyer" | "ifvTracked" | "ifvWheeled" | "apcTracked" | "apcWheeled"
  | "mrap" | "jeep" | "bike" | "truck" | "logiTruck"
  | "heli" | "heliLight" | "boat" | "other";

const V: [RegExp, VehicleKind3D][] = [
  // Air + water first: their names share tokens with ground vehicles (MRH90, RHIB_*_M2).
  [/LOACH/, "heliLight"],
  [/UH60|UH1|MI8|MI17|CH146|CH178|SA330|MRH90|Z8[GJ]|Z9A|HELI/, "heli"],
  [/RHIB|BOAT/, "boat"],
  // Bikes, quads, side-by-sides.
  [/MINSK|QUADBIKE|LYNXATV|GATOR/, "bike"],
  // Technicals before the armour rules: a pickup carrying a BMP-1 turret
  // (Technical2Seater_White_BMP1) or a ZU-23 is still a pickup.
  [/TECHNICAL/, "jeep"],
  // Main battle tanks, then direct-fire guns on lighter hulls.
  [/2A6|M1A[12]|FV4034|M60T|T62|T64|T72|T90|ZTZ99/, "mbt"],
  [/M1128|SPRUT|ZTD05/, "tankDestroyer"],
  // Tracked infantry fighting vehicles (autocannon turret).
  [/BFV|M7A3|BMD|BMP|FV510|FV107|ZBD0[45]|MTLBM_6MB/, "ifvTracked"],
  // Wheeled IFVs (autocannon turret on an 8x8 / 6x6).
  [/LAV25|LAV2_COYOTE|LAV6|ASLAV|BTR82A|BTR4|ZBL08|WZ551A|WZ551B(?!_QLZ)|PARS3(_DESERT)?_C$/, "ifvWheeled"],
  // Tracked carriers: M113 family, MT-LB, BTR-D, FV432, AAV, ZSD.
  [/AAVP7|ACV-?15|BTR-?D|BTR-ZD|BTRMDM|FV432|M113|M1064|MTLB|ZSD(05|89)/, "apcTracked"],
  // Wheeled armoured carriers.
  [/BTR80|M1126|M1117|LAV_RWS|PMV|TAPV|ZSL10|WZ551B_QLZ|PARS3_/, "apcWheeled"],
  // MRAPs, Humvees, armoured scout cars.
  [/MATV|M1151(?!_TECHNICAL)|TIGR|COBRA|KOZAK|LPPV|CSK131|BRDM/, "mrap"],
  // Logistics trucks (the tracked/jeep logi variants keep their chassis above/below).
  [/(UTIL|URAL|KAMAZ|KRAZ|CTM131).*LOGI/, "logiTruck"],
  // Transport / utility / rocket / AA trucks.
  [/UTIL|URAL|KAMAZ|KRAZ|CTM131/, "truck"],
  // Technicals, pickups, light utility vehicles.
  [/CPV|SAFIR|LUVW|PICKUP|JEEP/, "jeep"],
];

export function vehicleKind3d(classShort: string | null | undefined): VehicleKind3D {
  const cs = (classShort ?? "").toUpperCase();
  for (const [re, k] of V) if (re.test(cs)) return k;
  return "other";
}

export type DeployKind3D =
  | "radio" | "hab" | "ammoCrate" | "ammoBag" | "construction" | "repair" | "helipad"
  | "mortar" | "mine" | "emplacement" | "sandbags" | "sandbagWall" | "hesco" | "razorwire"
  | "bunker" | "explosive" | "ladder" | "other";

export function deployKind3d(d: { classShort: string | null; isFob?: boolean | null }): DeployKind3D {
  if (d.isFob) return "radio";
  const cs = (d.classShort ?? "").toUpperCase();
  if (/FOBRADIO|RADIO/.test(cs)) return "radio";
  if (/HAB/.test(cs)) return "hab";
  if (/HELICOPTER_REPAIR|HELIPAD/.test(cs)) return "helipad";
  if (/REPAIR/.test(cs)) return "repair";
  if (/MORTAR/.test(cs)) return "mortar";
  if (/MINE|IED/.test(cs)) return "mine";
  if (/AMMOBAG/.test(cs)) return "ammoBag";
  if (/CONSTRUCT/.test(cs)) return "construction";
  if (/AMMO|CRATE/.test(cs)) return "ammoCrate";
  // Weapons as whole name parts: a bare /AGS/ also matched "SANDBAGS".
  if (/(^|_)(TOW|KORNET|SPG9?|DSHK|KORD|M2|HMG|GMG|MK19|AGS(-?17)?|ZU23)(_|$)|TRIPOD|EMPLACE/.test(cs))
    return "emplacement";
  if (/SANDBAGWALL|DESERTSANDBAG|SANDBAG_WALL/.test(cs)) return "sandbagWall";
  if (/SANDBAG/.test(cs)) return "sandbags";
  if (/HESCO/.test(cs)) return "hesco";
  if (/RAZORWIRE|RAZOR_WIRE|CONCERTINA/.test(cs)) return "razorwire";
  if (/BUNKER/.test(cs)) return "bunker";
  if (/C4|COMPB|EXPLOSIVE|SATCHEL/.test(cs)) return "explosive";
  if (/LADDER/.test(cs)) return "ladder";
  return "other";
}
