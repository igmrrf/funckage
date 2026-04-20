
export function handleKeyUp(
  { key }: KeyboardEvent,
  action: () => void
) {
  if (key === "Enter") {
    action();
  }
}
