import { DamageFlag } from "isaac-typescript-definitions";
import { playerDamageGlyphOfConsolation } from "../items/passive/glyphOfConsolation";

export function entityTakeDmgPlayer(
    player: EntityPlayer,
    amount: float,
    damageFlags: BitFlags<DamageFlag>,
    source: EntityRef,
    countdownFrames: int,
)
: boolean | undefined
{
    let damage : boolean | undefined;
    const playerDamageFunctions =
    [
        () => playerDamageGlyphOfConsolation(player),
    ];

    for (const func of playerDamageFunctions) {
        damage = func();
        if (damage !== undefined) {
            break;
        }
    }
    return damage;
}