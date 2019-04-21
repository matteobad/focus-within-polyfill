const path = require("path");
const webpackMerge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const entry = {
	"focus-within-polyfill": path.resolve("./src/focus-within-polyfill.js"),
	"focus-within-polyfill.min": path.resolve("./src/focus-within-polyfill.js")
};

const output = {
	path: path.resolve(__dirname, "dist"),
	filename: "[name].js",
	library: "[name]",
	libraryTarget: "umd",
	umdNamedDefine: true
};

const loaders = {
	rules: [
		{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel-loader"
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "eslint-loader",
			options: {
				failOnError: true
			}
		}
	]
};

const stats = {
	all: false,
	modules: true,
	errors: true,
	warnings: true,
	colors: true
};

const plugins = [new CleanWebpackPlugin()];

module.exports = (env, argv) => {
	return webpackMerge(
		{
			name: "focus-within-polyfill",
			entry: entry,
			output: output,
			module: loaders,
			plugins: plugins,
			stats: stats
		},
		require(`./webpack.${argv.mode}.js`)
	);
};
