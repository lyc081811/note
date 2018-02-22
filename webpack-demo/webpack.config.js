const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");
var website = {
  publicPath: "http://localhost:1012/"
};
module.exports = {
    entry: {
        entry: './src/entry.js',
        entry2: './src/entry2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: website.publicPath
    },   
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50,
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(html|htm)$/i,
                use: ['html-withimg-loader']
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [new uglify(), new htmlPlugin({
                 minify: { removeAttributeQuotes: true },
                 hash: true,
                 template: "./src/index.html"
               }), new extractTextPlugin("/css/index.css")],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 1012
    },
}