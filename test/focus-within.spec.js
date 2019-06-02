import FocusWithin from '../src/focus-within.js';

test('Should be available as method', () => {
  expect(typeof FocusWithin.polyfill).toBe('function');
});

// it('Should load polyfill only if not supported', t => {
//  // TODO mock unsupported browser case
//  polyfill.polyfill()
//  expect(window.FocusWithin).toBeDefined()
// })

// it('Should not load polyfill if already supported', t => {
//  polyfill.polyfill()
//  expect(window.FocusWithin).toBeUndefined()
// })
