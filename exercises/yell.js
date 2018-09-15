'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(s) {
	return s.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('helLo WoRld'), 'HELLO WORLD');
assert.strictEqual(yell(''), '');
// End of tests */
