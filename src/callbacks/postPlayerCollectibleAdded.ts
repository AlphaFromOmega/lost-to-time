import { CollectibleType } from "isaac-typescript-definitions";
import { postPlayerCollectibleAddedObsession } from "../items/passive/obsession";

export function postPlayerCollectibleAdded
(
    player: EntityPlayer,
    collectibleType: CollectibleType,
)
: void
{
    postPlayerCollectibleAddedObsession(player, collectibleType);
}