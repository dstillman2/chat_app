const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

let plugins = [];

let filename = 'bundle.js';

const pluginsProd = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
];

const pluginsDev = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
];

if (isProduction) {
  plugins = plugins.concat(pluginsProd);
  filename = 'bundle.min.js';
} else {
  plugins = plugins.concat(pluginsDev);
}

module.exports = {
  entry: {
    web: path.join(__dirname, 'chat_window', 'index.jsx'),
    wizard: path.join(__dirname, 'creation_wizard', 'index.jsx'),
  },

  output: {
    path: path.join(__dirname, 'static'),
    filename: `[name].${filename}`,
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'flow'],
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins,
};
