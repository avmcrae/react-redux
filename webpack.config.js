module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
};