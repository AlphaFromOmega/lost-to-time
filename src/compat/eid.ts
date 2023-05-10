import { CollectibleType, TrinketType } from "isaac-typescript-definitions";
import { CollectibleTypeLTT } from "../enums/CollectibleTypeLTT";

/** @param {EIDInterface} eid External Item Descriptions interface. */
export function initializeEID(eid : EIDInterface): void
{
	// #region 11 new items!
        eid.addCollectible(CollectibleTypeLTT.CURSED_D6, "Rerolls and hides pedestal items in the current room#Rerolled items have a greater chance of being higher quality.");
        eid.addCollectible(CollectibleTypeLTT.CURSED_BOX, `Removes all curses and spawns: #{{Blank}} {{Coin}} 1 Coin. #{{Blank}} {{Key}} 1 Key. #{{Blank}} {{Bomb}} 1 Bomb. #{{Blank}} {{Heart}} 1 Heart.#{{Warning}} Replaces the next non-story item found with {{Collectible${CollectibleTypeLTT.CURSED_BOX}}} Cursed Box.`);
        eid.addCollectible(CollectibleTypeLTT.FREE_SHIPPING, "Summons a buyable shop collectable");
        eid.addCollectible(CollectibleTypeLTT.QUATREFOIL, "{{Luck}} +10 Luck for the current room.#{{Luck}} Luck cannot fall below 0 while held");

        eid.addCollectible(CollectibleTypeLTT.LIFE_INSURANCE, "Grants an extra life when Isaac has 15 or more coins#When Isaac is revived all his money is removed");
        eid.addCollectible(CollectibleTypeLTT.GLYPH_OF_CONSOLATION, "Chance of triggering a random rune effect when hit#{{Luck}}Scales with luck, from 0% at -10 Luck to 50% at 15 Luck");
        eid.addCollectible(CollectibleTypeLTT.DIPLOPTIONS, "Collectible options no longer disappear when picking up its companion collectible.");
        eid.addCollectible(CollectibleTypeLTT.FRIENDLY_BOMBS, "{{Bomb}}+5 Bombs#Bombs summon a charmed bomb enemy upon exploding#Bombs wait until Isaac is out of range#Bombs ignore Isaac if Isaac is immune to explosions");
        eid.addCollectible(CollectibleTypeLTT.GODS_BLESSING, "Full hearts and soul hearts are converted to blended hearts.#Half hearts are converted to half soul hearts at full health.#Half soul hearts are converted to red hearts when under full health.#Double red hearts becomes 2 blended heart pickups.");
        eid.addCollectible(CollectibleTypeLTT.AMALGAMATED_CLOVER, "Spawns a random transformation item#Pedestal items have an increased chance to be rerolled into a transformation item#Each transformation grants +1 Luck");
        eid.addCollectible(CollectibleTypeLTT.OBSESSION, `Averages out all consumables rounded up then adds +2 bombs, +2 keys and +2 coins#Grants +3 damage and +3 luck when all consumables are equal.#Grants +1 damage and +1 luck when 2 consumables are equal.#With {{Trinket[${TrinketType.EQUALITY}]}} Equality, consumables lower than your highest consumable count - 2 with have their pickups doubled.`);
    // #endregion

    // #region Plagues of Egypt
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_BLOOD, "+3 HP up#All heart pickups are replaced with their red heart variant");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_FROGS, "-0.25 Speed#Killing fly enemies has a 25% of healing half a red heart");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_LICE, "Spawns blue spiders when Isaac is near enemies#All blue flies will have a 50/50 chance of becoming a blue spider or disappearing");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_FLIES, "Every room Isaac will gain an inactive blue fly up to 5.#When damaged or entering a room with 5 saved flies Isaac releases all blue flies.#Isaac will take fake damage when entering a room with 5 flies");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_MURRAIN, "-1 HP#Nearby enemies become poisoned and take x1.5 damage while poisoned#All red hearts are replace with rotten hearts");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_BOILS, "+0.4 tears when entering a room#When damaged, Isaac loses the tears up and damages nearby enemies#After being damaged, Isaac takes half a heart of damage every 3 seconds until the room is cleared or re-entered.");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_HAIL, "Summons falling rocks and rarely beams of light.#Rocks can damage Isaac and enemies.#Beams of light will only damage enemies.");
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_LOCUSTS, `Random locusts are spawned when an enemy is killed.#Locusts will consume any pickup they collide with.#When colliding with a pickup the locust has a chance on being upgraded to a permenent {{Collectible[${CollectibleType.ABYSS}]}} Abyss locust.`);
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_DARKNESS, `{{CurseDarkness}}Grants Curse of Darkness#Enemies that approach Isaac will be inflicted with fear.#Increases radius with {{Collectible[${CollectibleType.TWO_SPOOKY}]}} 2Spooky`);
        eid.addCollectible(CollectibleTypeLTT.PLAGUE_OF_THE_FIRSTBORN, "Grants a Dark Esau like familiar that can damage Isaac and enemies");
    // #endregion

    // #region Eternal Items Mod


        eid.addCollectible(CollectibleTypeLTT.WAKE_ME_UP, "Doubles ALL enemy and pickup spawns.");
    // #endregion
}