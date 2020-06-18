const path = require('path'); 
const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
entry:'./src/index.js',
output:{
    path:path.join(__dirname, '/dist'),
    filename:'index_bundle.js'
},
module:{
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:"babel-loader",
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader'],
        },
            {
     test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader',
      ],
},
        
    ]
},
plugins:[
    
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    
]
}