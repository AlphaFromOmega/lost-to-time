import { ISCFeature, ModUpgraded, upgradeMod } from "isaacscript-common";
import { initializeEID } from "./compat/eid";
import { v } from "./save/lttDataManager";
import { initializeCallbacks } from "./callbacks";
import { MOD } from "./mod";

export function main(): void
{
    if (EID !== undefined)
    {
        initializeEID(EID);
    }
    MOD.saveDataManager("lttDataManager", v);
    initializeCallbacks(MOD);
}

Isaac.DebugString("Initiated mod: Lost To Time");
