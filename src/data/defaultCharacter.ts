import type { CharacterData } from '../types/character.types'

/**
 * Default character data for demos and new users
 */
export const DEFAULT_CHARACTER: CharacterData = {
	characterName: "Avarak Lightweaver",
	species: "Changeling",
	background: "Merchant",
	characterClass: "Warlock",
	subclass: "Fiendish Patron",
	level: 5,

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

	currentHP: 38,
	tempHP: 17,
	maxHP: 38,
	armorClass: 14,
	speed: 30,
	hitDice: "5d8",
	
	inventory: {
		items: [
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
				description: "Light armor made of leather",
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
				description: "A precious gemstone with a deep red color",
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
			gold: 136,
			platinum: 0
		}
	}
}