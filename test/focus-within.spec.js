import FocusWithin from '../src/focus-within.js';

test('Should be available as method', () => {
  expect(typeof FocusWithin.polyfill).toBe('function');
});
