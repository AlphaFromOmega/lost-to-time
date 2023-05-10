import { BombSubType, CoinSubType, HeartSubType, KeySubType, LevelCurse, LevelCurseZero } from "isaac-typescript-definitions";
import { addFlag, bitFlags, findFreePosition, removeCollectible, spawnBomb, spawnBombPickup, spawnCoin, spawnHeart, spawnKey } from "isaacscript-common";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";

export function useItemCursedBox(
    player: EntityPlayer
) : boolean
{
    spawnKey(KeySubType.NULL, findFreePosition(player.Position));
    spawnCoin(CoinSubType.NULL, findFreePosition(player.Position));
    spawnBombPickup(BombSubType.NULL, findFreePosition(player.Position));
    spawnHeart(HeartSubType.NULL, findFreePosition(player.Position));

    Game().GetLevel().RemoveCurses(((1 << 32) - 1) as BitFlags<LevelCurse>); // Nukes all curses

    removeCollectible(player, CollectibleTypeLTT.CURSED_BOX);
    return true;
}