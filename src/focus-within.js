import supportsFocusWithin from './utils/supportsFocusWithin'
import addAttribute from './utils/addAttribute'
import removeAttribute from './utils/removeAttribute'

/**
 * Load polyfill and return loading state boolean
 *
 * @param {String} selector
 * @returns {Boolean}
 * @throws {TypeError}
 */
function polyfill (selector) {
	if (selector) {
		// check if selector is a string
		if (typeof selector !== 'string') {
			throw new TypeError(`Failed to execute '${this.name}' on 'FocusWithin': parameter 1 ('selector') is not a string.')`)
		}

		// check if selector is class or attribute
		if (selector.charAt(0) !== '.' && (selector.charAt(0) !== '[' && selector.charAt(selector.length - 1) !== ']')) {
			throw new TypeError(`Failed to execute '${this.name}' on 'FocusWithin': parameter 1 ('selector') is not a valid selector.')`)
		}

		// check if valid selector
		try {
			document.querySelector(selector)
		} catch (error) {
			throw new TypeError(`Failed to execute '${this.name}' on 'FocusWithin': parameter 1 ('selector') is not a valid selector.')`)
		}
	}

	var attributeName, attributeValue, isClass, loaded

	selector = selector || '[focus-within]'
	isClass = selector.indexOf('.') === 0
	attributeName = !isClass ? selector.replace(/[[\]']+/g, '') : 'class'
	attributeValue = !isClass ? attributeName : selector.replace('.', '')

	/**
	 * - Remove all applied attributes and
	 * - Add new attributes based on activeElement
	 *
	 * @param {FocusEvent} e
	 */
	var handler = function (e) {
		var element, running

		var _action = function () {
			element = document.activeElement
			running = false

			Array.prototype.slice
				.call(document.querySelectorAll(selector))
				.forEach(function (el) { removeAttribute(el, attributeName, attributeValue) })

			if (e.type === 'focus' && element && element !== document.body) {
				for (var el = element; el && el.nodeType === 1; el = el.parentNode) {
					addAttribute(el, attributeName, attributeValue)
				}
			}
		}

		if (!running) {
			window.requestAnimationFrame(_action)
			running = true
		}
	}

	// kick off polyfill
	loaded = !supportsFocusWithin()
	if (loaded) {
		document.addEventListener('focus', handler, true)
		document.addEventListener('blur', handler, true)
	}

	return loaded
}

export default {
	polyfill: polyfill
}
