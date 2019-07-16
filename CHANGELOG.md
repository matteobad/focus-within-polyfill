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
