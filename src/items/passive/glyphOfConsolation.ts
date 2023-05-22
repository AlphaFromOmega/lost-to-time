import { addFlag, getRandom, getRandomSeed } from "isaacscript-common";
import { CardType, UseFlag } from "isaac-typescript-definitions";
import { CollectibleTypeLTT } from "../../enums/CollectibleTypeLTT";

const blacklist = [
    CardType.RUNE_BLACK,
    CardType.RUNE_BLANK,
    CardType.SOUL_ISAAC,
    CardType.SOUL_MAGDALENE,
    CardType.SOUL_CAIN,
    CardType.SOUL_JUDAS,
    CardType.SOUL_BLUE_BABY,
    CardType.SOUL_EVE,
    CardType.SOUL_SAMSON,
    CardType.SOUL_AZAZEL,
    CardType.SOUL_LAZARUS,
    CardType.SOUL_EDEN,
    CardType.SOUL_LOST,
    CardType.SOUL_LILITH,
    CardType.SOUL_KEEPER,
    CardType.SOUL_APOLLYON,
    CardType.SOUL_FORGOTTEN,
    CardType.SOUL_BETHANY,
    CardType.SOUL_JACOB,
]

export function playerDamageGlyphOfConsolation(player : EntityPlayer): boolean | undefined
{
    if (player.HasCollectible(CollectibleTypeLTT.GLYPH_OF_CONSOLATION) && getRandom() <= (player.Luck + 10)/50) // 0% at -10 luck and 50% at 15 luck
    {
        let rune = Game().GetItemPool().GetCard(getRandomSeed(), false, true, true);

        while (blacklist.some(t => t === rune))
        {
            rune = Game().GetItemPool().GetCard(getRandomSeed(), false, true, true);
        }

        player.UseCard(rune, addFlag(UseFlag.NO_ANIMATION));
    }
    return undefined;
}