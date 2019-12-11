const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: { browsers: ['last 2 versions']}
                        }]
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()],
    plugins: [
        new CopyPlugin([
            { from:'./android-chrome-512x512.png', to:'./build/public/assets/grapics' }
        ])
    ]
}