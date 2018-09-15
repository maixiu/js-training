'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(s) {
	return s.slice(2);
}

function cutLast(s) {
	return s.slice(0, -2);
}

function cutFirstLast(s) {
	return cutLast(cutFirst(s));
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('assert'), 'sert');
assert.strictEqual(cutFirst('as'), '');
assert.strictEqual(cutFirst(''), '');

assert.strictEqual(cutLast('assert'), 'asse');
assert.strictEqual(cutLast('as'), '');
assert.strictEqual(cutLast(''), '');

assert.strictEqual(cutFirstLast('assert'), 'se');
assert.strictEqual(cutFirstLast('as'), '');
assert.strictEqual(cutFirstLast(''), '');
// End of tests */
