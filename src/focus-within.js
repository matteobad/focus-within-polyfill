/**
 * Load polyfill and return loading state boolean
 *
 * @param {String} selector
 * @returns {Boolean}
 * @throws {TypeError}
 */
function polyfill (selector) {
	var attrName, attrValue, activeElement, lastActiveElement

	// Sanity check
	if (selector) {
		// check if selector is a string
		if (typeof selector !== 'string') {
			throw new TypeError(
				'Failed to execute "polyfill" on "focusWithin":' +
				'parameter 1 ("selector") is not a string.')
		}

		// check if selector is class or attribute
		if (selector.charAt(0) !== '.' && (selector.charAt(0) !== '[' && selector.charAt(selector.length - 1) !== ']')) {
			throw new TypeError(
				'Failed to execute "polyfill" on "focusWithin":' +
				'parameter 1 ("selector") is not a valid selector.')
		}
		// check if valid selector
		try {
			document.querySelector(selector)
		} catch (error) {
			throw new TypeError(
				'Failed to execute "polyfill" on "focusWithin":' +
				'parameter 1 ("selector") is not a valid selector.')
		}
	}

	// Variables initialization
	selector = selector || '[focus-within]'
	selector = (selector.indexOf('.') !== 0)
		? (attrName = attrValue = selector.replace(/[[\]']+/g, ''))
		: (attrName = 'class', attrValue = selector.replace('.', ''))

	/**
	 * Find and return the current Element with focus.
	 * This will loop through shadow DOM.
	 *
	 * @returns {Element}
	 */
	function findActiveElement () {
		var activeEl = document.activeElement
		while (activeEl && activeEl.shadowRoot && activeEl.shadowRoot.activeElement) {
			activeEl = activeEl.shadowRoot.activeElement
		}
		return activeEl
	}

	/**
	 * Create and return the event path from root to element.
	 * The computed path includes element inside a shadowRoot.
	 *
	 * @param {Element} el
	 * @returns {Array}
	 */
	function computeEventPath (el) {
		var path = []
		while (el && (el.nodeType === 1 || el.nodeType === 11)) {
			if (el.nodeType !== 11) {
				path.push(el)
				el = el.parentNode
			} else {
				el = el.host
			}
		}
		return path
	}

	/**
	 * Add user defined attribute to element retaining any previously applied attributes.
	 * Attribute can be the 'class' attribute for compatibility reasons.
	 *
	 * @param {String} name
	 * @param {String} value
	 */
	function addAttribute (name, value) {
		return function (el) {
			var attributes = el.getAttribute(name) || ''
			if (attributes.indexOf(value) === -1) {
				var newAttributes = (attributes + ' ' + value).trim()
				el.setAttribute(name, newAttributes)
			}
		}
	}

	/**
	 * Remove user defined attribute value or entire attribute if last one.
	 * Attribute can be the 'class' attribute for compatibility reasons.
	 *
	 * @param {String} name
	 * @param {String} value
	 */
	function removeAttribute (name, value) {
		return function (el) {
			var attributes = el.getAttribute(name) || ''
			if (attributes.indexOf(value) !== -1) {
				var newAttributes = attributes.replace(value, '').trim()
				if (newAttributes === '') el.removeAttribute(name)
				else el.setAttribute(name, newAttributes)
			}
		}
	}

	/**
	 * Use rAF to remove and apply custom attribute on FocusEvent.
	 *
	 * @param {FocusEvent} e
	 */
	function handler (e) {
		var running
		activeElement = findActiveElement()

		function action () {
			running = false

			Array.prototype.slice
				.call(computeEventPath(lastActiveElement))
				.forEach(removeAttribute(attrName, attrValue))

			lastActiveElement = activeElement
			if (e.type !== 'focus' || !activeElement) return

			Array.prototype.slice
				.call(computeEventPath(activeElement))
				.forEach(addAttribute(attrName, attrValue))
		}

		if (!running) {
			window.requestAnimationFrame(action)
			running = true
		}
	}

	try {
		document.querySelector(':focus-within')
		return true
	} catch (error) {
		document.addEventListener('focus', handler, true)
		document.addEventListener('blur', handler, true)
		return false
	}
}

export default {
	polyfill: polyfill
}
