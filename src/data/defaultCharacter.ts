import type { CharacterData } from '../types/character.types'

/**
 * Default character data for demos and new users
 */
export const DEFAULT_CHARACTER: CharacterData = {
	name: "Ava",
	species: "Human",
	background: "Merchant",
	characterClass: "Warlock",
	subclass: "Fiendish Patron",
	level: 5,
	spellcastingAbility: "charisma",

	languages: ["Common", "Infernal", "Dwarvish"],
	backgroundText: "A changeling that has taken the form of a human woman, who has spent her life as a Merchant. Since the day she became The Collector, a misterious entity under the command of Asmodeus, she has been searching for the way to break the chains that bind her to the demon lord.",

	abilityScores: {
		strength: 7,
		dexterity: 12,
		constitution: 14,
		intelligence: 13,
		wisdom: 11,
		charisma: 18
	},

	savingThrowProficiencies: {
		strength: false,
		dexterity: false,
		constitution: false,
		intelligence: false,
		wisdom: true,
		charisma: true
	},

	skillProficiencies: {
		athletics: false,
		acrobatics: false,
		sleightOfHand: false,
		stealth: false,
		arcana: true,
		history: false,
		investigation: false,
		nature: false,
		religion: false,
		animalHandling: true,
		insight: true,
		medicine: false,
		perception: false,
		survival: false,
		deception: true,
		intimidation: false,
		performance: true,
		persuasion: true
	},

	currentHP: 29,
	tempHP: 22,
	maxHP: 38,
	armorClass: 12,
	speed: 30,
	hitDice: "5d8",

	inventory: {
		items: [
			{
				name: "Greater Potion of Healing",
				description: "As a bonus action, you can drink this potion to recover 4d4 + 4 HP",
				quantity: 1
			},
			{
				name: "Empty Phial", 
				description: "An empty phial to fill with a concoction",
				quantity: 10
			},
			{
				name: "Navigator's Tools",
				description: "Tools for navigation and charting courses",
				quantity: 1
			},
			{
				name: "Pouch",
				description: "A small container for holding items",
				quantity: 2
			},
			{
				name: "Traveler's Clothes",
				description: "Suitable clothing for travel and adventure",
				quantity: 1
			},
			{
				name: "Leather Armor",
				description: "A simple armor made of leather. Grants AC = 11 + Dexterity modifier",
				quantity: 1
			},
			{
				name: "Orb (Arcane Focus)",
				description: "A mystical orb used as a focus for arcane spells",
				quantity: 1
			},
			{
				name: "Book of Occult Lore",
				description: "A tome containing forbidden knowledge and occult secrets",
				quantity: 1
			},
			{
				name: "Ruby",
				description: "A precious gemstone with a deep red color, delivered by a mysterious benefactor in the name of The Collector (probably meaning Asmodeus).",
				quantity: 1
			},
			{
				name: "Box made of gold and onyx",
				description: "An ornate box crafted from gold and onyx (worth 300GP)",
				quantity: 1
			},
			{
				name: "Poisonous Potion",
				description: "A vial containing a deadly poison (worth 100GP)",
				quantity: 1
			},
			{
				name: "Scholar's Pack",
				description: "Includes a backpack, a book of lore, ink, an ink pen, 10 sheets of parchment, a lamp, 10 flasks of oil, and a tinderbox",
				quantity: 1
			}
		],
		coins: {
			copper: 0,
			silver: 0,
			electrum: 0,
			gold: 66,
			platinum: 0
		}
	},

	traits: {
		classFeatures: [
			{
				name: "Pact Magic",
				description: "You know some warlock cantrips and spells (3 cantrips and 6 spells at level 5). You regain all Pact Magic spell slots after a short or long rest. You can change one of your cantrips and one of your spells from this feature every time you level up.",
				source: "Warlock Class Feature",
				level: 1
			},
			{
				name: "Magical Cunning",
				description: "Once per day, you can perform an Esoteric Rite for 1 minute to regain up to half your maximum Pact Magic spell slots (rounded up).",
				source: "Warlock Class Feature",
				level: 2
			},
			{
				name: "Eldritch Invocations",
				description: "You gain some Eldritch Invocations (5 EI's at level 5). You can change one of them every time you level up.",
				source: "Warlock Class Feature",
				level: 1
			},
			{
				name: "EI - Agonizing Blast (Eldritch Blast)",
				description: "When you cast Eldritch Blast, add your Charisma modifier to the damage it deals on a hit.",
				source: "Eldritch Invocations",
				level: 2
			},
			{
				name: "EI - Pact of the Blade",
				description: "[Preferred: Longsword (1d8 Slashing, Versatile: 1d10)] - Use your Bonus Action to create a pact weapon (simple or martial) in your hand and you're proficient with it. You can also create a bond with a magic weapon you touch. Use Charisma as modifier for attack and damage rolls. You can cause the weapon to deal Necrotic, Psychic, or Radiant damage instead of its normal damage type. You can't use this on more than one weapon at once. The weapon vanishes if it's more than 5ft away from you for a minute, or if you die.",
				source: "Eldritch Invocations",
				level: 2
			},
			{
				name: "EI - Thirsting Blade",
				description: "You gain the Extra Attack feature for your pact weapon, allowing you to attack twice with the weapon when you take the Attack action on your turn.",
				source: "Eldritch Invocations",
				level: 5
			},
			{
				name: "EI - Eldritch Smite",
				description: "[TOTAL: 4d8 Force] - Once per turn when you hit a creature with your pact weapon, you can expend a Pact Magic spell slot to deal an extra 1d8 Force damage to the target, plus another 1d8 per level of the spell slot, and you can give the target the Prone condition if it is Huge or smaller.",
				source: "Eldritch Invocations",
				level: 5
			},
			{
				name: "EI - Fiendish Vigor",
				description: "You can cast False Life on yourself without expending a spell slot. When do this, you automatically get the highest number on the die rolls.",
				source: "Eldritch Invocations",
				level: 2
			},
			{
				name: "Dark One's Blessing",
				description: "When you reduce an enemy to 0 HP, or an enemy at 10ft or less from you drops to 0 HP, you gain Temporary HP equal to your Charisma modifier + your Warlock level.",
				source: "Fiendish Patron Feature",
				level: 3
			}
		],
		speciesTraits: [
			{
				name: "Shapechanger",
				description: "As an action, you can change your appearance and voice to one you've seen before. You determine the specifics such as coloration, hair length, sex, height, weight, size (medium or small) or race (needs to have the same arrangement of limbs). None of your game statistics change. Your clothing and equipment aren’t changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.",
				source: "Changeling Species"
			}
		],
		feats: [
			{
				name: "Lucky",
				description: "You have 3 luck points. When you make an attack roll, ability check, or saving throw, you can spend one luck point to roll with advantage. You can also spend one luck point on a target's d20 roll to give them disadvantage. You regain all luck points after a long rest.",
				source: "Merchant Background"
			},
			{
				name: "Withered Blood",
				description: "Your blood contains the poison from the thorns of a dying rose that you obtained in a gachapon. If a creature bites you, they will receive 1d4 Poison damage.",
				source: "Withered Rose (Witch's Gachapon)"
			}
		]
	}
}