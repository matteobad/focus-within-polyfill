/**
 * :focus-within Polyfill
 * @return {boolean}
 */
function polyfill() {
  /** @const */ var CLASS_NAME = 'focus-within';
  /** @const */ var WHITE_SPACE = ['\n', '\t', ' ', '\r'];

  /**
   * Calculate the entire event path.
   *
   * @param {Element} node
   * @return {Array} computedPath
   */
  function computeEventPath(node) {
    var path = [node];
    var parent = null;

    while ((parent = node.parentNode || node.host || node.defaultView)) {
      path.push(parent);
      node = parent;
    }

    return path;
  }

  /**
   * Add user defined attribute to element retaining any previously
   * applied attributes. Attribute can be the 'class' attribute for
   * compatibility reasons.
   *
   * @param {string} value
   * @return {function(Element)} callback
   */
  function addClass(value) {
    return function(el) {
      var attributes =
        typeof el.getAttribute !== 'undefined' ?
          el.getAttribute('class') || '' :
          undefined;

      if (
        typeof attributes !== 'undefined' &&
        attributes.indexOf(value) === -1
      ) {
        el.setAttribute('class', attributes.concat(' ', value).trim());
      }
    };
  }

  /**
   * Remove user defined attribute value or entire attribute if last one.
   * Attribute can be the 'class' attribute for compatibility reasons.
   *
   * @param {string} value
   * @return {function(Element)} callback
   */
  function removeClass(value) {
    return function(el) {
      var attributes =
        typeof el.getAttribute !== 'undefined' ?
          el.getAttribute('class') || '' :
          undefined;

      if (attributes) {
        var index = attributes.indexOf(value);
        // Check if `value` exists in `attributes` and it is either
        // at the start or after a whitespace character. This stops
        // "focus-within" being remove from "js-focus-within".
        if (
          index >= 0 &&
          (index === 0 ||
            WHITE_SPACE.indexOf(attributes.charAt(index - 1)) >= 0)
        ) {
          var newAttributes = attributes.replace(value, '').trim();
          newAttributes === '' ?
            el.removeAttribute('class') :
            el.setAttribute('class', newAttributes);
        }
      }
    };
  }

  /**
   * Attach event listerns to initiate polyfill
   * @return {boolean}
   */
  function load() {
    var handler = function(e) {
      var running;

      /**
       * Request animation frame callback.
       * Remove previously applied attributes.
       * Add new attributes.
       */
      function action() {
        running = false;

        if ('blur' === e.type) {
          Array.prototype.slice
              .call(computeEventPath(e.target))
              .forEach(removeClass(CLASS_NAME));
        }

        if ('focus' === e.type) {
          Array.prototype.slice
              .call(computeEventPath(e.target))
              .forEach(addClass(CLASS_NAME));
        }
      }

      if (!running) {
        window.requestAnimationFrame(action);
        running = true;
      }
    };

    document.addEventListener('focus', handler, true);
    document.addEventListener('blur', handler, true);
    addClass('js-focus-within')(document.body);
    return true;
  }

  try {
    return typeof window !== 'undefined' &&
      !document.querySelector(':' + CLASS_NAME);
  } catch (error) {
    return load();
  }
}

polyfill();
