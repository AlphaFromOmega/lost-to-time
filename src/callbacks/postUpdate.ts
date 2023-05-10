import { forEach, getLastFrameOfAnimation, getPlayerIndex, getPlayers } from "isaacscript-common";
import { CollectibleTypeLTT } from "../enums/CollectibleTypeLTT";
import { v } from "../save/lttDataManager";
import { playerDeath } from "./playerDeath";

// eslint-disable-next-line isaacscript/require-variadic-function-argument
const defDead = v.room.deathFrame.getDefaultValue();
export function postUpdate() : void
{
    // Personal implementation for checking when a player has died
    forEach(getPlayers(), player =>
        {
            const index = getPlayerIndex(player);
            let data = v.room.deathFrame.getAndSetDefault(index);
            if (player.IsDead())
            {
                const lf = getLastFrameOfAnimation(player.GetSprite());
                if (data === defDead)
                {
                    data = player.FrameCount;
                    v.room.deathFrame.set(index, data);
                }
                // D : print(`${player.FrameCount - data} / ${lf}`);
                if ((player.FrameCount - data) === (lf - 1)) // Checks for the frame before game-over
                {
                    // D : print("I am dead!");
                    playerDeath(player);
                    data = defDead;
                    v.room.deathFrame.set(index, data);
                }
            }
            else
            {
                data = defDead;
                v.room.deathFrame.set(index, data);
            }
        }
    );
}