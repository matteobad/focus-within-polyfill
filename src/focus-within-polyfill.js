!function focusWithinPolyfill(window, document) {
	'use strict';

	var el, element, lastElement, running;

	function update() {
		if (!running) {
			window.requestAnimationFrame(action);
			running = true;
		}
	}

	function action() {
		element = document.activeElement;
		running = false;

		if (element !== lastElement) {
			for (el = lastElement; el && el.nodeType === 1; el = el.parentNode)
				el.classList.remove('focus-within');

			if (element && element.nodeName.toLowerCase() !== 'body')
				for (el = element; el && el.nodeType === 1; el = el.parentNode)
					el.classList.add('focus-within');

			lastElement = element;
		}
	}

	try {
		document.querySelector(':focus-within');
		console.info(':focus-within pseudo class already supported.');

	} catch (error) {
		document.addEventListener('focus', update, true);
		document.addEventListener('blur', update, true);
		console.info(':focus-within pseudo class polyfilled.');
	}

}(window, document);
