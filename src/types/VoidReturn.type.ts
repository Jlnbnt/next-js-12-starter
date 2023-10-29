export type VoidReturn<T = void> = T extends void
  ? () => void
  : (arg: T) => void
