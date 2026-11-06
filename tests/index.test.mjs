import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('collapses spaces', () => {
  assert.equal(api.normalizeWhitespace('a   b'), 'a b');
});
test('collapses newlines', () => {
  assert.equal(api.normalizeWhitespace('one\n\ttwo'), 'one two');
});
test('trims by default', () => {
  assert.equal(api.normalizeWhitespace('  word  '), 'word');
});
test('can preserve edge spaces', () => {
  assert.equal(api.normalizeWhitespace('  word  ', false), ' word ');
});
test('handles empty input', () => {
  assert.equal(api.normalizeWhitespace('   '), '');
});
test('rejects non-string input', () => {
  assert.throws(() => api.normalizeWhitespace(42), TypeError);
});
