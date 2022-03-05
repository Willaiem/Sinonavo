import { APIErrorSchema } from "../schemas/APIErrorSchema";
import { APIError } from "../types";

export const isApiError = (maybeError: unknown): maybeError is APIError =>
  APIErrorSchema.safeParse(maybeError).success