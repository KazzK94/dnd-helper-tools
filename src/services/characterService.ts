import { type CharacterData, CharacterSchema } from '../types/character.schema';
import { DEFAULT_CHARACTER } from '../data/defaultCharacter';

const STORAGE_KEY = 'dnd-character-data';

/**
 * Validates character data against the schema
 * @returns Returns validation result with success/error status
 */
export function validateCharacter(character: unknown): { 
  success: boolean; 
  data?: CharacterData; 
  errors?: string[] 
} {
  try {
    const validatedData = CharacterSchema.parse(character);
    return { success: true, data: validatedData };
  } catch (error: any) {
    // Extract validation errors from Zod
    const formattedErrors = error.errors?.map((err: any) => 
      `${err.path.join('.')}: ${err.message}`
    ) || ['Unknown validation error'];
    
    return { success: false, errors: formattedErrors };
  }
}

/**
 * Saves character data to localStorage with validation
 * @returns Operation result
 */
export function saveCharacter(character: CharacterData): { 
  success: boolean; 
  message: string; 
  errors?: string[];
} {
  // Validate before saving
  const validation = validateCharacter(character);
  
  if (!validation.success) {
    return { 
      success: false, 
      message: 'Error validating character data', 
      errors: validation.errors 
    };
  }
  
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
      return { success: true, message: 'Character saved successfully' };
    } catch (e) {
      return { 
        success: false, 
        message: 'Error saving to localStorage', 
        errors: [(e as Error).message] 
      };
    }
  }
  
  return { 
    success: false, 
    message: 'Cannot access localStorage (not in a browser environment)' 
  };
}

/**
 * Loads character data from localStorage
 */
export function loadCharacter(): CharacterData {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Validate the stored data
        const validation = validateCharacter(parsed);
        if (validation.success && validation.data) {
          return validation.data;
        } else {
          console.warn('Stored data is invalid:', validation.errors);
        }
      } catch (e) {
        console.error('Error parsing stored character data:', e);
      }
    }
  }

  // Return default character if no data is stored or data is invalid
  return { ...DEFAULT_CHARACTER };
}

/**
 * Calculates ability modifier based on score
 */
export function getAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

/**
 * Formats ability modifier as a string (e.g. "+3" or "-1")
 */
export function formatModifier(modifier: number): string {
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

/**
 * Calculate proficiency bonus based on level
 */
export function getProficiencyBonus(level: number): number {
  return Math.ceil(1 + level / 4);
}

// Re-export for backwards compatibility
export { DEFAULT_CHARACTER };