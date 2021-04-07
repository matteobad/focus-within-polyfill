
/**
 * Applies the :focus-within polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @return {boolean}
 * @see https://github.com/matteobad/focus-within-polyfill
 */
function applyFocusWithinPolyfill(scope) {
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

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', handler, true);
    scope.addEventListener('blur', handler, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only
    // cared about the native implementation, we could just check if the scope
    // was an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
      scope.host.setAttribute('data-js-focus-within', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      addClass('js-focus-within')(document.documentElement);
      document.documentElement.setAttribute('data-js-focus-within', '');
    }

    return true;
  }

  try {
    return typeof window !== 'undefined' &&
      !document.querySelector(':' + CLASS_NAME);
  } catch (error) {
    return load();
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;

  try {
    event = new CustomEvent('focus-within-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-within-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusWithinPolyfill(document);
}
