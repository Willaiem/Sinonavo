import { z } from "zod";
import { SupportedLanguagesSchema } from "./SupportedLanguagesSchema";

export const APIResponseSchema = z.object({
  translations: z.tuple([z.object({
    detected_source_language: SupportedLanguagesSchema,
    text: z.string()
  })])
})