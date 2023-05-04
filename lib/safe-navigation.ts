/** returns true if and only if the given value is either null or undefined
 * @param value the value in question
 */
export function isNil<T> (value: T | undefined | null): value is undefined | null {
  return value === undefined || value === null
}

export function isTruthy (value?: boolean): value is true {
  return isDefined(value) && value
}

/** returns true if and only if the given value is neither null nor undefined
 * @param value the value in question
 */
export function isDefined<T>(value: T | undefined | null): value is T {
  return !isNil(value)
}

/** returns true if the given object is nil or has length === 0
 *
 * @param value a thing with a length
 */
export function isEmpty<T extends { length: number}>(value: T | undefined | null): value is undefined | null {
  return isNil(value) || value.length === 0
}

/** used for evaluating tri-state logic (true | false | undefined) */
export function is (pred?: boolean): boolean {
  return isDefined(pred) && pred
}

/** returns true if the given object is defined and has length > 0
 *
 * @param value a thing with a length
 */
export function isNonEmpty<T extends { length: number}>(value: T | undefined | null): value is T {
  return !isEmpty(value)
}

/**
 * @param value the value to be tested
 * @param fallback a value to fall back on if value is undefined or null
 * @param empty a predicate that defines when to fall back
 *
 * by default `defaultTo` falls back if the value is nil. Given the `empty` callback,
 * `defaultTo` will fall back if the value exists and fails the predicate.
 *
 * @returns value or fallback
 */
export function defaultTo<T>(value: T | undefined | null, fallback: T, empty?: (obj: T) => boolean): T {
  if (isDefined(empty)) {
    return isDefined(value) && !empty(value) ? value : fallback
  }

  return isDefined(value) ? value : fallback
}

export function toArray <T>(value: T | T[] | undefined): T[] {
  if (isNil(value)) {
    return []
  }
  return Array.isArray(value) ? value : [value]
}