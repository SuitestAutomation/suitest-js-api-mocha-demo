const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('My super cool test', () => {
	before(async() => {
		// Start test
		await suitest.startTest('my-super-cool-test');
	});

	it('should pass', async() => {
		// Open app
		await assert.openApp();

		// assert location
		await assert.location().doesNot().startWith('test');

		// assert cookie
		await assert.cookie('name').doesNot().exist();

		// test element
		await assert.element({
			css: 'div',
			index: 1,
		}).exist();
	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
