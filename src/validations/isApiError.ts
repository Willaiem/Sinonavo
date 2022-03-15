import { APIErrorSchema } from "../schemas/APIErrorSchema";
import { APIError } from "@sinonavo/types";

export const isApiError = (maybeError: unknown): maybeError is APIError =>
  APIErrorSchema.safeParse(maybeError).success