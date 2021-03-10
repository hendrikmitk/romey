module.exports = {
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'romey | discover the unkown';
			return args;
		});
	}
};
