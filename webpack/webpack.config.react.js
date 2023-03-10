const path = require('path');

module.exports = ({ __dirname, isDevelopment = true, overrides = {} }) => {
  const nodeModulesPath = path.join(__dirname, '/node-modules');

  return {
    entry: path.join(__dirname, '/src', 'index.tsx'),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: nodeModulesPath,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.jsx?$/,
          exclude: nodeModulesPath,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          exclude: nodeModulesPath,
          use: [
            { loader: 'style-loader', options: { injectType: 'linkTag' } },
            { loader: 'file-loader' },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
      alias: {
        '@features': path.resolve(__dirname, 'src/features'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@lib': path.resolve(__dirname, 'src/lib'),
      },
    },
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: {
      port: 3000,
      client: {
        progress: true,
      },
      compress: false,
      historyApiFallback: { index: '/' },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.bundle.js',
    },
    ...overrides
  }
};
