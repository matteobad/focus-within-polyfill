import supportsPseudo from './supports-pseudo'

(function() {
	const FOCUS_WITHIN = 'focus-within'

	// polyfill if browser doesn not support :focus-within
	if (!supportsPseudo(FOCUS_WITHIN + '()')) {
		document.addEventListener('focus', update, true)
		document.addEventListener('blur', update, true)
	}

	/**
	 * Add [focus-within] attribute
	 * @param {Element} element
	 */
	const attachNewFocusWithin = (element) => {
		for (let el = element; el; el = el.parentNode) {
			el.setAttribute(FOCUS_WITHIN)
		}
	}

	/**
	 * Remove [focus-within] attribute
	 * @param {Element} element
	 */
	const removeOldFocusWithin = (element) => {
		for (let el = element; el; el = el.parentNode) {
			el.removeAttribute(FOCUS_WITHIN)
		}
	}

	/**
	 * Setup [focus-within] attribute on focus/blur events
	 */
	const update = () => {
		let running, lastElement

		const action = () => {
			const element = document.activeElement
			running = false

			if (lastElement !== element) {
				removeOldFocusWithin(lastElement)
				attachNewFocusWithin(element)
				lastElement = element
			}
		}

		return () => {
			if (!running) {
				requestAnimationFrame(action)
				running = true
			}
		}
	}

})()
