import { supportsFocusWithin, validClassName } from './utils'

var focusWithinClass, loaded

/**
 * Update focus-within class on focus and blur events
 * @param {FocusEvent} e
 */
function update(e) {
	var element, running

	var action = function() {
		element = document.activeElement
		running = false

		Array.prototype.slice
			.call(document.getElementsByClassName(focusWithinClass))
			.forEach(function(el) { el.classList.remove(focusWithinClass) })

		if (e.type === 'focus' && element && element !== document.body)
			for (var el = element; el && el.nodeType === 1; el = el.parentNode)
				el.classList.add(focusWithinClass)
	}

	if (!running) {
		window.requestAnimationFrame(action)
		running = true
	}
}

/**
 * Load polyfill
 * @param {String} className
 * @returns {void}
 */
export function loadPolyfill(className) {
	focusWithinClass = className || 'focus-within'
	if (!validClassName(focusWithinClass)) {
		console.warn('focus-within-polyfill: cannot load. ' + focusWithinClass + ' is not a valid class name')
		return
	}

	if (!loaded && !supportsFocusWithin()) {
		document.addEventListener('focus', update, true)
		document.addEventListener('blur', update, true)
		loaded = true
		console.info('focus-within-polyfill: loaded.')
	}
}

/**
 * Unload polyfill
 * @returns {void}
 */
export function unloadPolyfill() {
	if (!loaded) {
		console.warn('focus-within-polyfill: cannot unload. Polyfill was never loaded.')
		return
	}

	document.removeEventListener('focus', update, true)
	document.removeEventListener('blur', update, true)
	loaded = false
	console.info('focus-within-polyfill: unloaded.')
}
