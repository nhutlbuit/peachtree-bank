const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({ path: __dirname + '/.env.development' });
process.env = dotenv.parsed;

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-bootstrap'
]

module.exports = {

  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.tsx'),
    vendor: VENDOR_LIBS
  },
  output: {
    publicPath: '/peachtree-bank/',
    path: path.resolve(__dirname, 'build'),

    filename: 'bundle.js',
    chunkFilename: `[id].chunk.js`
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-warnings',
    port: 4400,
    writeToDisk: true,
    disableHostCheck: true,
    lazy: false,
    https: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            [
              "@babel/plugin-proposal-class-properties",
              {
                "loose": true
              }
            ]
          ]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
  ]
};