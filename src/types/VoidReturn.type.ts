/**
 * Type for functions that return void, with or without an argument
 */
export type VoidReturn<T = void> = T extends void
  ? () => void
  : (arg: T) => void
