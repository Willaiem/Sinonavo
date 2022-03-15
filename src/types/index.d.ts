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