const webpack = require('webpack');
const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: {
        garden_tracker: './django_reactpack/static/js/gardenTracker.js',
        my_garden: './django_reactpack/static/js/myGardens.js'
    },
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'static/js')
    },

    plugins: [
        new BundleTracker({ filename: './static/js/webpack-stats.json' })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
