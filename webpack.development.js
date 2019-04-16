const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
	devtool: 'source-map',
	watch: false,
	watchOptions: {
		ignored: '/(node_modules|bower_components)/'
	},
	plugins: [
		new CleanWebpackPlugin(),
	]
}

module.exports = config
