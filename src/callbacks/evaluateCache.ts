import { CacheFlag } from "isaac-typescript-definitions";
import { cacheQuatrefoil } from "../items/active/quatrefoil";

export function evaluateCache
(
    player: EntityPlayer,
    cacheFlag: CacheFlag
)
: void
{
    cacheQuatrefoil(player, cacheFlag);
}
