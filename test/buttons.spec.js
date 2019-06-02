const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(
    __dirname,
    '../demos/buttons.html'
), 'utf8');

jest.dontMock('fs');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
  // restore the original func after test
  jest.resetModules();
});

describe('button', () => {
  test('Standard button should exists', () => {
    const button = document.getElementById('button');
    expect(button).toBeTruthy();
  });
});
