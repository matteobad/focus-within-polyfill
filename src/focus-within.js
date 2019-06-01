/**
 * :focus-within Polyfill
 *
 * @param {String} selector
 * @returns {Boolean}
 */
function polyfill (selector) {
	var attrName, attrValue, activeElement, lastActiveElement

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

	/**
	 * Attach event listerns to initiate polyfill
	 */
	function attachListeners () {
		document.addEventListener('focus', handler, true)
		document.addEventListener('blur', handler, true)
	}

	try {
		document.querySelector(':focus-within')
		if (window.forceFocusWithinPolyfill) {
			attachListeners()
		}
	} catch (error) {
		attachListeners()
	}
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
	module.exports = {
		polyfill: polyfill
	}
} else {
	polyfill()
}
