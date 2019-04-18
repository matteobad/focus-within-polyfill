const path = require('path')
const webpackMerge = require("webpack-merge");

const modeConfig = mode => require(`./webpack.${mode}.js`)

const config = {
	module: {
		rules: []
	}
}

module.exports = (env, argv) => {
	return webpackMerge(
		config, {
			name: 'focus-within-polyfill',
			entry: {
				['focus-within-polyfill']: path.resolve('./src/focus-within-polyfill.js')
			},
			output: {
				path: path.resolve(__dirname, 'dist'),
				filename: '[name].js'
			},
		},
		modeConfig(argv.mode)
	)
}
