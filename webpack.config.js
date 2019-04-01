const path = require('path');
var webpack = require('webpack')
module.exports = {
    entry:{
            app:'./src/app.js'
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
        },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude:/node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['env']
            }
        }]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            JQuery:'jquery'
        })
    ]    
}









