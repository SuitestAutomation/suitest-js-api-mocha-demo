const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {PROP} = require('suitest-js-api');
const {assert, VRC} = suitest;

describe('Welcome to Suitest', async() => {
	before(async() => {
		/**
		 * WatchMe is an HbbTV application that has been adapted to work in Chrome and Firefox.
		 * The following line opens the WatchMe application on the connected device.
		 */
		await assert.openApp();
		/**
		 * Every application needs some time to initialize before it is ready to receive any user input.
		 * In your test case always make sure that you are past that point before continuing with anything else.
		 *
		 * Since this check will be repeated more than once it is a good idea to put them in a separate function.
		 *
		 */
		await snippetHomepageOpened();
	});

	it('This is a sample test case on a sample app called WatchMe.', async() => {
		/**
		 * Now that the application is ready to receive user input, send a key to it.
		 * Below is the simplest version of the "Press" line that sends a navigational key press to the WatchMe app. Click on the "once" below to check out the other versions of the "Press" line.
		 *
		 */
		await assert.press(VRC.RIGHT).interval(1000);
		/**
		 * Pressing "Right" should have highlighted the second video on the WatchMe homepage.
		 * Below we will verify that this indeed did happen. There are 3 interesting things about the line below:
		 *
		 * 1. Since we have sent some input to the app we must allow it some time to process. This is why we are waiting until our element gets the highlight. Execution times will vary depending on the device. In this case, we are allowing (an exaggerated) up to 2 seconds timeout for the device to respond.
		 *
		 * 2. This type of line is called "Assertion". In this case, the subject of this assertion is the "view element" - a piece of the app's layout. In Suitest you store your view elements in the "Element repository" accessible from the black menu bar at the top.
		 *
		 * 3. In Suitest the assertion also contains a control directive. That is you can tell Suitest how to proceed based on the result of that assertion.
		 */
		await assert.element('Cominandes 2 title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * The previous line has made sure that the focus is on the second video on the page.
		 * Pressing OK on that item should open the video, let's try that this really works.
		 * We will reuse the knowledge from the previous step.
		 */
		await assert.press(VRC.ENTER).interval(1000);
		await assert.element('Video object').exists().timeout(5000);
		/**
		 * This is enough for one test. It is always a good idea to keep your test cases as simple as possible. Ideally any test scenario should not be longer than 30 lines (50 is an extreme case). Another important rule is to have every scenario test a *single* thing.
		 * If you need to test two different things make two different scenarios.
		 *
		 * Generally your test cases should be of the 2 types:
		 *
		 * a) a "Feature test" - a scenario that verifies that a particular aspect of the app's feature works.
		 * b) a "User journey test" - a scenario that verifies that the user can do a particular thing in the app.
		 *
		 * We recommend that you follow the above rules with both of these scenario types.
		 *
		 */
	});
});
