import { ModCallback } from "isaac-typescript-definitions";
import { ModUpgraded, ModCallbackCustom } from "isaacscript-common";
import { postPickupInitFirst } from "./callbacks/postPickupInitFirst";
import { postUpdate } from "./callbacks/postUpdate";
import { useItem } from "./callbacks/useItem";
import { evaluateCache } from "./callbacks/evaluateCache";
import { entityTakeDmgPlayer } from "./callbacks/entityTakeDmgPlayer";

export function initializeCallbacks(mod : ModUpgraded) : void
{
    mod.AddCallback(ModCallback.POST_UPDATE, postUpdate);
    mod.AddCallback(ModCallback.POST_USE_ITEM, useItem);
    mod.AddCallback(ModCallback.EVALUATE_CACHE, evaluateCache);
    mod.AddCallbackCustom(ModCallbackCustom.POST_PICKUP_INIT_FIRST, postPickupInitFirst);
    mod.AddCallbackCustom(ModCallbackCustom.ENTITY_TAKE_DMG_PLAYER, entityTakeDmgPlayer);
}