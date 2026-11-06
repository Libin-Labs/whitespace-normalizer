export function normalizeWhitespace(value: string, trim = true): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  if (typeof trim !== 'boolean') throw new TypeError('Trim option must be boolean');
  const collapsed = value.replace(/\s+/gu, ' ');
  return trim ? collapsed.trim() : collapsed;
}
