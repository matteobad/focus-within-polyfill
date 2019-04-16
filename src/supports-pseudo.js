/**
 * Test for pseudo-class support
 *
 * @param  {String} pseudoClass The pseudo-class
 * @return {Boolean} Returns true if supported
 */
const supportsPseudo = (pseudoClass) => {

	// Get the document stylesheet
	let styleSheets = document.styleSheets[0]

	// Create a stylesheet if one doesn't exist
	if (!styleSheets) {
		const el = document.createElement('style')
		document.head.appendChild(el)
		styleSheets = document.styleSheets[0]
		document.head.removeChild(el)
	}

	// Test the pseudo-class by trying to style with it
	try {
		if (!(/^:/).test(pseudoClass)) {
			pseudoClass = ':' + pseudoClass
		}
		styleSheets.insertRule('html' + pseudoClass + '{}', 0)
		styleSheets.deleteRule(0)
		return true

	} catch(e) {
		return false
	}

}

export default supportsPseudo
