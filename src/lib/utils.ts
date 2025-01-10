/** A helper utility for conditionally combining classNames. */
export function cn(...inputs: (string | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
