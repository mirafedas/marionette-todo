var webpack = require('webpack');

module.exports = {
  entry: './app/driver.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.hbs$/, loader: "handlebars-loader"
      }
    ]
  },
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  }
};