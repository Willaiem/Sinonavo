import { SupportedLanguages } from "../types"

// ! the max length of text that Deepl APL can handle at once.
export const MAX_LENGTH = 5000

export const SUPPORTED_LANGUAGES: SupportedLanguages = [
  { name: 'English', iso: 'EN' },
  { name: 'Bulgarian', iso: 'BG' },
  { name: 'Chinese', iso: 'CN' },
  { name: 'DK', iso: 'DK' },
  { name: 'EE', iso: 'EE' },
  { name: 'FI', iso: "FI" },
  { name: 'French', iso: 'FR' },
  { name: 'GR', iso: 'GR' },
  { name: 'Spanish', iso: "ES" },
  { name: 'JP', iso: 'JP' },
  { name: 'LT', iso: 'LT' },
  { name: 'LV', iso: 'LV' },
  { name: 'NL', iso: 'NL' },
  { name: 'German (Deutsch)', iso: 'DE' },
  { name: 'Polish (Polski)', iso: 'PL' },
  { name: 'PT', iso: 'PT' },
  { name: 'Russian', iso: 'RU' },
  { name: 'Romanian', iso: 'RO' },
  { name: 'SK', iso: 'SK' },
  { name: 'SI', iso: 'SI' },
  { name: 'Swedish', iso: 'SE' },
  { name: 'HU', iso: 'HU' },
  { name: 'Italian', iso: 'IT' }
]
