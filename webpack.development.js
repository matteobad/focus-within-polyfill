const config = {
	devtool: "source-map",
	target: "web",
	stats: "minimal",
	watch: true,
	watchOptions: {
		ignored: "/(node_modules|bower_components)/"
	}
};

module.exports = config;
