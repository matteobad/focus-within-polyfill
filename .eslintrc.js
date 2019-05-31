module.exports = {
    "env": {
		"browser": true,
		"jest/globals": true,
        "es6": true,
        "node": true,
    },
    "extends": "standard",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
	},
	"plugins": ["jest"],
    "rules": {
		"indent": ["error", "tab"],
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
		"no-tabs": "off",
    }
};
