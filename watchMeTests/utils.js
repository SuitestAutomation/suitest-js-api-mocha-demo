const suitest = require('suitest-js-api');

/**
 * Convert element definition to Suitest Element Chain
 * @param {{selector: Object|string, props: Object}} el - element definition
 * @returns {ElementChain}
 */

const element = el =>
	suitest.element(el.selector);

/**
 * Convert element definition to Suitest Element Assert Chain
 * @param el - element definition
 * @returns {T}
 */
const assertElement = el => element(el).toAssert();

/**
 * Build a chain, that would check if element exactly
 *  matches it's snapshot
 *
 * @param {{selector: Object|string, props: Object}} el
 * @returns {ElementWithoutEvalChain}
 */
const snapshotElement = el => {
	const matcher = Array.isArray(el.props)
		? el.props
		: Object.getOwnPropertySymbols(el.props)
			.map(prop => ({
				name: prop,
				val: el.props[prop]
			}))
			.reduce((acc, el) => acc.concat(el), []);

	debugger;
	return assertElement(el)
		.matches(matcher);
};

module.exports = {
	assertElement,
	snapshotElement
};
