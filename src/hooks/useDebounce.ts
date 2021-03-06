import { useEffect } from "react";

import { debounce } from "../utils/debounce";

export const useDebounce = <A = unknown, R = void>({
  fn, ms
}: {
  fn: (args?: A) => R,
  ms?: number
}): ((args?: A) => void) => {
  const { debouncedFn, destroyTimer } = debounce<A, R>(fn, ms);

  useEffect(() => destroyTimer(), []);

  return debouncedFn;
};