import { ISCFeature, ModCallbackCustom, upgradeMod } from "isaacscript-common";
import { ModCallback } from "isaac-typescript-definitions";
import { initializeEID } from "./compat/eid";
import { postUpdate } from "./callbacks/postUpdate";
import { useItem } from "./callbacks/useItem";

const MOD_NAME = "Lost To Time";
export function main(): void
{
	const modVanilla = RegisterMod(MOD_NAME, 1);

	const features = [
        ISCFeature.SAVE_DATA_MANAGER
	] as const;

	const mod = upgradeMod(modVanilla, features);

    if (EID !== undefined)
    {
        initializeEID(EID);
    }
    initializeCallbacks(mod);
}

function initializeCallbacks(mod : Mod)
{
    mod.AddCallback(ModCallback.POST_UPDATE, postUpdate);
    mod.AddCallback(ModCallback.POST_USE_ITEM, useItem);
}


Isaac.DebugString("Initiated mod: Lost To Time");
