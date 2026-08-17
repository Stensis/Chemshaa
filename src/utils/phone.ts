export function isValidKenyanPhone(value: string): boolean {
  // Match the Android flow strictly: no spaces, hyphens, or formatting
  // characters are accepted in the field.
  return /^(?:0[17]\d{8}|254[17]\d{8}|\+254[17]\d{8})$/.test(value)
}
