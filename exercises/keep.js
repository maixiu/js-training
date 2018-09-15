'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(s) {
	return s.substring(0, 2);
}

function keepLast(s) {
	return s.substring(s.length - 2);
}

function keepFirstLast(s) {
	return s.substring(2, 4);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('assert'), 'as');
assert.strictEqual(keepFirst('a'), 'a');
assert.strictEqual(keepFirst(''), '');

assert.strictEqual(keepLast('assert'), 'rt');
assert.strictEqual(keepLast('a'), 'a');
assert.strictEqual(keepLast(''), '');

assert.strictEqual(keepFirstLast('assert'), 'se');
assert.strictEqual(keepFirstLast('ase'), 'e');
assert.strictEqual(keepFirstLast(''), '');
// End of tests */
