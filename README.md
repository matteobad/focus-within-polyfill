# `:focus-within` Pseudo-Class Polyfill

[![npm version](https://badge.fury.io/js/focus-within-polyfill.svg)](https://badge.fury.io/js/focus-within-polyfill) [![Build Status](https://travis-ci.org/matteobad/focus-within-polyfill.svg?branch=master)](https://travis-ci.org/matteobad/focus-within-polyfill/)

* [How to use](#hot-to-use)
* [Browser support](#browser-support)
* [:focus-within MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

The `:focus-within` CSS pseudo-class represents an element that has received focus or contains an element that has received focus. In other words, it represents an element that is itself matched by the :focus pseudo-class or has a descendant that is matched by :focus.

More information on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within).

## How to use

This package is available both as production ready script and as a package. The script can be downloaded [here](https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js), or installed with a package manager.

```sh
# npm
npm install focus-within-polyfill --save

# yarn
yarn add focus-within-polyfill
```

When the polyfill is included via a script tag it will create a `focusWithin` object with `loadPolyfill(string)` and `unloadPolyfill()` methods to initialize and removed the polyfill. In addition this library is available as a es6 module that can be imported and bundled up with any build tools.

After import and initialization the polyfill will kick in *only* if `:focus-within` is not supported in the current context. The `.focus-within` class will be added to every element that should have the pseudo-class as needed. Additionally in the initialization fase a custom class can be specified like in the example below.

```javascript
/* ES6 */
import { laodPolyfill, unloadPolyfill } from 'focus-within-polyfill'

loadPolyfill('my--class') 		// load polyfill
unloadPolyfill()				// unload polyfill


/* ES5 */
<script src='path/to/focus-within-polyfill.js'></script>

focusWithin.loadPolyfill()		// load polyfill
focusWithin.unloadPolyfill() 	// unload polyfill
```

## Browser Support

* _Natively supported in Chrome_
* _Natively supported in Firefox_
* _Natively supported in Safari_
* _Natively supported in Opera_
* IE 10+
* Edge
