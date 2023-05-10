import { PlayerIndex } from "isaacscript-common";
import { fatalDamageLifeInsurance } from "../items/passive/lifeInsurance";

export function playerDeath(
    player : EntityPlayer
)
: void
{
    let die : Boolean | undefined;
    const playerDeathFunctions =
    [
        () => fatalDamageLifeInsurance(player),
    ];

    for (const func of playerDeathFunctions) {
        die = func();
        if (die !== undefined) {
            break;
        }
    }
}