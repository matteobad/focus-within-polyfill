const path = require('path')
const webpackMerge = require("webpack-merge");

const modeConfig = mode => require(`./webpack.${mode}.js`)

const config = {
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel-loader',
			}
		]
	}
}

module.exports = (env, argv) => {
	return webpackMerge(
		config, {
			name: 'focus-within-polyfill',
			entry: './src/index.js',
			output: {
				path: path.resolve(__dirname, 'dist'),
				filename: "[name].js"
			},
		},
		modeConfig(argv.mode)
	)
}
