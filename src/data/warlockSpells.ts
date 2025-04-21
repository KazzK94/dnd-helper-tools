import type { Spell } from '../types/spell.types'

/**
 * Standard warlock spells for reference
 */
export const WARLOCK_SPELLS: Spell[] = [
	{
		name: "Eldritch Blast",
		level: 0,
		school: "Evocation",
		castingTime: "Action",
		range: "120 feet",
		components: "V, S",
		duration: "Instant",
		description:
			"You hurl 2 beams of crackling energy. Make a ranged spell attack for each beam. On each hit, deal 1d10(+4) Force damage.",
		source: "Pact Magic",
	},
	{
		name: "Minor Illusion",
		level: 0,
		school: "Illusion",
		castingTime: "Action",
		range: "30 feet",
		components: "S, M",
		duration: "1 minute",
		description:
			"You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
		source: "Pact Magic",
	},
	{
		name: "Toll the Dead",
		level: 0,
		school: "Necromancy",
		castingTime: "Action",
		range: "60 feet",
		components: "V, S",
		duration: "Instant",
		description:
			"You point at a creature you can see and a chime of a dolorous bell sounds within 10ft of the target. On a failed Wisdom Save, it takes 2d8 Necrotic damage (or 2d12 if the target is missing any HP).",
		source: "Pact Magic",
	},
	{
		name: "Hellish Rebuke",
		level: 1,
		school: "Evocation",
		castingTime: "Reaction",
		range: "60 feet",
		components: "V, S",
		duration: "Instant",
		description:
			"You point your finger, and the creature that damaged you is momentarily surrounded by green hellish flames. The creature must make a Dexterity Save. It takes 4d10 fire damage on a failed save, or half as much damage on a successful one.",
		source: "Pact Magic",
	},
	{
		name: "Witch Bolt",
		level: 1,
		school: "Evocation",
		castingTime: "Action",
		range: "30 feet",
		components: "V, S, M",
		duration: "1 minute (C)",
		description:
			"You form an arc of lightning between you and a creature. Make a ranged spell attack against that creature. On a hit, the creature takes 4d12 lightning damage. On your subsequent turns you can use your bonus action to deal 1d12 lightning damage to the target automatically (without rolling attack or save, only damage). The spell ends if the target takes total cover or leaves the spell range.",
		source: "Pact Magic",
	},
	{
		name: "Burning Hands",
		level: 1,
		school: "Evocation",
		castingTime: "Action",
		range: "Self (15ft. cone)",
		components: "V, S",
		duration: "Instant",
		description:
			"A sheet of flames comes out from your hands in a 15ft cone. Each creature in the area must make a Dexterity Save, taking 5d6 Fire damage on a failed save, or half as much on a successful one.",
		source: "Fiend Patron Spells",
	},
	{
		name: "Command",
		level: 1,
		school: "Enchantment",
		castingTime: "Action",
		range: "60 feet",
		components: "V",
		duration: "1 round",
		description:
			"You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom Save or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.",
		source: "Fiend Patron Spells",
	},
	{
		name: "Detect Magic",
		level: 1,
		school: "Divination",
		castingTime: "Action",
		range: "Self",
		components: "V, S",
		duration: "10 minutes (C)",
		description:
			"[[Ritual]] You sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
		source: "Pact Magic",
	},
	{
		name: "False Life",
		level: 1,
		school: "Necromancy",
		castingTime: "Action",
		range: "Self",
		components: "V, S, M",
		duration: "Instant",
		description:
			"[EI:FV = 22 Temp HP]. You gain 2d4 + 4 temporary HP. You gain an extra +5 per spell slot level above 1. Thanks to your Fiendish Vigor, you can cast False Life for free and get the best outcome guaranteed.",
		source: "EI: Fiendish Vigor",
	},
	{
		name: "Detect Thoughts",
		level: 2,
		school: "Divination",
		castingTime: "Action",
		range: "Self",
		components: "V, S, M",
		duration: "1 minute (C)",
		description:
			"[Check app for better description] - Choose one effect: 1) Sense Thoughts (30ft): Sense creatures who know languages or telepathy. 2) Read Thoughts: You learn most of what the target thinks. Later, as a Magic Action, you can probe deeper (failed WIS save = discern reasoning, emotions...). The target knows you're probing into its mind.",
		source: "Pact Magic",
	},
	{
		name: "Misty Step",
		level: 2,
		school: "Conjuration",
		castingTime: "Bonus action",
		range: "Self",
		components: "V",
		duration: "Instant",
		description:
			"Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
		source: "Pact Magic",
	},
	{
		name: "Scorching Ray",
		level: 2,
		school: "Evocation",
		castingTime: "Action",
		range: "120 feet",
		components: "V, S",
		duration: "Instant",
		description:
			"You create four rays of fire and hurl them at one or more targets within range. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.",
		source: "Fiend Patron Spells",
	},
	{
		name: "Suggestion",
		level: 2,
		school: "Enchantment",
		castingTime: "Action",
		range: "30 feet",
		components: "V, M",
		duration: "8 hours (C)",
		description:
			"You suggest a course of action (no more than 25 words) to a creature you can see that can hear and understand you. It should sound achievable and not involve enything that would damage the target or their allies. They must succeed on a WIS Save or follow the suggestion and get the Charmed condition. The spell ends upon the task's completion.",
		source: "Fiend Patron Spells",
	},
	{
		name: "Invisibility",
		level: 2,
		school: "Illusion",
		castingTime: "Action",
		range: "Touch",
		components: "V, S, M (an eyelash encased in gum arabic)",
		duration: "Concentration, up to 1 hour",
		description:
			"Two creatures you touch become invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.",
		source: "Pact Magic",
	},
	{
		name: "Fireball",
		level: 3,
		school: "Evocation",
		castingTime: "Action",
		range: "150 feet",
		components: "V, S, M",
		duration: "Instant",
		description:
			"A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
		source: "Fiend Patron Spells",
	},
]

/**
 * Helper function to group spells by level
 */
export function getSpellsByLevel(spells: Spell[]): Record<number, Spell[]> {
	const spellsByLevel: Record<number, Spell[]> = {}

	spells.forEach((spell) => {
		if (!spellsByLevel[spell.level]) {
			spellsByLevel[spell.level] = []
		}
		spellsByLevel[spell.level].push(spell)
	})

	return spellsByLevel
}