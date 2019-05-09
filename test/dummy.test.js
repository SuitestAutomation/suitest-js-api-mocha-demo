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
		// https://suite.st/docs/suitest-api/assertions-test-subjects/#element
		await assert.element('maincontainer').exist();
		await assert.video().doesNot().exist();
	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
