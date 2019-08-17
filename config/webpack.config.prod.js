'use strict';
const path = require('path')

const webpack                   = require('webpack');
const merge                     = require('webpack-merge');
const OptimizeCSSAssetsPlugin   = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin      = require('mini-css-extract-plugin');
const TerserPlugin              = require('terser-webpack-plugin');
const CompressionPlugin         = require('compression-webpack-plugin');
const commonConfig              = require('./webpack.config.common');
const isProd                    = process.env.NODE_ENV === 'production';
const destinationDir            = process.env.PROJECT;
const environment               = isProd ? require('./env/prod.env') : require('./env/staging.env');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

const webpackConfig = merge(commonConfig, {
    mode: 'production',
    output: {
        path: path.join(PATHS.dist, destinationDir),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].[hash:8].chunk.js'
    },
    optimization: {
        // runtimeChunk: {
        //     name: 'runtime'
        // },
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: [ 'default', { discardComments: { removeAll: true } } ],
                }
            }),
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    warnings: false,
                    ie8: false
                }
            })
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            // maxSize: 51200,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name (module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    }
                },
                styles: {
                    test: /\.css$/,
                    name: 'styles',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
});

if (!isProd) {
    webpackConfig.devtool = 'source-map';

    if (process.env.npm_config_report) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
    }
}

module.exports = webpackConfig;
