
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
      inject:true
    }),
    //Eliminate dublicate packages when generating bundles
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}