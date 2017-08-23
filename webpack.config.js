const path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'build.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/
            }
        ]
    }
}