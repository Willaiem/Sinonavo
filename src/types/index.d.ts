import { z } from 'zod'
import { APIErrorSchema } from '../schemas/APIErrorSchema'
import { SupportedLanguagesSchema } from '../schemas/SupportedLanguagesSchema'

export type LanguagesISO = z.infer<typeof SupportedLanguagesSchema> | 'NOFLAG'

type Language = {
  name: string,
  iso: LanguagesISO
}

export type SupportedLanguages = Record<LanguagesISO, Language>

export type APIError = z.infer<typeof APIErrorSchema>

export type FieldType = 'from' | 'to'

export type AppStore = {
  langs: { from: Language | null, to: Language | null }
  texts: { from: string, to: string },
  setLang: ({ type, lang }: { type: FieldType, lang: Language }) => void,
  setText: ({ type, text }: { type: FieldType, text: string }) => void,
  error: APIError | Error | null,
  swap: () => void,
  fetchTranslation: () => void
}