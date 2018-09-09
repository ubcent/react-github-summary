const PATH_OUTPUT = require('path').join(__dirname, 'dist');
const PATH_ENTRY = require('path').join(__dirname, 'src/index.jsx');
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const QUERY = {
    name: '[name].[hash].[ext]',
};

module.exports = {
    entry: {
        main: PATH_ENTRY,
    },
    output: {
        path: PATH_OUTPUT,
        filename: 'bundle.[chunkhash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            actions: path.resolve(__dirname, 'src/actions'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        'postcss-loader',
                    ],
                }),
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'application/font-woff' }, QUERY),
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'application/octet-stream' }, QUERY),
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: require.resolve('file-loader'),
            },
            {
                test: /\.(jpe?g)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/jpeg' }, QUERY),
            },
            {
                test: /\.(gif)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/gif' }, QUERY),
            },
            {
                test: /\.(png)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/png' }, QUERY),
            },
            {
                test: /\.(svg)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/svg+xml' }, QUERY),
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new ExtractTextPlugin({
            filename: 'index.[hash].css',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new UglifyJsPlugin({
            cache: true,
            parallel: 4,
            uglifyOptions: {
                ecma: 8,
                warnings: false,
                parse: {},
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true,
                    unsafe: true,
                },
                mangle: true,
                output: {
                    comments: false,
                    beautify: false,
                },
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            },
        }),
    ],
};
