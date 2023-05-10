import { ISCFeature, upgradeMod } from "isaacscript-common";

const features =
[
    ISCFeature.SAVE_DATA_MANAGER,
    ISCFeature.SPAWN_COLLECTIBLE,
] as const;

const MOD_NAME = "Lost To Time";
const MOD_VANILLA = RegisterMod(MOD_NAME, 1);
export const MOD = upgradeMod(MOD_VANILLA, features);
