import { pickupSpawnCursedBox } from "../items/active/cursed_box";

export function postPickupInitFirst
(
    pickup: EntityPickup,
)
: void
{
    pickupSpawnCursedBox(pickup);
}