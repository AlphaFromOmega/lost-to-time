import { anyPlayerHasCollectible, getPlayerTransformations, getPlayers, getRoomItemPoolType, getTransformationsForCollectibleType, itemConfig, removeCollectibleFromPools, setCollectibleSubType } from "isaacscript-common";
import { CollectibleType, ItemPoolType, PickupVariant, PlayerForm } from "isaac-typescript-definitions";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";
import { v } from "../../save/lttDataManager";

const transformationArray = collectiblesWithTransformation();

export function pickupSpawnAmalgamatedClover
(
    pickup: EntityPickup,
)
: void
{
    if (!anyPlayerHasCollectible(CollectibleTypeLTT.AMALGAMATED_CLOVER) || pickup.Variant !== PickupVariant.COLLECTIBLE || v.run.droppedItems.getAndSetDefault(GetPtrHash(pickup)))
    {
        return;
    }
    const replacements = possibleReplacements();
    // eslint-disable-next-line isaacscript/strict-enums
    const pool : ItemPoolType = Math.max(getRoomItemPoolType(), ItemPoolType.TREASURE);

    if (replacements.length > 0 && replacements.find(j => j === pickup.SubType) === undefined)
    {
        let i = 0;
        let item = Game().GetItemPool().GetCollectible(pool, false);
        while (i < 16) // Safety Function to prevent infinite loops
        {
            // print(`Loop ${i}`);
            if (replacements.find(j => j === item) !== undefined)
            {
                pickup.SubType = item;
                removeCollectibleFromPools(item);
                setCollectibleSubType(pickup, item);
                break;
            }
            item = Game().GetItemPool().GetCollectible(pool, false);
            i++;
        }
    }
}

function collectiblesWithTransformation() : CollectibleType[]
{
    const collectibles = itemConfig.GetCollectibles();
    const tArr : CollectibleType[] = []
    for (let i = 0; i < collectibles.Size; i++)
    {
        const item = itemConfig.GetCollectible(i);

        if (item === undefined || item.IsNull())
        {
            continue;
        }
        if (!item.IsCollectible())
        {
            continue;
        }
        const t = Array.from(getTransformationsForCollectibleType(i));
        if (t.length > 0)
        {
            tArr.push(i)
        }
    }
    return tArr
}

function possibleReplacements() : CollectibleType[]
{
    const pl = getPlayers().filter(i => i.HasCollectible(CollectibleTypeLTT.AMALGAMATED_CLOVER));
    const tArr = Array.from({length: Object.values(PlayerForm).length}, (_) => false);

    pl.forEach((p) => {
        const t = Array.from(getPlayerTransformations(p));
        t.forEach((i) => {
            tArr[i] = true;
        })
    });

    const notHave: number[] = [];

    tArr.forEach((i, j) => {
        if (!i)
        {
            notHave.push(j);
        }
    });
    const collectibleArray : CollectibleType[] = []
    transformationArray.forEach(i => {
        const t = Array.from(getTransformationsForCollectibleType(i));
        if (t.some(r=> notHave.includes(r)))
        {
            collectibleArray.push(i);
        }
    });
    return collectibleArray;
}