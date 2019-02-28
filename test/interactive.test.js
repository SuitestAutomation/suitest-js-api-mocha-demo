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

		// Start interactive REPL
		await suitest.interactive();
	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
