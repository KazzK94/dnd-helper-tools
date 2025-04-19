import type { CharacterData } from '../types/character.types'
import { DEFAULT_CHARACTER } from '../data/defaultCharacter'

const STORAGE_KEY = 'dnd-character-data'

/**
 * Guarda los datos del personaje en localStorage
 */
export function saveCharacter(character: CharacterData): void {
	if (typeof window !== 'undefined') {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(character))
	}
}

/**
 * Carga los datos del personaje desde localStorage
 */
export function loadCharacter(): CharacterData {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY)
		if (stored) {
			try {
				return JSON.parse(stored) as CharacterData
			} catch (e) {
				console.error('Error parsing stored character data:', e)
			}
		}
	}

	// Devuelve el personaje predeterminado si no hay datos guardados
	return { ...DEFAULT_CHARACTER }
}

/**
 * Calcula el modificador de habilidad basado en la puntuación
 */
export function getAbilityModifier(score: number): number {
	return Math.floor((score - 10) / 2)
}

/**
 * Formatea el modificador de habilidad como string (ej: "+3" o "-1")
 */
export function formatModifier(modifier: number): string {
	return modifier >= 0 ? `+${modifier}` : `${modifier}`
}

// Calculate proficiency bonus based on level
export function getProficiencyBonus(level: number): number {
	return Math.ceil(1 + level / 4)
}

// Re-export interface and default character for backwards compatibility
export type { CharacterData }
export { DEFAULT_CHARACTER }