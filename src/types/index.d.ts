import { z } from 'zod'
import { APIErrorSchema } from '../schemas/APIErrorSchema'
import { SupportedLanguagesSchema } from '../schemas/SupportedLanguagesSchema'

export type SupportedLanguages = z.infer<typeof SupportedLanguagesSchema>

export type APIError = z.infer<typeof APIErrorSchema>

export type AppStore = {
  fromLang: SupportedLanguages | null,
  fromText: string,
  toLang: SupportedLanguages | null,
  toText: string,
  error: APIError | Error | null,
  setFromLang: (lang: SupportedLanguages) => void,
  setFromText: (text: string) => void,
  setToLang: (lang: SupportedLanguages) => void,
  setToText: (text: string) => void,
  swap: () => void,
  fetchTranslation: () => void
}