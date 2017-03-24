var webpack = require('webpack'),
    path = require('path');

module.exports = {
  context: __dirname + '/public/js',
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/public/vendor',
    filename: 'app.bundle.js'
  },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"})
    ]
};