const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const styleLoader = require("style-loader");

const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",

  // Generate sourcemaps for proper error messages
  devtool: "source-map",
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  // DevServer
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".js"],
    alias: {
      jquery: "jquery/dist/jquery.slim.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        include: path.join(__dirname, "../src/scss"),
      },
    ],
  },
});
