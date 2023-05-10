import { ItemPoolType, TrinketType } from "isaac-typescript-definitions";
import { findFreePosition } from "isaacscript-common";
import { MOD } from "../../mod";

export function useFreeShipping
(
    player: EntityPlayer
)
: boolean
{
    const item = MOD.spawnCollectibleFromPool(player.HasTrinket(TrinketType.ADOPTION_PAPERS) ? ItemPoolType.BABY_SHOP : ItemPoolType.SHOP, findFreePosition(player.Position));
    return true;
}