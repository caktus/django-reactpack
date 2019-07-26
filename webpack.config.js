const webpack = require('webpack');
const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devWebpackConfig = {
    name: 'dev',
    context: __dirname,
    entry: {
        gardens: './django_reactpack/static/js/Gardens/Gardens.jsx',
        garden: './django_reactpack/static/js/Garden/Garden.jsx',
        bed: './django_reactpack/static/js/Bed/Bed.jsx'
    },
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, './django_reactpack/static/bundles/js')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new BundleTracker({ filename: 'webpack-stats.json' })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}

const prodWebpackConfig = {
    ...devWebpackConfig,
    name: 'production',
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'static/js')
    },
    plugins: [
        new BundleTracker({ filename: './static/js/webpack-stats.json' })
    ]
}

module.exports = [devWebpackConfig, prodWebpackConfig];
