/**
 * Remove the given attribute value and if no other values are present
 * remove the attribute from the Element.
 * Attribute can be 'class'.
 *
 * @param {Element} element
 * @param {String} name
 * @param {String} value
 */
function removeAttribute (element, name, value) {
	var appliedAttributes = element.getAttribute(name) || ''

	if (appliedAttributes.indexOf(value) !== -1) {
		appliedAttributes = appliedAttributes.replace(value, '').trim()

		appliedAttributes !== ''
			? element.setAttribute(name, appliedAttributes)
			: element.removeAttribute(name)
	}
}

export default removeAttribute
