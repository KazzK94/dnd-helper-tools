import type { CharacterData } from '../types/character.types'

/**
 * Default character data for demos and new users
 */
export const DEFAULT_CHARACTER: CharacterData = {
	name: "Avarak Lightweaver",
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
	},
	
	traits: {
		classFeatures: [
			{
				name: "Pact Magic",
				description: "Your arcane research and the magic bestowed on you by your patron have given you facility with spells. You know 2 cantrips and 6 spells from the warlock spell list.",
				source: "Warlock Class Feature",
				level: 1
			},
			{
				name: "Eldritch Invocations",
				description: "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. You know 3 invocations: Agonizing Blast, Devil's Sight, and Mask of Many Faces.",
				source: "Warlock Class Feature",
				level: 2
			},
			{
				name: "Pact Boon: Pact of the Tome",
				description: "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list. The cantrips don't need to be from the same spell list. While the book is on your person, you can cast those cantrips at will.",
				source: "Warlock Class Feature",
				level: 3
			},
			{
				name: "Dark One's Blessing",
				description: "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level.",
				source: "Fiendish Patron Feature",
				level: 1
			}
		],
		speciesTraits: [
			{
				name: "Shapechanger",
				description: "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change.",
				source: "Changeling Trait"
			},
			{
				name: "Changeling Instincts",
				description: "You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.",
				source: "Changeling Trait"
			},
			{
				name: "Unsettling Visage",
				description: "When a creature you can see makes an attack roll against you, you can use your reaction to impose disadvantage on the attack roll. This trait can be used once per short or long rest.",
				source: "Changeling Trait"
			}
		],
		feats: [
			{
				name: "Actor",
				description: "You gain +1 Charisma, advantage on Deception and Performance checks when trying to pass yourself off as a different person, and you can mimic the speech of a person or the sounds made by a creature that you have heard for at least 1 minute.",
				source: "Feat"
			},
			{
				name: "Eldritch Adept",
				description: "You learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite, you can choose that invocation only if you're a warlock and only if you meet the prerequisite.",
				source: "Feat"
			}
		]
	}
}