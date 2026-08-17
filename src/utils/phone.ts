export function isValidKenyanPhone(value: string): boolean {
  const compact = value.replace(/[\s-]/g, '')
  return /^(?:0[17]\d{8}|254[17]\d{8}|\+254[17]\d{8})$/.test(compact)
}
