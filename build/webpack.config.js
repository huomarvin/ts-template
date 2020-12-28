const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

module.exports = merge(baseConfig, config);
