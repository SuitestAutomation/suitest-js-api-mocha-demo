const {snippetHomepageOpened} = require('./common');
const {imageCandiesInGallery} = require('./selectors');

const suitest = require('suitest-js-api');
const {assert, VRC, PROP} = suitest;

describe('Welcome to suitest', async() => {
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

	it('This is a sample test case on a sample app called WatchMe', async() => {
		/**
		 * Now that the application is ready to receive user input, send a key to it.
		 * Below is the simplest version of the "Press" line that sends a navigational key press to the WatchMe app.
		 *
		 */
		await suitest.press(VRC.RIGHT);
		/**
		 * Pressing "Right" should have highlighted a first image on the WatchMe homepage.
		 * Below we will verify that this indeed did happen. There are 2 interesting things about the line below:
		 *
		 * 1. Since we have sent some input to the line we must allow it some time to process it.
		 * This is why we are waiting until our element gets the highlight.
		 * Execution times will vary depending on the device. In this case we are allowing (an exaggerated) up to 2 seconds
		 * for the device to respond.
		 *
		 * 2. This type of the line is called "Assertion". In this case the subject of this assertion
		 * is the "view element" - a piece of the app's layout. In Suitest you store your view elements
		 * in an " Element repository" or you can pass selector to element chain.
		 *
		 */
		await assert.element('image (candies) focused').matches([
			PROP.BG_COLOR,
			PROP.BORDER_COLOR,
			PROP.BORDER_STYLE,
			PROP.CLASS,
			PROP.HREF,
			PROP.ID,
			PROP.IMAGE,
			PROP.LEFT,
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.Z_INDEX,
		]).timeout(2000);
		/**
		 * The previous line has made sure that the focus is on the first item in our list.
		 * Pressing OK on that item should open the image gallery, let's try that this really works.
		 * We will reuse the knowledge from the previous step.
		 */
		await assert.press(VRC.ENTER);
		await assert.element(imageCandiesInGallery).matches({
			[PROP.BG_COLOR]: 'rgba(0, 0, 0, 0)',
			[PROP.IMAGE]: './api/image/6210d214-89b9-4ea6-8150-815760d695b5-093FD491'
		}).timeout(2000);
		/**
		 * This is enough for one test, be sure to check the other test examples. It is always a good idea to keep your test cases
		 * as simple as possible. Ideally any test scenario should not be longer than 30 test lines (50 is an extreme case).
		 * Another important rule is to have every scenario test a *single* thing. If you need to test two different
		 * things make two different scenarios.
		 *
		 * Generally your test cases should be of the 2 types:
		 *
		 * a) a "Feature test" - a scenario that verifies that a particular aspect of the apps feature works.
		 * b) a "User journey test" - a scenario that verifies that the user can do a particular thing in the app.
		 *
		 * We recommend that you follow the above rules with both of these scenario types.
		 *
		 */
	});
});
