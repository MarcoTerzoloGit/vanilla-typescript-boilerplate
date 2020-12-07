// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require('copy-webpack-plugin');

// webpack.config.js
module.exports = {
  mode: 'development',
  entry: {
    polyfills: './polyfills.ts',
    main: './index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: false,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/assets/mt-icons/sprite.svg', to: 'static/assets/mt-icons/sprite.svg' },
        // { from: './src/assets/pf-icons/sprite.svg', to: 'static/assets/pf-icons/sprite.svg' }, // example
      ],
    }),
  ],
};
