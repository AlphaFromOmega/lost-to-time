import { ModCallback } from "isaac-typescript-definitions";
import { ModUpgraded, ModCallbackCustom } from "isaacscript-common";
import { postPickupInitFirst } from "./callbacks/postPickupInitFirst";
import { postUpdate } from "./callbacks/postUpdate";
import { useItem } from "./callbacks/useItem";
import { evaluateCache } from "./callbacks/evaluateCache";
import { entityTakeDmgPlayer } from "./callbacks/entityTakeDmgPlayer";
import { preEntitySpawn } from "./callbacks/preEntitySpawn";
import { preGameExit } from "./callbacks/preGameExit";
import { preGetPedestal } from "./callbacks/preGetPedestal";
import { postPlayerCollectibleAdded } from "./callbacks/postPlayerCollectibleAdded";

export function initializeCallbacks(mod : ModUpgraded) : void
{
    // Item Callbacks
    mod.AddCallback(ModCallback.PRE_ENTITY_SPAWN, preEntitySpawn);
    mod.AddCallback(ModCallback.POST_UPDATE, postUpdate);
    mod.AddCallback(ModCallback.POST_USE_ITEM, useItem);
    mod.AddCallback(ModCallback.EVALUATE_CACHE, evaluateCache);
    mod.AddCallback(ModCallback.PRE_GAME_EXIT, preGameExit);
    mod.AddCallbackCustom(ModCallbackCustom.PRE_GET_PEDESTAL, preGetPedestal);
    mod.AddCallbackCustom(ModCallbackCustom.POST_PICKUP_INIT_FIRST, postPickupInitFirst);
    mod.AddCallbackCustom(ModCallbackCustom.POST_PLAYER_COLLECTIBLE_ADDED, postPlayerCollectibleAdded);
    mod.AddCallbackCustom(ModCallbackCustom.ENTITY_TAKE_DMG_PLAYER, entityTakeDmgPlayer);
}