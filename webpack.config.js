const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '',
        filename: 'bundle.js'
      },

      plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
        title: 'charlie michael',
        template: './src/index.html'
        }),
      ],

    mode: 'development',

    module: {
        rules: [
            
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],    
            },
            
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        
            {
                test: /\.(gltf)$/,
                use: [
                    {
                        loader: "gltf-webpack-loader"
                    }
                ]
            },
            
            {
                test: /\.(bin|glb)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                        sources: true,
                        }
                    }
                ]
            },
          
        ]
      }

};
