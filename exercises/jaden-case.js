'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(s) {
	let words = s.split(' ');
	let jadenWords = [];
	for (let word of words) {
		if (word.length > 0) {
			jadenWords.push(word[0].toUpperCase() + word.substring(1).toLowerCase());
		} else {
			jadenWords.push('');
		}
	}

	return jadenWords.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?');
assert.strictEqual(jadenCase('hOwaRR    You'), 'Howarr    You');
assert.strictEqual(jadenCase(''), '');
// End of tests */
