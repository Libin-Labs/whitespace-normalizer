import * as api from '@lp-labs/whitespace-normalizer';
import { normalizeWhitespace } from '@lp-labs/whitespace-normalizer';
console.log(normalizeWhitespace('  one\n  two  '));
// @ts-expect-error invalid argument must be rejected by declarations
api.normalizeWhitespace(42);
