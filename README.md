# `:focus-within` Pseudo-Class Polyfill

[![npm version](https://badge.fury.io/js/focus-within-polyfill.svg)](https://badge.fury.io/js/focus-within-polyfill) [![Build Status](https://travis-ci.org/matteobad/focus-within-polyfill.svg?branch=master)](https://travis-ci.org/matteobad/focus-within-polyfill/)

* [How to use](#hot-to-use)
* [Browser support](#browser-support)
* [:focus-within MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

The `:focus-within` CSS pseudo-class represents an element that has received focus or contains an element that has received focus. In other words, it represents an element that is itself matched by the :focus pseudo-class or has a descendant that is matched by :focus.

More information on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within).

## How to use

This package is available both as production ready script and as a package. The script can be downloaded [here](https://unpkg.com/focus-within-polyfill/dist/focus-within.min.js), or installed with a package manager.

```sh
# npm
npm install focus-within-polyfill --save

# yarn
yarn add focus-within-polyfill
```

When the polyfill is included via a script tag it will create a `focusWithin` object with a `loadPolyfill` and a `unloadPolyfill` method to initialize the code. On the other hand when imported as a dependency the same methods are exposed.

```javascript
/* ES6 */
import { laodPolyfill, unloadPolyfill } from 'focus-within-polyfill'

loadPolyfill() 		// load polyfill
unloadPolyfill()	// unload polyfill


/* ES5 */
<script src='path/to/focus-within-polyfill.js'></script>

focusWithin.laodPolyfill()		// load polyfill
focusWithin.unloadPolyfill() 	// unload polyfill
```

## Browser Support

* _Natively supported in Chrome_
* _Natively supported in Firefox_
* _Natively supported in Safari_
* _Natively supported in Opera_
* IE 11
* Edge
