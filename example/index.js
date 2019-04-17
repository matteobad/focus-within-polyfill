(function() {

	const prepareDom = function () {
		let counter = 0;
		let max = 1000;

		const recursAppend = function (el) {
			if (counter === max) return false;
			let newEl = document.createElement(counter === max - 1 ? 'input' : 'div');
			el.appendChild(newEl);
			counter++;
			recursAppend(newEl);
		};

		let mainSection = document.getElementById('main');
		recursAppend(mainSection);
	};

	prepareDom();

})()
