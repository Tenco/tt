var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'index.js'
    }
};