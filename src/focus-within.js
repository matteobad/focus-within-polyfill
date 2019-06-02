/**
 * :focus-within Polyfill
 *
 * @param {string|null} selector
 */
function polyfill(selector) {
  let attrName; let attrValue; let activeElement; let lastActiveElement;

  // Variables initialization
  selector = selector || '[focus-within]';
  selector = (selector.indexOf('.') !== 0)
    ? (attrName = attrValue = selector.replace(/[[\]']+/g, ''))
    : (attrName = 'class', attrValue = selector.replace('.', ''));

  /**
   * Find and return the current Element with focus.
   * This will loop through shadow DOM.
   *
   * @return {Element}
   */
  function findActiveElement() {
    let el = document.activeElement;
    while (el && el.shadowRoot && el.shadowRoot.activeElement) {
      el = el.shadowRoot.activeElement;
    }
    return el;
  }

  /**
   * Create and return the event path from root to element.
   * The computed path includes element inside a shadowRoot.
   *
   * @param {Element} el
   * @return {Array}
   */
  function computeEventPath(el) {
    const path = [];
    while (el && (el.nodeType === 1 || el.nodeType === 11)) {
      if (el.nodeType !== 11) {
        path.push(el);
        el = el.parentNode;
      } else {
        el = el.host;
      }
    }
    return path;
  }

  /**
   * Add user defined attribute to element retaining any previously
   * applied attributes. Attribute can be the 'class' attribute for
   * compatibility reasons.
   *
   * @param {string} name
   * @param {string} value
   * @return {function} callback
   */
  function addAttribute(name, value) {
    return function(el) {
      const attributes = el.getAttribute(name) || '';
      if (attributes.indexOf(value) === -1) {
        const newAttributes = (attributes + ' ' + value).trim();
        el.setAttribute(name, newAttributes);
      }
    };
  }

  /**
   * Remove user defined attribute value or entire attribute if last one.
   * Attribute can be the 'class' attribute for compatibility reasons.
   *
   * @param {string} name
   * @param {string} value
   * @return {function} callback
   */
  function removeAttribute(name, value) {
    return function(el) {
      const attributes = el.getAttribute(name) || '';
      if (attributes.indexOf(value) !== -1) {
        const newAttributes = attributes.replace(value, '').trim();
        if (newAttributes === '') el.removeAttribute(name);
        else el.setAttribute(name, newAttributes);
      }
    };
  }

  /**
   * Attach event listerns to initiate polyfill
   */
  function attachListeners() {
    const handler = function(e) {
      let running;
      activeElement = findActiveElement();

      /**
       * Request animation frame callback.
       * Remove previously applied attributes.
       * Add new attributes.
       */
      function action() {
        running = false;

        Array.prototype.slice
            .call(computeEventPath(lastActiveElement))
            .forEach(removeAttribute(attrName, attrValue));

        lastActiveElement = activeElement;
        if (e.type !== 'focus' || !activeElement) return;

        Array.prototype.slice
            .call(computeEventPath(activeElement))
            .forEach(addAttribute(attrName, attrValue));
      }

      if (!running) {
        window.requestAnimationFrame(action);
        running = true;
      }
    };

    document.addEventListener('focus', handler, true);
    document.addEventListener('blur', handler, true);
  }

  try {
    document.querySelector(':focus-within');
    if (window.forceFocusWithinPolyfill) {
      attachListeners();
    }
  } catch (error) {
    attachListeners();
  }
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  module.exports = {
    polyfill: polyfill,
  };
} else {
  polyfill(null);
}
