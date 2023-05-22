import { anyPlayerHasCollectible } from "isaacscript-common";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";

export function pickupSpawnDiploptions
(
    pickup: EntityPickup,
) : void
{
    if (anyPlayerHasCollectible(CollectibleTypeLTT.DIPLOPTIONS))
    {
        pickup.OptionsPickupIndex = 0;
    }
}