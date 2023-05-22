import { findFreePosition, getAllPlayers, getHearts, mapDeletePlayer, spawnHeart } from "isaacscript-common";
import { HeartSubType } from "isaac-typescript-definitions";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";

export function playerUpdateSpawnGodsBlessing
(
    player : EntityPlayer
)
: void
{
    if (!player.HasCollectible(CollectibleTypeLTT.GODS_BLESSING))
    {
        return;
    }

    const p = getAllPlayers();
    const c = getHearts().filter(i =>
    {
        const mDist = i.Position.Distance(player.Position);
        if (mDist > 48)
        {
            return false;
        }
        return !p.some(j => mDist > i.Position.Distance(j.Position));
    });
    c.forEach(i =>
    {
        heartSwapper(i, player);
    })
}

function heartSwapper
(
    pickup : EntityPickupHeart,
    p : EntityPlayer
)
{
    switch (pickup.SubType)
    {
        case (HeartSubType.FULL): case (HeartSubType.SOUL):
        {
            pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.BLENDED);
            break;
        }
        case (HeartSubType.HALF):
        {
            if (p.HasFullHearts())
            {
                pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.HALF_SOUL);
            }
            break;
        }
        case (HeartSubType.HALF_SOUL):
        {
            if (!p.HasFullHearts())
            {
                pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.HALF);
            }
            break;
        }
        case (HeartSubType.DOUBLE_PACK):
        {
            pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.BLENDED);
            spawnHeart(HeartSubType.BLENDED, findFreePosition(pickup.Position));
            break;
        }
        case (HeartSubType.BLACK):
        {
            if (!p.HasFullHearts())
            {
                pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.ROTTEN);
            }
            break;
        }
        case (HeartSubType.ROTTEN):
        {
            if (p.HasFullHearts())
            {
                pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.BLACK);
            }
            break;
        }
        case (HeartSubType.ETERNAL): case (HeartSubType.BONE):
        {
            if (p.GetHeartLimit() === p.GetEffectiveMaxHearts())
            {
                pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.GOLDEN);
            }
            break;
        }
        case (HeartSubType.GOLDEN):
        {
            if (p.GetHeartLimit() > p.GetEffectiveMaxHearts())
            {
                pickup.Morph(pickup.Type, pickup.Variant, HeartSubType.BONE);
            }
            break;
        }
        default:
        {
            break;
        }
    }
}