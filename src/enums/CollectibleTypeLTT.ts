import { validateCustomEnum } from "isaacscript-common";

export const CollectibleTypeLTT = {

	// #region 11 new items!

		// Active Items
		CURSED_D6: Isaac.GetItemIdByName("Cursed D6"),
		CURSED_BOX: Isaac.GetItemIdByName("Cursed Box"),
		FREE_SHIPPING: Isaac.GetItemIdByName("Free Shipping"),
		QUATREFOIL: Isaac.GetItemIdByName("Quatrefoil"),

		// Passive Items
		LIFE_INSURANCE: Isaac.GetItemIdByName("Life Insurance"),
		GLYPH_OF_CONSOLATION: Isaac.GetItemIdByName("Glyph of Consolation"),
		DIPLOPTIONS: Isaac.GetItemIdByName("Diploptions"),
		FRIENDLY_BOMBS: Isaac.GetItemIdByName("Friendly Bombs"),
		GODS_BLESSING: Isaac.GetItemIdByName("God's Blessing"),
		AMALGAMATED_CLOVER: Isaac.GetItemIdByName("Amalgamated Clover"),
		OBSESSION: Isaac.GetItemIdByName("Obsession"),

	// #endregion

	// #region Plagues of Egypt

		// Passive Items
		PLAGUE_OF_BLOOD: Isaac.GetItemIdByName("Plague of Blood"),
		PLAGUE_OF_FROGS: Isaac.GetItemIdByName("Plague of Frogs"),
		PLAGUE_OF_LICE: Isaac.GetItemIdByName("Plague of Lice"),
		PLAGUE_OF_FLIES: Isaac.GetItemIdByName("Plague of Flies"),
		PLAGUE_OF_MURRAIN: Isaac.GetItemIdByName("Plague of Murrain"),
		PLAGUE_OF_BOILS: Isaac.GetItemIdByName("Plague of Boils"),
		PLAGUE_OF_HAIL: Isaac.GetItemIdByName("Plague of Hail"),
		PLAGUE_OF_LOCUSTS: Isaac.GetItemIdByName("Plague of Locusts"),
		PLAGUE_OF_DARKNESS: Isaac.GetItemIdByName("Plague of Darkness"),
		PLAGUE_OF_THE_FIRSTBORN: Isaac.GetItemIdByName("Plague of the Firstborn"),

	// #endregion

	// #region Eternal Items

		// Active Items

		// Passive Items
		DADS_JUICE: Isaac.GetItemIdByName("Dad's Juice"),
		CRYSTAL_APPLE: Isaac.GetItemIdByName("Crystal Apple"),
		DADS_FISHING_ROD: Isaac.GetItemIdByName("Dad's Fishing Rod"),
		AMBROSIA: Isaac.GetItemIdByName("Ambrosia"),
		TECH_IX: Isaac.GetItemIdByName("Tech IX"),
		COLD_BLOODED: Isaac.GetItemIdByName("Cold Blooded"),
		VOODOO_BABY: Isaac.GetItemIdByName("Voodoo Baby"),
		GODS_EYE: Isaac.GetItemIdByName("God's Eye"),
		SAWBLADE: Isaac.GetItemIdByName("Sawblade"),
		RED_MATTER: Isaac.GetItemIdByName("Red Matter"),
		THICK_BONES: Isaac.GetItemIdByName("Thick Bones"),
		CALCIUM: Isaac.GetItemIdByName("Calcium"),
		SPONGE: Isaac.GetItemIdByName("Sponge"),
		FLY_TEARS: Isaac.GetItemIdByName("Fly Tears"),
		WAKE_ME_UP: Isaac.GetItemIdByName("Wake Me Up")
	// #endregion
} as const

// validateCustomEnum("CollectibleTypeCustom", CollectibleTypeLTT);