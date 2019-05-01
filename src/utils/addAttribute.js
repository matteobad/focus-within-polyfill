/**
 * Add user defined attribute to element retaining any previously applied attributes.
 * Attribute can be 'class'.
 *
 * @param {Element} element
 * @param {String} name
 * @param {String} value
 */
function addAttribute (element, name, value) {
	var appliedAttributes = element.getAttribute(name) || ''

	if (appliedAttributes.indexOf(value) === -1) {
		appliedAttributes = (appliedAttributes + ' ' + value).trim()
		element.setAttribute(name, appliedAttributes)
	}
}

export default addAttribute
