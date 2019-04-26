/**
 * Check for :focus-within pseudo class support
 * @returns {Boolean}
 */
export function supportsFocusWithin() {
	try {
		document.querySelector(':focus-within')
		console.info('focus-within-polyfill: focus-within supported')
		return true
	} catch (error) {
		console.info('focus-within-polyfill: focus-within not supported')
		return false
	}
}

/**
 * Check wether the given string is a valid class name
 * @param {String} className
 * @returns {Boolean}
 */
export function validClassName(className) {
	if (typeof className !== 'string') {
		console.error('focus-within-polyfill:' + className + ' is not a string')
		return false
	}

	// @TODO find better way
	if (/[\s]/.test(className)) {
		console.error('focus-within-polyfill: class name ' + '"className"' + ' cannot contain white spaces.')
		return false
	}

	return /-?[_a-zA-Z]+[_-a-zA-Z0-9]*/.test(className)
}
