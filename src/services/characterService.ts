// Define la estructura de datos del personaje
export interface CharacterData {
  // Basic details
  characterName: string;
  species: string;
  background: string;
  characterClass: string;
  subclass: string;
  level: number;
  
  // Background text
  backgroundText: string;
  
  // Ability scores
  abilityScores: {
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
  }
  
  // Combat stats
  currentHP: number;
  tempHP: number;
  maxHP: number;
  armorClass: number;
  speed: number;
  hitDice: string;
}

// Personaje predeterminado para demos y nuevos usuarios
export const DEFAULT_CHARACTER: CharacterData = {
  characterName: "Avarak Lightweaver",
  species: "Changeling",
  background: "Merchant",
  characterClass: "Warlock",
  subclass: "Fiendish Patron",
  level: 5,
  
  backgroundText: "A scholar from the Academy of Arcane Arts who specializes in elemental magic. After a mysterious incident that destroyed parts of the academy, Eldric has been on a quest to understand ancient magical artifacts and their powers.",
  
  abilityScores: {
	strength: 7,
	dexterity: 12,
	constitution: 14,
	intelligence: 13,
	wisdom: 11,
	charisma: 18
  },
  
  currentHP: 38,
  tempHP: 17,
  maxHP: 38,
  armorClass: 14,
  speed: 30,
  hitDice: "5d8"
};

const STORAGE_KEY = 'dnd-character-data';

/**
 * Guarda los datos del personaje en localStorage
 */
export function saveCharacter(character: CharacterData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
  }
}

/**
 * Carga los datos del personaje desde localStorage
 */
export function loadCharacter(): CharacterData {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as CharacterData;
      } catch (e) {
        console.error('Error parsing stored character data:', e);
      }
    }
  }
  
  // Devuelve el personaje predeterminado si no hay datos guardados
  return {...DEFAULT_CHARACTER};
}

/**
 * Calcula el modificador de habilidad basado en la puntuación
 */
export function getAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

/**
 * Formatea el modificador de habilidad como string (ej: "+3" o "-1")
 */
export function formatModifier(modifier: number): string {
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}