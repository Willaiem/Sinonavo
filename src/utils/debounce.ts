export const debounce = <A = unknown, R = void>(
  fn: (args?: A) => R,
  ms?: number
) => {
  let timer: number

  const debouncedFn = (args?: A) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn(args)
    }, ms ?? 500)
  }

  const destroyTimer = () => clearTimeout(timer)

  return { debouncedFn, destroyTimer }
}
