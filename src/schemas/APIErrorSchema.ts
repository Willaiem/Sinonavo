import { z } from "zod";

export const APIErrorSchema = z.object({
  message: z.string()
})