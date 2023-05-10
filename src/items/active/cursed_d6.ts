import { CollectibleType, EffectVariant, LevelCurse } from "isaac-typescript-definitions";
import { getCollectibles, getRandomFloat, getRoomItemPoolType, itemConfig, setCollectibleBlind, setCollectibleSubType, spawnEffect } from "isaacscript-common";

const rLog = math.log(2)/math.log(5)

export function useItemCursedD6() : boolean
{
    const collectibles = getCollectibles();
    const roomPoolType = getRoomItemPoolType();

    for (const collectible of collectibles)
    {
        if (collectible.SubType === CollectibleType.NULL)
        {
            continue;
        }
        let i = 0;
        let item = Game().GetItemPool().GetCollectible(roomPoolType, false);
        while (i < 16) // Safety Function to prevent infinite loops
        {
            const config = itemConfig.GetCollectible(item);
            if (config === undefined)
            {
                item = Game().GetItemPool().GetCollectible(roomPoolType, false);
                continue;
            }
            if (getRandomFloat(0, 1, undefined) <= ((config.Quality + 1) ** rLog)/(5**rLog)) // 50% of rerolling again if the quality is 0 to 0% if the quality is 4
            {
                break;
            }
            item = Game().GetItemPool().GetCollectible(roomPoolType, false);
            i++;
        }
        spawnEffect(EffectVariant.POOF_1, 0, collectible.Position);
        setCollectibleSubType(collectible, item);
        setCollectibleBlind(collectible);
    }
    Game().GetLevel().AddCurse(LevelCurse.BLIND, false);
    return true;
}