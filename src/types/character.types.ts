/**
 * Character data structure for D&D character sheets
 */
export interface CharacterData {
	// Basic details
	characterName: string
	species: string
	background: string
	characterClass: string
	subclass: string
	level: number

	// Background text
	backgroundText: string

	// Ability scores
	abilityScores: {
		strength: number
		dexterity: number
		constitution: number
		intelligence: number
		wisdom: number
		charisma: number
	}

	// Proficiencies
	savingThrowProficiencies: {
		strength: boolean
		dexterity: boolean
		constitution: boolean
		intelligence: boolean
		wisdom: boolean
		charisma: boolean
	}

	skillProficiencies: {
		// Strength-based
		athletics: boolean

		// Dexterity-based
		acrobatics: boolean
		sleightOfHand: boolean
		stealth: boolean

		// Intelligence-based
		arcana: boolean
		history: boolean
		investigation: boolean
		nature: boolean
		religion: boolean

		// Wisdom-based
		animalHandling: boolean
		insight: boolean
		medicine: boolean
		perception: boolean
		survival: boolean

		// Charisma-based
		deception: boolean
		intimidation: boolean
		performance: boolean
		persuasion: boolean
	}

	// Combat stats
	currentHP: number
	tempHP: number
	maxHP: number
	armorClass: number
	speed: number
	hitDice: string
	
	// Inventory
	inventory: {
		items: InventoryItem[]
		coins: Coins
	}
}

/**
 * Inventory item structure
 */
export interface InventoryItem {
	name: string
	description: string
	quantity: number
}

/**
 * Coin structure for tracking currency
 */
export interface Coins {
	copper: number
	silver: number
	electrum: number
	gold: number
	platinum: number
}