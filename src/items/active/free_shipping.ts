import { CollectibleType, ItemPoolType, TrinketType } from "isaac-typescript-definitions";
import { findFreePosition } from "isaacscript-common";
import { MOD } from "../../mod";

export function useItemFreeShipping
(
    player: EntityPlayer
)
: boolean
{
    const babyShop = player.HasTrinket(TrinketType.ADOPTION_PAPERS);
    const item = MOD.spawnCollectibleFromPool(babyShop ? ItemPoolType.BABY_SHOP : ItemPoolType.SHOP, findFreePosition(player.Position));
    item.ShopItemId = -1;
    item.Price = 10;
    item.AutoUpdatePrice = true;
    return true;
}