import type { Spell } from '../types/spell.types'

/**
 * Standard warlock spells for reference
 */
export const WARLOCK_SPELLS: Spell[] = [
  {
    name: "Eldritch Blast",
    level: 0,
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
  },
  {
    name: "Minor Illusion",
    level: 0,
    school: "Illusion",
    castingTime: "1 action",
    range: "30 feet",
    components: "S, M (a bit of fleece)",
    duration: "1 minute",
    description:
      "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
  },
  {
    name: "Friends",
    level: 0,
    school: "Enchantment",
    castingTime: "1 action",
    range: "Self",
    components: "S, M (a small amount of makeup)",
    duration: "Concentration, up to 1 minute",
    description:
      "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you.",
  },
  {
    name: "Produce Flame",
    level: 0,
    school: "Conjuration",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "10 minutes",
    description:
      "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
  },
  {
    name: "Vicious Mockery",
    level: 0,
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    description:
      "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you, it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
  },
  {
    name: "Toll the Dead",
    level: 0,
    school: "Necromancy",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.",
  },
  {
    name: "Hellish Rebuke",
    level: 1,
    school: "Evocation",
    castingTime: "1 reaction",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.",
  },
  {
    name: "Witch Bolt",
    level: 1,
    school: "Evocation",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a twig from a tree that has been struck by lightning)",
    duration: "Concentration, up to 1 minute",
    description:
      "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically.",
  },
  {
    name: "Burning Hands",
    level: 1,
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (15-foot cone)",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.",
  },
  {
    name: "Command",
    level: 1,
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "1 round",
    description:
      "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.",
  },
  {
    name: "Comprehend Languages",
    level: 1,
    school: "Divination",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a pinch of soot and salt)",
    duration: "1 hour",
    description:
      "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.",
  },
  {
    name: "Detect Magic",
    level: 1,
    school: "Divination",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description:
      "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
  },
  {
    name: "False Life",
    level: 1,
    school: "Necromancy",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a small amount of alcohol or distilled spirits)",
    duration: "1 hour",
    description:
      "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.",
  },
  {
    name: "Detect Thoughts",
    level: 2,
    school: "Divination",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a copper piece)",
    duration: "Concentration, up to 1 minute",
    description:
      "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you.",
  },
  {
    name: "Misty Step",
    level: 2,
    school: "Conjuration",
    castingTime: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Instantaneous",
    description:
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
  },
  {
    name: "Scorching Ray",
    level: 2,
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.",
  },
  {
    name: "Suggestion",
    level: 2,
    school: "Enchantment",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
    duration: "Concentration, up to 8 hours",
    description:
      "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect.",
  },
  {
    name: "Invisibility",
    level: 2,
    school: "Illusion",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (an eyelash encased in gum arabic)",
    duration: "Concentration, up to 1 hour",
    description:
      "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.",
  },
  {
    name: "Fireball",
    level: 3,
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (a tiny ball of bat guano and sulfur)",
    duration: "Instantaneous",
    description:
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
  },
]

/**
 * Helper function to group spells by level
 */
export function getSpellsByLevel(spells: Spell[]): Record<number, Spell[]> {
  const spellsByLevel: Record<number, Spell[]> = {};
  
  spells.forEach((spell) => {
    if (!spellsByLevel[spell.level]) {
      spellsByLevel[spell.level] = [];
    }
    spellsByLevel[spell.level].push(spell);
  });
  
  return spellsByLevel;
}