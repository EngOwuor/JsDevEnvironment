
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import webpackMd5Hash from 'webpack-md5-hash';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkHash].js'
  },
  plugins: [
    // Generate an external css file with a hash in the file name
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using Md5 so that their name changes when the content changes
    new webpackMd5Hash(),
    // use CommonsChunkPlugin to create a separate bundle
    //of vendor libraries so they are cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    // Create html file that include bundled js.
    new HtmlWebpackPlugin({
      template:'src/index.html',
      minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      inject:true,
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken:"5864f35134fd4b0d9c7a4f89c5befe51"
    }),
    //Eliminate dublicate packages when generating bundles
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}