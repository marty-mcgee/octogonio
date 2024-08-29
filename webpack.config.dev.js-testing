var path = require('path')
var webpack = require('webpack')
const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  mode: nodeEnv,
  devtool: 'inline-source-map',
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    './src/client/index'
  ],
  output: {
    path: path.resolve(__dirname, './static/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // query: {
        //   plugins: [
        //     [
        //       'react-transform', {
        //         transforms: [{
        //           transform: 'react-transform-hmr',
        //           imports: ['react'],
        //           locals: ['module']
        //         }, {
        //           transform: 'react-transform-catch-errors',
        //           imports: ['react', 'redbox-react']
        //         }]
        //       }
        //     ]
        //   ]
        // },
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'raw-loader']
      }
    ]
  }
};
