import { ModCallback } from "isaac-typescript-definitions";
import { ModUpgraded, ModCallbackCustom } from "isaacscript-common";
import { postPickupInitFirst } from "./callbacks/postPickupInitFirst";
import { postUpdate } from "./callbacks/postUpdate";
import { useItem } from "./callbacks/useItem";

export function initializeCallbacks(mod : ModUpgraded) : void
{
    mod.AddCallback(ModCallback.POST_UPDATE, postUpdate);
    mod.AddCallback(ModCallback.POST_USE_ITEM, useItem);
    mod.AddCallbackCustom(ModCallbackCustom.POST_PICKUP_INIT_FIRST, postPickupInitFirst);
}