import { CacheFlag, CollectibleType } from "isaac-typescript-definitions";
import { getPlayers, anyPlayerHasCollectible, addFlag, hasFlag} from "isaacscript-common";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";
import { v } from "../../save/lttDataManager";

export function postPlayerCollectibleAddedObsession
(
    player: EntityPlayer,
    collectibleType: CollectibleType
)
: void
{
    if (collectibleType === CollectibleTypeLTT.OBSESSION)
    {
        const base = Math.ceil((player.GetNumCoins() + player.GetNumBombs() + player.GetNumKeys())/3);
        player.AddCoins((base + 2) - player.GetNumCoins());
        player.AddBombs((base + 2) - player.GetNumBombs());
        player.AddKeys((base + 2) - player.GetNumKeys());
        checkPickupCount();
    }
}

export function postUpdateObsession()
: void
{
    if (anyPlayerHasCollectible(CollectibleTypeLTT.OBSESSION))
    {
        checkPickupCount()
    }
}

function checkPickupCount()
{
    const p = getPlayers();
    const mp = p[0];
    if (mp === undefined)
    {
        return; // Something has gone horribly wrong if this is reached.
    }

    let c = 0;
    if (mp.GetNumCoins() === mp.GetNumBombs() && mp.GetNumCoins() === mp.GetNumKeys())
    {
        c = 2;
    }
    else if (mp.GetNumCoins() === mp.GetNumBombs() || mp.GetNumCoins() === mp.GetNumKeys() || mp.GetNumBombs() === mp.GetNumKeys())
    {
        c = 1;
    }

    if (v.run.obsessionConditionals !== c)
    {
        v.run.obsessionConditionals = c
        const op = p.filter(i => i.HasCollectible(CollectibleTypeLTT.OBSESSION))
        op.forEach(i =>
        {
            i.AddCacheFlags(addFlag(CacheFlag.LUCK, CacheFlag.DAMAGE));
            i.EvaluateItems();
        })
    }
}

export function cacheObsession
(
    player: EntityPlayer,
    cacheFlag: CacheFlag
)
: void
{
    if (hasFlag(cacheFlag, CacheFlag.LUCK))
    {
        player.Luck += (2 ** v.run.obsessionConditionals) - 1;
    }
    if (hasFlag(cacheFlag, CacheFlag.DAMAGE))
    {
        player.Damage += (2 ** v.run.obsessionConditionals) - 1;
    }
}