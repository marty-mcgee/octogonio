const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'
const devMode = process.env.NODE_ENV !== 'production'

const sourceDir = '/src'
const buildDir = '/www'
const entryJSFile = `${sourceDir}/generic/scripts/app.js`
const outputJSFile = '[name].[chunkhash].js'
const outputJSFileDev = '[name].js'
const outputCSSFile = 'app.[contenthash].css'
const outputCSSFileDev = 'app.css'
// const externalCSS = new ExtractTextPlugin({
//   filename: isProduction ? outputCSSFile : outputCSSFileDev,
//   disable: false,
//   allChunks: true,
// })
const externalCSS = new MiniCssExtractPlugin({
    filename: isProduction ? outputCSSFile : outputCSSFileDev,
    disable: false,
    allChunks: true,
})
const cwd = process.cwd()

const getModules = platform => [
  path.join(cwd, `/src/${platform}/`),
  path.join(cwd, `/src/${platform}/scripts/`),
  path.join(cwd, `/src/${platform}/scripts/app/`),
  path.join(cwd, `/src/${platform}/styles/styles/`),
]

const config = (env) => {
  const isPhoneGap = env.isPhoneGap === 'true'
  const assetPathPrepend = isPhoneGap ? '' : '/'

  return {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
      main: ['react-hot-loader/patch', path.join(cwd, entryJSFile)],
      vendorReact: [
        'react',
        'react-dom',
        'react-router',
        'react-redux',
        'redux',
      ],
      vendor: ['immutable-ext', 'ramda-fantasy'],
    },
    output: {
      filename: isProduction ? outputJSFile : outputJSFileDev,
      path: path.join(cwd, buildDir),
      publicPath: assetPathPrepend,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
      alias: {
        react: path.join(cwd, 'node_modules/react'),
      },
      modules: ['node_modules', ...getModules(env.platform)],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /.*node_modules((?!immutable-ext).)*$/,
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                [require('@babel/plugin-proposal-object-rest-spread')]
              ],
              presets: [
                '@babel/react', 
                '@babel/preset-env'
              ]
            }
          }]
        },
        {
          test: /\.(sass|s?css)$/,
          exclude: /node_modules/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => [
                  autoprefixer({
                    browsers: ['last 2 versions', 'iOS 8'],
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.((?!scss|sass|js|json).)*$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            minimize: true,
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
      ],
    },
    devServer: {
      compress: isProduction,
      port: 3003,
      host: '127.0.0.1',
      publicPath: '/',
      contentBase: path.join(cwd, buildDir),
      historyApiFallback: true,
      hot: true,
      https: false, // [MM] true for self-signed, object for cert authority
      inline: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        },
      },
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new CopyWebpackPlugin([
        { from: 'src/generic/static/config.xml' },
        { from: 'src/generic/static/manifest.json' },
        { from: 'src/generic/scripts/sw.js' },
        { from: 'src/generic/assets', to: 'assets' },
        {
          from: 'node_modules/sw-toolbox/sw-toolbox.js',
          to: 'node_modules/sw-toolbox',
        },
      ]),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(nodeEnv),
        IS_PHONEGAP: JSON.stringify(isPhoneGap),
        'process.env': {
          NODE_ENV: JSON.stringify(nodeEnv),
        },
      }),
      isProduction && new webpack.optimize.ModuleConcatenationPlugin(),
      isProduction &&
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
          output: {
            comments: false,
          },
        }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   names: ['vendor', 'vendorReact', 'manifest'],
      // }),
      new HtmlWebpackPlugin({
        template: './src/generic/static/index.ejs',
        inject: 'body',
        absolutePath: assetPathPrepend,
        isProduction,
        isPhoneGap,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
      externalCSS,
      // new BundleAnalyzerPlugin(),
    ].filter(Boolean),
  }
}

module.exports = config
