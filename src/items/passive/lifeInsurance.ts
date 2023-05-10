import { CollectibleType, SoundEffect, UseFlag } from "isaac-typescript-definitions";
import { addFlag, sfxManager } from 'isaacscript-common';
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";

export function fatalDamageLifeInsurance(player : EntityPlayer): boolean | undefined
{
    if (!player.HasCollectible(CollectibleTypeLTT.LIFE_INSURANCE) || player.GetNumCoins() < 15)
    {
        return undefined;
    }
    player.Revive();
    player.AddCoins(-999);
    if (player.CanPickRedHearts())
    {
        const h = math.min(player.GetMaxHearts(), 6);
        player.AddHealth(h);
        player.AddSoulHearts(6-h);
    }
    else if (player.CanPickSoulHearts())
    {
        player.AddSoulHearts(6);
    }
    else
    {
        player.SetFullHearts();
    }
    player.RemoveCollectible(CollectibleTypeLTT.LIFE_INSURANCE);
    player.UseActiveItem(CollectibleType.BOOK_OF_SHADOWS, addFlag(UseFlag.NO_ANIMATION, UseFlag.NO_HUD, UseFlag.NO_ANNOUNCER_VOICE))
    sfxManager.Play(SoundEffect.SUPER_HOLY);
    return false;
}