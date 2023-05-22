import { EntityType } from "isaac-typescript-definitions";
import { v } from "../save/lttDataManager";
import { Schedule } from "../helper/scheduler";
import { getCollectibleName, getPickups } from "isaacscript-common";

export function preEntitySpawn(
    entityType: EntityType,
    variant: int,
    subType: int,
    position: Vector,
    velocity: Vector,
    spawner: Entity | undefined,
    initSeed: Seed,
)
: [EntityType, int, int, int] | undefined
{
    playerDrop(variant, subType, position, velocity, spawner, initSeed)
    return undefined;
}

function playerDrop(
    variant: int,
    subType: int,
    position: Vector,
    velocity: Vector,
    spawner: Entity | undefined,
    initSeed: Seed,
)
{
    const p = spawner?.ToPlayer()
    if (p === undefined)
    {
        return;
    }
    Schedule(1, (seed: Seed) =>
    {
        const pickups = getPickups();
        pickups.forEach(i =>
        {
            if (i.InitSeed === seed)
            {
                const hash = GetPtrHash(i);
                v.run.droppedItems.set(hash, true);
            }
        })
    }, [initSeed]);

}