const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const webConFig = require('./webConfig.json');

module.exports = {
    target: 'node',
    entry: ['./src/client.js', './src/assets/scss/styles.scss'],
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: {
                                browsers: ['last 2 versions']
                            }
                        }]
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                            outputPath: 'assets/css'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/graphics',
                    publicPath:webConFig.siteURL + '/assets/graphics/'
                },
            }
        ]
    }
}