const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin      = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  core: path.join(__dirname, '../' ),
  svg: path.join(__dirname, '../src/assets/svg'),
  assets: 'assets/',

};


webpackConfig = {
  externals: {
    paths: PATHS
  },
  entry: {
    main: path.join(PATHS.src, './main.js'),
    polyfill: '@babel/polyfill',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          "sass-loader"
        ],
      },
      {
        test: /\.sass$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
           {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              // fiber: require('fibers'),
              indentedSyntax: true // optional
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [ PATHS.src ],
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ],
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ PATHS.src ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: { 
          
         }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.js',
      '@': PATHS.src,
      '@svg': PATHS.svg,
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new webpack.DefinePlugin({
      '__PROJECT': JSON.stringify(process.env.PROJECT)
    }),
    new CopyWebpackPlugin([{ from: path.join(PATHS.core, 'index.html'), to: path.join(PATHS.dist, 'index.html') }])
  ]
}
module.exports = webpackConfig;
