import { CollectibleType, UseFlag } from "isaac-typescript-definitions";
import { CollectibleTypeLTT } from "../enums/CollectibleTypeLTT";
import { useItemCursedD6 } from "../items/active/cursed_d6";
import { useItemCursedBox } from "../items/active/cursed_box";

export function useItem(
    collectibleType: CollectibleType,
    rng: RNG,
    player: EntityPlayer,
    useFlags: BitFlags<UseFlag>,
    activeSlot: int,
    customVarData: int
) : boolean | { Discharge: boolean; Remove: boolean; ShowAnim: boolean } | undefined
{
    switch (collectibleType)
    {
        case (CollectibleTypeLTT.CURSED_D6):
        {
            return useItemCursedD6();
        }
        case (CollectibleTypeLTT.CURSED_BOX):
        {
            return useItemCursedBox(player);
        }
        default:
        {
            return undefined;
        }
    }
}