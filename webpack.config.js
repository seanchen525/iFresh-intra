var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader?modules'
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    }],
                })
            },
            { test: /\.json$/, loader: 'json-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //             require("autoprefixer")
        //         ]
        //     }
        // })
    ],
    devServer: {
        contentBase: "./dist",
        colors: true,
        historyApiFallback: true,
        inline: true
    } ,
    resolve: {
        extensions: ['.js', '.json'] 
    }
}