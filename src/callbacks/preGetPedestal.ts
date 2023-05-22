import { ActiveSlot } from "isaac-typescript-definitions";
import { getActiveItemSlots, getCollectibleName, hasCollectibleInActiveSlot, hasOpenActiveItemSlot, isActiveCollectible, isActiveSlotEmpty } from "isaacscript-common";
import { v } from "../save/lttDataManager";

export function preGetPedestal
(
    player: EntityPlayer,
    collectible: EntityPickupCollectible,
)
: boolean | undefined
{
    if (isActiveCollectible(collectible.SubType))
    {
        const hash = GetPtrHash(collectible);
        v.run.droppedItems.set(hash, true);
    }
    return undefined
}
