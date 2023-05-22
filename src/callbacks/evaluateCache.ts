import { CacheFlag } from "isaac-typescript-definitions";
import { cacheQuatrefoil } from "../items/active/quatrefoil";
import { cacheObsession } from "../items/passive/obsession";

export function evaluateCache
(
    player: EntityPlayer,
    cacheFlag: CacheFlag
)
: void
{
    cacheObsession(player, cacheFlag);
    cacheQuatrefoil(player, cacheFlag);
}
