const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('With debugger', () => {
	it('should stop at breakpoint and start debugger', async() => {
		// Open app
		await assert.openApp();

		// Get current location
		const loc = await suitest.location();

		// Start debugger
		debugger;
	});
});
