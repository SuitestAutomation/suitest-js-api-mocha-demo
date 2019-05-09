const suitest = require('suitest-js-api');
const {assert} = suitest;

describe('Repl usage example.', () => {
	before(async() => {
		// Start test
		await suitest.startTest('my-super-cool-test');
	});

	it('Repl mode will be triggered with available variables: suitest, body.', async() => {
		// Open app
		await assert.openApp();
		const mainContainerChain = suitest.element('maincontainer');
		const mainContainer = await mainContainerChain;

		await suitest.interactive({
			// these variables will be available in repl mode
			vars: {
				suitest,
				mainContainer,
			},

			repeater() {
				console.log('I will be called after file changing.');
				// mainContainer will be able from parent lexical scope
				console.log(mainContainer);
			}
		});

		await mainContainerChain.exist().toAssert();

	});

	after(async() => {
		// End test
		await suitest.endTest();
	});
});
