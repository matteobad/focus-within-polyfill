!function focusWithinPolyfill(window, document) {
	'use strict';

	var running, last, element;

	function update() {
		if (!running) {
			window.requestAnimationFrame(action);
			running = true;
		}
	}

	function action() {
		element = document.activeElement;
		running = false;

		if (element !== last) {
			for (let el = last; el && el.nodeType === 1; el = el.parentNode) {
				el.classList.remove('focus-within')
			}

			for (let el = element; el && el.nodeType === 1; el = el.parentNode) {
				el.classList.add('focus-within')
			}

			last = element;
		}
	}

	try {
		document.querySelector(':focus-within');

	} catch (error) {
		document.addEventListener('focus', update, true);
		document.addEventListener('blur', update, true);
	}

}(window, document);
