# `:focus-within` Pseudo-Class Polyfill

[![npm version](https://badge.fury.io/js/focus-within-polyfill.svg)](https://badge.fury.io/js/focus-within-polyfill) [![Build Status](https://travis-ci.org/matteobad/focus-within-polyfill.svg?branch=master)](https://travis-ci.org/matteobad/focus-within-polyfill/) ![David](https://img.shields.io/david/dev/matteobad/focus-within-polyfill.svg) ![David](https://img.shields.io/david/matteobad/focus-within-polyfill.svg) [![Greenkeeper badge](https://badges.greenkeeper.io/matteobad/focus-within-polyfill.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-blue.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

* [How to use](#hot-to-use)
* [Notes](#notes)
* [Browser support](#browser-support)
* [`:focus-within`](#focus-within)

This package will add two event listeners, one on the *focus* event and one on the *blur* event to trigger the automatic apply and remove of a custom attribute to indicate wheter the Element should have a `:focus-within` pseudo-class. In order to do so and be compatible with older version of IE and Edge the `setAttribute` method is used to set both attributes and classes. This will prevent error like: *`classList` is undefined for SVG Element*.

## `:focus-within`

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

When including the polyfill in a script tag, call `window.focusWithin.polyfill(string)` method to initialize the polyfill:

```javascript
/* ES5 */
<script src='https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'></script>

focusWithin.polyfill()
```

In addition this library is available as a es6 module that can be imported and bundled up with any build tool. If you are importing it as a dependency, make sure to call the polyfill method:

```javascript
/* ES6 */
import focusWithin from 'focus-within-polyfill'

focusWithin.polyfill()
```

After import and initialization the polyfill will kick in **only** if `:focus-within` is not supported in the current browser. By default the `[focus-within]` attribute will be added automatically to every element that should have the pseudo-class. Additionally in the initialization fase a **custom class** or **custom attribute** can be specified like in the example below:

```javascript
focusWithin.polyfill('[focus-within]'); // default
focusWithin.polyfill('[focus-inside]'); // custom attribute
focusWithin.polyfill('.focus-within'); // custom class
```

## Notes

This polyfill does not support shadow DOM. The goal is to polyfill a feature that is missing in IE and EDGE and since shadow DOM is another feature that [needs polyfilling](https://caniuse.com/#feat=shadowdomv1) in this browser I won't implement such feature, but any PR is well accepted.

## Browser Support

* _Natively supported in Chrome_
* _Natively supported in Firefox_
* _Natively supported in Safari_
* _Natively supported in Opera_
* IE 10+
* Edge
