'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(s) {
	return '*' + s.toLowerCase() + '*';
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('HeLLo woRLd'), '*hello world*');
assert.strictEqual(whisper(''), '**');
// End of tests */
