import { forEach, getLastFrameOfAnimation, getPickups, getPlayerIndex, getPlayers } from "isaacscript-common";
import { v } from "../save/lttDataManager";
import { playerDeath } from "./playerDeath";
import { playerUpdateSpawnGodsBlessing } from "../items/passive/godsBlessing";
import { pickupSpawnDiploptions } from "../items/passive/diploptions";
import { scheduleUpdate } from "../helper/scheduler";

// eslint-disable-next-line isaacscript/require-variadic-function-argument
const defDead = v.room.deathFrame.getDefaultValue();
export function postUpdate() : void
{
    forEach(getPlayers(), player =>
        {
            // Personal implementation for checking when a player has died
            const index = getPlayerIndex(player);
            let data = v.room.deathFrame.getAndSetDefault(index);

            getPickups().forEach(i => {
                pickupSpawnDiploptions(i);
            })
            playerUpdateSpawnGodsBlessing(player);
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

    scheduleUpdate();
}