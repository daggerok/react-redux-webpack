const
  webpack = require('webpack'),
  cssnano = require('cssnano'),
  ExtractPlugin = require('extract-text-webpack-plugin'),
  webpackConfig = require('./webpack.config');

delete webpackConfig.entry.test;

webpackConfig.output.filename = '/[name].[hash].js';

webpackConfig.devtool = 'source-map';

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
  mangle: false,
  sourcemap: true,
  compress: { warnings: false }
}));

webpackConfig.plugins.push(new webpack.DefinePlugin({
  // Lots of library source code (like React) are based on process.env.NODE_ENV
  // (all development related code is wrapped inside a conditional that can be dropped if equal to "production"
  // this way you get your own react.min.js build)
  'process.env': { 'NODE_ENV': JSON.stringify('production') }
}));

// webpackConfig.plugins.push(new ExtractPlugin('/app.[hash].css'));

webpackConfig.postcss = () => webpackConfig.postcss().push(cssnano);

module.exports = webpackConfig;
