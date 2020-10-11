## 5.1.0 (2020-10-11)


### Features

* apply focus-within class to focused element too [#80](https://github.com/matteobad/focus-within-polyfill/issues/80)

## [5.0.9](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.8...v5.0.9) (2020-04-23)


### Bug Fixes

* check window exists [#73](https://github.com/matteobad/focus-within-polyfill/issues/73) ([3c5b142](https://github.com/matteobad/focus-within-polyfill/commit/3c5b1427c40c8d511c7b3bd4bef43d20d8d35b22))

## [5.0.8](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.7...v5.0.8) (2020-04-18)


### Bug Fixes

* add funding ([18d72f1](https://github.com/matteobad/focus-within-polyfill/commit/18d72f18c22377a35fac3756f1315e230b5639ba))

## [5.0.7](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.6...v5.0.7) (2020-04-11)


### Bug Fixes

* eslint ([0fa9cb7](https://github.com/matteobad/focus-within-polyfill/commit/0fa9cb707e04b2787c2489c19068fff05e36e887))
* update dependencies to remove vulnerabilities ([f49a048](https://github.com/matteobad/focus-within-polyfill/commit/f49a048fdd07fa0befa9ca9855fa5d3ac384df49))

## [5.0.6](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.5...v5.0.6) (2019-12-31)


### Bug Fixes

* how to use link ([221da0a](https://github.com/matteobad/focus-within-polyfill/commit/221da0a))

## [5.0.5](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.4...v5.0.5) (2019-10-31)


### Bug Fixes

* class not added to missing attribute ([4f91825](https://github.com/matteobad/focus-within-polyfill/commit/4f91825))
* js-focus-within being malformed on blur ([c9c86c6](https://github.com/matteobad/focus-within-polyfill/commit/c9c86c6))

## [5.0.4](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.3...v5.0.4) (2019-07-27)


### Bug Fixes

* travis config ([55e9570](https://github.com/matteobad/focus-within-polyfill/commit/55e9570))
* travis config ([2327c1c](https://github.com/matteobad/focus-within-polyfill/commit/2327c1c))

## [5.0.3](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.2...v5.0.3) (2019-07-16)


### Bug Fixes

* package.json script ([79eff96](https://github.com/matteobad/focus-within-polyfill/commit/79eff96))

## [5.0.2](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.1...v5.0.2) (2019-07-16)


### Bug Fixes

* travis config ([ed58044](https://github.com/matteobad/focus-within-polyfill/commit/ed58044))

## [5.0.1](https://github.com/matteobad/focus-within-polyfill/compare/v5.0.0...v5.0.1) (2019-07-16)


### Bug Fixes

* readme syntax ([8296a17](https://github.com/matteobad/focus-within-polyfill/commit/8296a17))

# [5.0.0](https://github.com/matteobad/focus-within-polyfill/compare/v4.1.0...v5.0.0) (2019-07-16)


### Bug Fixes

* travis ci execution ([e816e25](https://github.com/matteobad/focus-within-polyfill/commit/e816e25))


### chore

* update dev-dependencies ([3a715fc](https://github.com/matteobad/focus-within-polyfill/commit/3a715fc))


### Features

* add autoinitialization when load via script tag ([7c7cc1a](https://github.com/matteobad/focus-within-polyfill/commit/7c7cc1a))
* add force polyfill option ([1bb6ab2](https://github.com/matteobad/focus-within-polyfill/commit/1bb6ab2))


### Performance Improvements

* add google closure compiler to improve code optimization ([2e9bd92](https://github.com/matteobad/focus-within-polyfill/commit/2e9bd92))


### BREAKING CHANGES

* API changed. Now the polyfill only adds a .focus-within class to reduce complexity.
Following the focus-visible polyfill style.
* No need to call polyfill() to kick off when using via script tag

# [4.1.0](https://github.com/matteobad/focus-within-polyfill/compare/v4.0.0...v4.1.0) (2019-05-02)


### Features

* add support for shadow dom ([01707bf](https://github.com/matteobad/focus-within-polyfill/commit/01707bf))

# [4.0.0](https://github.com/matteobad/focus-within-polyfill/compare/v3.1.0...v4.0.0) (2019-05-01)


### Features

* add new option and polyfill with attribute ([0d8bfeb](https://github.com/matteobad/focus-within-polyfill/commit/0d8bfeb)), closes [#11](https://github.com/matteobad/focus-within-polyfill/issues/11)


### BREAKING CHANGES

* attributes support

# [3.1.0](https://github.com/matteobad/focus-within-polyfill/compare/v3.0.1...v3.1.0) (2019-04-26)


### Bug Fixes

* **travis:** Fix travis config ([95bf8fc](https://github.com/matteobad/focus-within-polyfill/commit/95bf8fc))


### Features

* semantic-release + commitizen ([33d529a](https://github.com/matteobad/focus-within-polyfill/commit/33d529a)), closes [#1](https://github.com/matteobad/focus-within-polyfill/issues/1)
