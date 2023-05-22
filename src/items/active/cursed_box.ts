import { BombSubType, CoinSubType, HeartSubType, ItemConfigTag, KeySubType, LevelCurse, PickupVariant } from "isaac-typescript-definitions";
import { findFreePosition, getCollectibleTags, hasFlag, removeCollectible, setCollectibleSubType, spawnBombPickup, spawnCoin, spawnHeart, spawnKey } from "isaacscript-common";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";
import { v } from "../../save/lttDataManager";

export function useItemCursedBox
(
    player: EntityPlayer
)
: boolean
{
    spawnKey(KeySubType.NULL, findFreePosition(player.Position));
    spawnCoin(CoinSubType.NULL, findFreePosition(player.Position));
    spawnBombPickup(BombSubType.NULL, findFreePosition(player.Position));
    spawnHeart(HeartSubType.NULL, findFreePosition(player.Position));

    Game().GetLevel().RemoveCurses(((1 << 32) - 1) as BitFlags<LevelCurse>); // Nukes all curses

    v.run.cursedBoxes++;

    removeCollectible(player, CollectibleTypeLTT.CURSED_BOX);
    return true;
}

export function pickupSpawnCursedBox
(
    pickup: EntityPickup,
)
: void
{
    if (v.run.cursedBoxes <= 0 || pickup.Variant !== PickupVariant.COLLECTIBLE || pickup.SubType === CollectibleTypeLTT.CURSED_BOX || hasFlag(getCollectibleTags(pickup), ItemConfigTag.QUEST) || v.run.droppedItems.getAndSetDefault(GetPtrHash(pickup)))
    {
        return;
    }
    v.run.cursedBoxes--;
    setCollectibleSubType(pickup, CollectibleTypeLTT.CURSED_BOX);
}