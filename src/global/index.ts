import { SupportedLanguages } from "../types"

// ! the max length of text that Deepl APL can handle at once.
export const MAX_LENGTH = 5000

export const SUPPORTED_LANGUAGES: SupportedLanguages = {
  EN: { name: 'English', iso: 'EN' },
  BG: { name: 'Bulgarian', iso: 'BG' },
  CN: { name: 'Chinese', iso: 'CN' },
  CZ: { name: 'Czech', iso: 'CZ' },
  DK: { name: 'DK', iso: 'DK' },
  EE: { name: 'EE', iso: 'EE' },
  FI: { name: 'FI', iso: "FI" },
  FR: { name: 'French', iso: 'FR' },
  GR: { name: 'GR', iso: 'GR' },
  ES: { name: 'Spanish', iso: "ES" },
  JP: { name: 'JP', iso: 'JP' },
  LT: { name: 'LT', iso: 'LT' },
  LV: { name: 'LV', iso: 'LV' },
  NL: { name: 'NL', iso: 'NL' },
  DE: { name: 'German (Deutsch)', iso: 'DE' },
  PL: { name: 'Polish (Polski)', iso: 'PL' },
  PT: { name: 'PT', iso: 'PT' },
  RU: { name: 'Russian', iso: 'RU' },
  RO: { name: 'Romanian', iso: 'RO' },
  SK: { name: 'SK', iso: 'SK' },
  SI: { name: 'SI', iso: 'SI' },
  SE: { name: 'Swedish', iso: 'SE' },
  HU: { name: 'HU', iso: 'HU' },
  IT: { name: 'Italian', iso: 'IT' }
}

