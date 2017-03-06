const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
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
            './index.js',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch'
        ],
        vendors: [
            'react',
            'react-dom',
            'react-router'
        ]
    },

    output: {
        filename: '[name]-bundle.js',
        publicPath: '/static/'
    },

    devtool: 'cheap-module-eval-source-map',

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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: false,
                            importLoaders: true
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
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'GLOBAL.__CLIENT__': true
        }),
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: '[name]-bundle.js',
            minChunks: Infinity
        })
    ]
}
