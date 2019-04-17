(function(window, document) {
	'use strict';

	var update = (function() {
		var running, last;

		var action = function() {
			var element = document.activeElement;
			running = false;

			if (last !== element) {
				for (let el = last; el && el.nodeType === 1; el = el.parentNode) {
					el.classList.remove('focus-within')
				}

				for (let el = element; el && el.nodeType === 1; el = el.parentNode) {
					el.classList.add('focus-within')
				}

				last = element;
			}
		};

		return function() {
			if (!running) {
				requestAnimationFrame(action);
				running = true;
			}
		};

	})();

	document.addEventListener('focus', update, true);
	document.addEventListener('blur', update, true);

})(window, document);
