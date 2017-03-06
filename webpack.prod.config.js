const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const AssetsPlugin = require('assets-webpack-plugin')
var AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
]

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: [
            './index.js'
        ],
        vendors: [
            'react',
            'react-dom',
            'react-router'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'assets', 'js'),
        filename: '[name]-bundle.js'
        // filename: '[name].[chunkhash].js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                modules: false,
                                minimize: true,
                                discardComments: {
                                    removeAll: true
                                },
                                importLoaders: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',
            React: 'react',
            ReactDOM: 'react-dom',
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise', // (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            fetch: 'isomorphic-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            'process.env.PUBLIC_URL': process.env.PUBLIC_URL && '"playCssSecrets"',
            'GLOBAL.__CLIENT__': true
        }),
        new AssetsPlugin({
            fullPath: false,
            path: path.join(__dirname, '/assets/')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: '[name]-bundle.js',
            minChunks: module => /node_modules/.test(module.resource)
        }),
        // new ExtractTextPlugin('./css/[name].[chunkhash].css')
        new ExtractTextPlugin('../css/[name].css')
    ]
}
