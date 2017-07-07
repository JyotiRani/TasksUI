import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  //debug: true,
  devtool: 'cheap-module-eval-source-map',
  //noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    // new ExtractTextPlugin({
    //   filename: 'styles.css'
    // }), //create a separate CSS bindle from the JS bundle
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
        //loaders: [ // loaders is now rules in webpack 2
        rules: [
            {
              test: /\.js$/,
              include: path.join(__dirname, 'src'),
              loader: 'babel-loader',
              exclude: [ path.resolve(__dirname, 'src/watson-speech.js')]
            },
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
            // {
            //   test: /(\.css)$/,
            //   use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: "css-loader"
            //   })
            // },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: [
                      {
                        loader: 'file-loader',
                        query: {
                          hash: "sha512",
                          digest: "hex",
                          name: "[hash].[ext]"
                        }
                      },
                      {
                        loader: 'image-webpack-loader',
                        query: {
                          bypassOnDebug: true,
                          optimizationLevel: 7,
                          interlaced: false
                        }
                      }
                ]
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader'
            },
            {
              test: /\.(woff|woff2)$/,
              loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};
