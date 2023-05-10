import { CacheFlag } from "isaac-typescript-definitions";
import { getPlayerIndex, hasFlag } from "isaacscript-common";
import { v } from "../../save/lttDataManager";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";

export function useItemQuatrefoil
(
    player: EntityPlayer,
)
: boolean
{
    const index = getPlayerIndex(player);
    let data = v.room.quatrefoil_luck.getAndSetDefault(index);
    data += 10;
    v.room.quatrefoil_luck.set(index, data);
    player.AddCacheFlags(CacheFlag.LUCK);
    player.EvaluateItems();
    return true;
}


export function cacheQuatrefoil
(
    player: EntityPlayer,
    cacheFlag: CacheFlag
)
: void
{
    if (hasFlag(cacheFlag, CacheFlag.LUCK))
    {
        const index = getPlayerIndex(player);
        const data = v.room.quatrefoil_luck.getAndSetDefault(index);
        print(v.room.quatrefoil_luck)
        player.Luck += data;
        if (player.HasCollectible(CollectibleTypeLTT.QUATREFOIL))
        {
            player.Luck = math.max(player.Luck, 0);
        }
    }
}