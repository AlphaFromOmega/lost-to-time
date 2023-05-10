import { CollectibleType, UseFlag } from "isaac-typescript-definitions";
import { CollectibleTypeLTT } from "../enums/CollectibleTypeLTT";
import { useItemCursedD6 } from "../items/active/cursed_d6";
import { useItemCursedBox } from "../items/active/cursed_box";
import { useItemFreeShipping } from "../items/active/free_shipping";
import { useItemQuatrefoil } from "../items/active/quatrefoil";

export function useItem
(
    collectibleType: CollectibleType,
    rng: RNG,
    player: EntityPlayer,
    useFlags: BitFlags<UseFlag>,
    activeSlot: int,
    customVarData: int
)
: boolean | { Discharge: boolean; Remove: boolean; ShowAnim: boolean } | undefined
{
    const hasCarBattery = player.HasCollectible(CollectibleType.CAR_BATTERY) ? 2 : 1;
    switch (collectibleType)
    {
        case (CollectibleTypeLTT.CURSED_D6):
        {
            return useItemCursedD6();
        }
        case (CollectibleTypeLTT.CURSED_BOX):
        {
            return Array.from({length: hasCarBattery}, () => useItemCursedBox(player))[0];
        }
        case (CollectibleTypeLTT.FREE_SHIPPING):
        {
            return useItemFreeShipping(player);
        }
        case (CollectibleTypeLTT.QUATREFOIL):
        {
            return useItemQuatrefoil(player);
        }
        default:
        {
            return undefined;
        }
    }
}