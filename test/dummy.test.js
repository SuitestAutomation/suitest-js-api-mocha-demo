const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('My super cool test', () => {
	it('should pass', async() => {
		// Open app
		await assert.openApp();

		// Assert location
		await assert.location().doesNot().startWith('test');

		// Assert cookie
		await assert.cookie('name').doesNot().exist();

		// Test if element exist
		// https://suite.st/docs/suitest-api/assertions-test-subjects/#element
		await assert.element({
			css: 'div',
			index: 1,
		}).exist();
	});
});
