/**
 * Check for :focus-within pseudo class support
 * @returns {Boolean}
 */
function supportsFocusWithin () {
	try {
		document.querySelector(':focus-within')
		console.info('focus-within-polyfill: focus-within supported')
		return true
	} catch (error) {
		console.info('focus-within-polyfill: focus-within not supported')
		return false
	}
}

export default supportsFocusWithin
