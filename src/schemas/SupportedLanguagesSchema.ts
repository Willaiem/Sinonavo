import { z } from "zod";

// ! The list of supported languages (as ISO codes) in Deepl API.
export const SupportedLanguagesSchema = z.union([
  z.literal('EN'),
  z.literal('BG'),
  z.literal('CN'),
  z.literal('CZ'),
  z.literal('DK'),
  z.literal('EE'),
  z.literal('FI'),
  z.literal('FR'),
  z.literal('GR'),
  z.literal('ES'),
  z.literal('JP'),
  z.literal('LT'),
  z.literal('LV'),
  z.literal('NL'),
  z.literal('DE'),
  z.literal('PL'),
  z.literal('PT'),
  z.literal('RU'),
  z.literal('RO'),
  z.literal('SK'),
  z.literal('SI'),
  z.literal('SE'),
  z.literal('HU'),
  z.literal('IT')
])