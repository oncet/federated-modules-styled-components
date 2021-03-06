const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'foo',
      filename: 'remoteEntry.js',
      exposes: {
        './Foo': './src/App',
      },
      shared: [{ react: { singleton: true } }, 'styled-components'],
    }),
  ],
};
