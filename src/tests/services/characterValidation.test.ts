import { describe, test, expect } from 'vitest';
import { validateCharacter } from '../../services/characterService';
import { DEFAULT_CHARACTER } from '../../data/defaultCharacter';

describe('Character Validation', () => {
  test('should validate a correct character', () => {
    const result = validateCharacter(DEFAULT_CHARACTER);
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(result.errors).toBeUndefined();
  });

  test('should detect errors in invalid data', () => {
    // Character with negative HP
    const invalidCharacter = {
      ...DEFAULT_CHARACTER,
      currentHP: -5
    };

    const result = validateCharacter(invalidCharacter);
    expect(result.success).toBe(false);
    expect(result.errors).toBeDefined();
    // Check that the error message contains the field name
    expect(result.errors?.[0]).toContain('currentHP');
    expect(result.data).toBeUndefined();
  });

  test('should validate required fields', () => {
    // Character without name
    const incompleteCharacter = {
      ...DEFAULT_CHARACTER,
      name: '' // Changed from characterName to name
    };

    const result = validateCharacter(incompleteCharacter);
    expect(result.success).toBe(false);
    expect(result.errors).toBeDefined();
    expect(result.errors?.[0]).toContain('name'); // Changed from characterName to name
  });

  test('should validate hitDice format', () => {
    // Character with invalid dice format
    const invalidDiceCharacter = {
      ...DEFAULT_CHARACTER,
      hitDice: 'invalid'
    };

    const result = validateCharacter(invalidDiceCharacter);
    expect(result.success).toBe(false);
    expect(result.errors).toBeDefined();
    expect(result.errors?.[0]).toContain('hitDice');
  });
});