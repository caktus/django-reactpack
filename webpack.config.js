const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        garden_tracker: './django_reactpack/static/js/gardenTracker.js',
        my_garden: './django_reactpack/static/js/myGardens.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new BundleTracker({ filename: './webpack-stats.json' })
    ]
};