/**
 * Check for :focus-within pseudo class support
 * @returns {Boolean}
 */
export function supportsPseudo() {
	try {
		document.querySelector(':focus-within')
		console.info(':focus-within supported')
		return true
	} catch (error) {
		console.info(':focus-within not supported')
		return false
	}
}
