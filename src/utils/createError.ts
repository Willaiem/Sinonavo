import { isApiError } from "../validations/isApiError"

export const createError = (err: unknown) => {
  if (err instanceof Error) {
    return err
  }

  return new Error('Something went wrong', {
    cause: new Error(isApiError(err) ? err.message : JSON.stringify(err))
  })
}