import { describe, test, expect } from 'vitest'
import {
	getAbilityModifier,
	formatModifier,
	getProficiencyBonus,
} from '../../services/characterService'

describe('characterService', () => {

	describe('getAbilityModifier', () => {
		// Test cases for ability modifiers
		const testCases = [
			{ score: 1, expected: -5 },
			{ score: 2, expected: -4 },
			{ score: 3, expected: -4 },
			{ score: 5, expected: -3 },
			{ score: 7, expected: -2 },
			{ score: 8, expected: -1 },
			{ score: 9, expected: -1 },
			{ score: 10, expected: 0 },
			{ score: 11, expected: 0 },
			{ score: 12, expected: 1 },
			{ score: 13, expected: 1 },
			{ score: 14, expected: 2 },
			{ score: 15, expected: 2 },
			{ score: 16, expected: 3 },
			{ score: 17, expected: 3 },
			{ score: 18, expected: 4 },
			{ score: 19, expected: 4 },
			{ score: 20, expected: 5 }
		]

		testCases.forEach(({ score, expected }) => {
			test(`should return ${expected} for ability score ${score}`, () => {
				expect(getAbilityModifier(score)).toBe(expected)
			})
		})
	})

	describe('formatModifier', () => {
		test('should format positive modifiers with a plus sign', () => {
			expect(formatModifier(3)).toBe('+3')
			expect(formatModifier(0)).toBe('+0')
			expect(formatModifier(5)).toBe('+5')
		})

		test('should format negative modifiers with a minus sign', () => {
			expect(formatModifier(-1)).toBe('-1')
			expect(formatModifier(-4)).toBe('-4')
		})
	})

	describe('getProficiencyBonus', () => {
		const levelBonusCases = [
			{ level: 1, expected: 2 },
			{ level: 2, expected: 2 },
			{ level: 3, expected: 2 },
			{ level: 4, expected: 2 },
			{ level: 5, expected: 3 },
			{ level: 8, expected: 3 },
			{ level: 9, expected: 4 },
			{ level: 13, expected: 5 },
			{ level: 17, expected: 6 },
			{ level: 20, expected: 6 }
		]

		levelBonusCases.forEach(({ level, expected }) => {
			test(`should return ${expected} for character level ${level}`, () => {
				expect(getProficiencyBonus(level)).toBe(expected)
			})
		})
	})
})