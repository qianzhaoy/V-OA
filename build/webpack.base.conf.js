var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vuxLoader = require('vux-loader')
var vueLoaderConfig = require('./vue-loader.conf')


function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
var webpackConfig = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		}
	},
	externals: {
		'zepto': 'Zepto',
		'wx': 'jWeixin'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
      },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
      },
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
      },
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
      }]
	}
}

module.exports = vuxLoader.merge(webpackConfig, {
	options: {},
	plugins: [{
			name: 'vux-ui'
    }, {
			name: 'duplicate-style'
		}, {
			name: 'less-theme',
			path: './src/assets/css/myTheme.less'
		}]
})
