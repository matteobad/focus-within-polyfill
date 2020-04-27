# `:focus-within` Pseudo-Class Polyfill &nbsp; [![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X81MJAP)

[![npm version](https://badge.fury.io/js/focus-within-polyfill.svg)](https://badge.fury.io/js/focus-within-polyfill) [![Build Status](https://travis-ci.org/matteobad/focus-within-polyfill.svg?branch=master)](https://travis-ci.org/matteobad/focus-within-polyfill/) ![David](https://img.shields.io/david/dev/matteobad/focus-within-polyfill.svg) ![David](https://img.shields.io/david/matteobad/focus-within-polyfill.svg) [![Greenkeeper badge](https://badges.greenkeeper.io/matteobad/focus-within-polyfill.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-blue.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

* [How to use](#how-to-use)
* [How it works](#how-it-works)
* [Features](#features)
* [Browser support](#browser-support)
* [Demo](https://matteobad.github.io/focus-within-polyfill)

---

**Find this usefull? ☕ [Buy me a coffee!](https://ko-fi.com/matteobad)**

---

The `:focus-within` CSS pseudo-class represents an element that has received focus or contains an element that has received focus. In other words, it represents an element that is itself matched by the :focus pseudo-class or has a descendant that is matched by `:focus` (This includes descendants in shadow trees).

This selector is useful, to take a common example, for highlighting an entire `<form>` container when the user focuses on one of its `<input>` fields.

More information on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within).

## ✏️ How to use

This package is available both as production ready script and as a package. The script can be downloaded [here](https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js), or installed with a package manager.

```sh
# npm
npm install focus-within-polyfill --save

# yarn
yarn add focus-within-polyfill
```

When included the polyfill will auto-initialize.

```javascript
/* ES5 */
<script src='https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'></script>
```

In addition this library is available as a es6 module that can be imported and bundled up with any build tool. If you are importing it as a dependency, make sure to call the polyfill method:

```javascript
/* ES6 */
import 'focus-within-polyfill'
```

After import and initialization the polyfill will kick in **only** if `:focus-within` is not supported in the current browser. By default the `.focus-within` class will be added automatically to every element that should have the pseudo-class. Additionally in the initialization fase a `.js-focus-within` class will be appended to the body.

## 📃 How it works

This package will add two event listeners, one on the *focus* event and one on the *blur* event to trigger the automatic apply and remove of a custom attribute to indicate wheter the Element should have a `:focus-within` pseudo-class. In order to do so and be compatible with older version of IE and EDGE the `getAttribute`, `setAttribute` and `removeAttribute` methods are used to set both attributes and classes. Then `requestAnimationFrame` is used to apply the modification to the DOM.

This polyfill is compatible with native [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom#what) and with the [webcomponents polyfill](https://www.webcomponents.org/polyfills/). This means that even on IE11 and EDGE you will be able to use the `:focus-within` pseudo-class to style elements even outside a shadowRoot.

## ⭕ Features

* _Custom attribute/class_ value to apply the polyfill
* _Shady CSS/DOM_ support even with the [webcomponents polyfill](https://www.webcomponents.org/polyfills/)
* _Non standard Element_ support, like SVG Element with link inside

## ✔️ Browser Support

| Polyfill        | Edge | IE11+ | Chrome | Firefox | Safari |
| --------------- |:----:|:-----:|:------:|:-------:|:------:|
| `:focus-within` | ✓    | ✓     | ✓      | ✓       | ✓      |

\* This polyfill maybe work on older versions of the browsers.

## 📺 Demos

The [demos](https://github.com/matteobad/focus-within-polyfill/tree/master/demos) folder contains 10+ demos that uses this polyfill.

| Type      | Title                                                | Code                                | Live demo                                                                           |
| --------- | ---------------------------------------------------- | ------------------------------------|------------------------------------------------------------------------------------ |
| Content   | :focus-within for `<button>` elements                | [Code](demos/buttons.html)          | [Live](https://matteobad.github.io/focus-within-polyfill/demos/buttons.html)        |
| Content   | :focus-within for `<input type="radio">` elements    | [Code](demos/radios.html)           | [Live](https://matteobad.github.io/focus-within-polyfill/demos/radios.html)         |
| Content   | :focus-within for `<input type="checkbox">` elements | [Code](demos/checkboxes.html)       | [Live](https://matteobad.github.io/focus-within-polyfill/demos/checkboxes.html)     |
| Content   | :focus-within for `<div contenteditable>` elements   | [Code](demos/editable-text.html)    | [Live](https://matteobad.github.io/focus-within-polyfill/demos/editable-text.html)  |
| Content   | :focus-within for `<div tabindex>` elements          | [Code](demos/focusable-divs.html)   | [Live](https://matteobad.github.io/focus-within-polyfill/demos/focusable-divs.html) |
| Content   | :focus-within for `<select>` elements                | [Code](demos/select.html)           | [Live](https://matteobad.github.io/focus-within-polyfill/demos/select.html)         |
| Content   | :focus-within for `<svg>` elements                   | [Code](demos/svg.html)              | [Live](https://matteobad.github.io/focus-within-polyfill/demos/svg.html)            |
| Content   | :focus-within for `<web-components>` elements        | [Code](demos/web-components.html)   | [Live](https://matteobad.github.io/focus-within-polyfill/demos/web-components.html) |
| Content   | :focus-within for other elements                     | [Code](demos/others.html)           | [Live](https://matteobad.github.io/focus-within-polyfill/demos/others.html)         |
