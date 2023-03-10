const getReactWebpackConfig = require('./webpack/webpack.config.react.js');
const prettierConfig = require('./prettier/.prettierrc.js');
const eslintConfigNode = require('./eslint/.eslintrc.node.js');

module.exports = {
  getReactWebpackConfig,
  prettierConfig,
  eslintConfigNode
}
