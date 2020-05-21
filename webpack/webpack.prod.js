const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const webpack = require("webpack");
const uglify = require("uglifyjs-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const PATHS = {
  src: path.join(__dirname, "../src"),
};

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "",
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: { output: { comments: false } },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          assetNameRegExp: /\.css$/g,
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
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
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")],
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      whitelistPatterns: [/(slick|animated)/],
    }),
  ],
});
