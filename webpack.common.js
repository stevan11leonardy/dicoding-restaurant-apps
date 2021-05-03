const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/public/logo/single-logo.png'),
      inject: true,
    }),
    new CleanWebpackPlugin(),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new WebpackPwaManifest({
      name: 'D\'Resto App',
      short_name: 'D\'Resto',
      description: 'Eat today, live another day.',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      filename: 'manifest.json',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '.',
      inject: true,
      fingerprints: true,
      ios: true,
      theme_color: '#ff6701',
      icons: [
        {
          src: path.resolve('src/public/logo/single-logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/public/logo/single-logo.png'),
          size: '1024x1024',
        },
        {
          src: path.resolve('src/public/logo/single-logo.png'),
          size: '1024x1024',
          purpose: 'any maskable',
        },
      ],
    }),
  ],
};
