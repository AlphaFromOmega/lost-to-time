import { pickupSpawnCursedBox } from "../items/active/cursed_box";
import { pickupSpawnAmalgamatedClover } from "../items/passive/amalgamatedClover";

export function postPickupInitFirst
(
    pickup: EntityPickup,
)
: void
{
    pickupSpawnAmalgamatedClover(pickup);
    pickupSpawnCursedBox(pickup);
}