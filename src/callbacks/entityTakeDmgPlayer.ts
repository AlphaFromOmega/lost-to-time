import { DamageFlag } from "isaac-typescript-definitions";

export function entityTakeDmgPlayer(
    player: EntityPlayer,
    amount: float,
    damageFlags: BitFlags<DamageFlag>,
    source: EntityRef,
    countdownFrames: int,
)
: boolean | undefined
{
    print("Took Damage!")
    return undefined;
}