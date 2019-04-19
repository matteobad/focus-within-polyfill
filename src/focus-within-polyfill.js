!(function focusWithinPolyfill(window, document) {
	"use strict";

	/**
	 * Update focus-within class on focus and blur events
	 * @param {FocusEvent} e
	 */
	function update(e) {
		var el, element, running;

		var action = function() {
			element = document.activeElement;
			running = false;

			Array.prototype.slice
				.call(document.getElementsByClassName("focus-within"))
				.forEach(el => el.classList.remove("focus-within"));

			if (e.type === "focus" && element && element !== document.body)
				for (el = element; el && el.nodeType === 1; el = el.parentNode)
					el.classList.add("focus-within");
		};

		if (!running) {
			window.requestAnimationFrame(action);
			running = true;
		}
	}

	try {
		document.querySelector(":focus-within");
		console.info(":focus-within pseudo class already supported.");
	} catch (error) {
		document.addEventListener("focus", update, true);
		document.addEventListener("blur", update, true);
		console.info(":focus-within pseudo class polyfilled.");
	}
})(window, document);
