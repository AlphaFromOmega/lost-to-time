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
      cursedBoxes: 0,
      obsessionConditionals: 0,
      hiddenItems: new DefaultMap<PtrHash, boolean>(false),
      droppedItems: new DefaultMap<PtrHash, boolean>(false)
    },

    // These variables are reset at the beginning of every level.
    level: {
      foo3: 0,
    },

    // These variables are reset at the beginning of every room.
    room: {
      quatrefoilLuck: new DefaultMap<PlayerIndex, int>(0),
      deathFrame: new DefaultMap<PlayerIndex, int>(-1),
    },
};