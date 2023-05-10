import { DefaultMap, PlayerIndex } from "isaacscript-common";

// eslint-disable-next-line isaacscript/require-v-registration
export const v =
{
    // These variables are never reset; manage them yourself at will.
    persistent: {
      foo1: 0,
    },

    // These variables are reset at the beginning of every run.
    run: {
      cursed_boxes: 0,
      hiddenItems: new DefaultMap<PtrHash, int>(0)
    },

    // These variables are reset at the beginning of every level.
    level: {
      foo3: 0,
    },

    // These variables are reset at the beginning of every room.
    room: {
      quatrefoil_luck: new DefaultMap<PlayerIndex, int>((0),
    },
};