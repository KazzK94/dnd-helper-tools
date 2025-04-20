/**
 * Character schema definitions with Zod validation
 */
import { z } from 'zod';

// =========== Zod Schemas for Validation ===========

// Coins with validation
export const CoinsSchema = z.object({
  copper: z.number().int().nonnegative(),
  silver: z.number().int().nonnegative(),
  electrum: z.number().int().nonnegative(),
  gold: z.number().int().nonnegative(),
  platinum: z.number().int().nonnegative(),
});

// Inventory item with validation
export const InventoryItemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  description: z.string(),
  quantity: z.number().int().positive(),
});

// Trait item with validation
export const TraitSchema = z.object({
  name: z.string().min(1, "Trait name is required"),
  description: z.string().min(1, "Trait description is required"),
  source: z.string().min(1, "Trait source is required"),
  level: z.number().int().nonnegative().optional(), // For class features that unlock at certain levels
});

// Ability scores with validation
export const AbilityScoresSchema = z.object({
  strength: z.number().int().min(1).max(30),
  dexterity: z.number().int().min(1).max(30),
  constitution: z.number().int().min(1).max(30),
  intelligence: z.number().int().min(1).max(30),
  wisdom: z.number().int().min(1).max(30),
  charisma: z.number().int().min(1).max(30),
});

// Saving throw proficiencies
export const SavingThrowProficienciesSchema = z.object({
  strength: z.boolean(),
  dexterity: z.boolean(),
  constitution: z.boolean(),
  intelligence: z.boolean(),
  wisdom: z.boolean(),
  charisma: z.boolean(),
});

// Skill proficiencies, grouped by associated ability
export const SkillProficienciesSchema = z.object({
  // Strength-based
  athletics: z.boolean(),

  // Dexterity-based
  acrobatics: z.boolean(),
  sleightOfHand: z.boolean(),
  stealth: z.boolean(),

  // Intelligence-based
  arcana: z.boolean(),
  history: z.boolean(),
  investigation: z.boolean(),
  nature: z.boolean(),
  religion: z.boolean(),

  // Wisdom-based
  animalHandling: z.boolean(),
  insight: z.boolean(),
  medicine: z.boolean(),
  perception: z.boolean(),
  survival: z.boolean(),

  // Charisma-based
  deception: z.boolean(),
  intimidation: z.boolean(),
  performance: z.boolean(),
  persuasion: z.boolean(),
});

// Complete inventory
export const InventorySchema = z.object({
  items: z.array(InventoryItemSchema),
  coins: CoinsSchema,
});

// Traits categorized
export const TraitsSchema = z.object({
  classFeatures: z.array(TraitSchema),
  speciesTraits: z.array(TraitSchema),
  feats: z.array(TraitSchema),
});

// Complete character schema
export const CharacterSchema = z.object({
  // Basic details
  name: z.string().min(1, "Character name is required"), // Changed from characterName to name
  species: z.string().min(1, "Species is required"),
  background: z.string().min(1, "Background is required"),
  characterClass: z.string().min(1, "Class is required"),
  subclass: z.string(),
  level: z.number().int().min(1).max(20),
  
  // Background text
  backgroundText: z.string(),
  
  // Game details
  abilityScores: AbilityScoresSchema,
  savingThrowProficiencies: SavingThrowProficienciesSchema,
  skillProficiencies: SkillProficienciesSchema,
  
  // Combat stats
  currentHP: z.number().int().nonnegative(),
  tempHP: z.number().int().nonnegative(),
  maxHP: z.number().int().positive(),
  armorClass: z.number().int().positive(),
  speed: z.number().int().positive(),
  hitDice: z.string().regex(/^\d+d\d+$/, "Invalid dice format. Must be '1d8', '2d6', etc."),
  
  // Inventory
  inventory: InventorySchema,
  
  // Traits
  traits: TraitsSchema,
});

// =========== TypeScript Types Inferred from Zod ===========

// Types inferred from schemas for TypeScript usage
export type Coins = z.infer<typeof CoinsSchema>;
export type InventoryItem = z.infer<typeof InventoryItemSchema>;
export type Trait = z.infer<typeof TraitSchema>;
export type AbilityScores = z.infer<typeof AbilityScoresSchema>;
export type SavingThrowProficiencies = z.infer<typeof SavingThrowProficienciesSchema>;
export type SkillProficiencies = z.infer<typeof SkillProficienciesSchema>;
export type Inventory = z.infer<typeof InventorySchema>;
export type Traits = z.infer<typeof TraitsSchema>;
export type CharacterData = z.infer<typeof CharacterSchema>;

// Mapping of abilities to their associated skills
export const ABILITY_TO_SKILLS_MAP = {
  strength: ['athletics'],
  dexterity: ['acrobatics', 'sleightOfHand', 'stealth'],
  constitution: [],
  intelligence: ['arcana', 'history', 'investigation', 'nature', 'religion'],
  wisdom: ['animalHandling', 'insight', 'medicine', 'perception', 'survival'],
  charisma: ['deception', 'intimidation', 'performance', 'persuasion'],
} as const;