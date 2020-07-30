const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PurgecssPlugin = require("purgecss-webpack-plugin");
const webpack = require("webpack");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  entry: "./src/index.js",
  stats: "minimal",
  //...
  externals: {
    jquery: "jQuery",
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "./js/index.bundle.js",
    pathinfo: false,
  },
  // Generate sourcemaps for proper error messages
  devtool: "source-map",
  performance: {
    // Turn off size warnings for entry points
    hints: false,
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
        test: /\.(html)$/,
        loader: "html-loader",
        options: {
          // Interpolation syntax for ES6 template strings
          interpolate: true,
          // Disable minifcation during production mode
          minimize: false,
        },
        exclude: /node_modules/,
      },

      {
        test: /\.(js)$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: (url, resourcePath) => {
                if (/icon\.png|tile\.png|tile-wide\.png/.test(resourcePath)) {
                  return url;
                } else {
                  return `images/${url}`;
                }
              },
              name: "[name].[ext]",
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /(favicon\.ico|site\.webmanifest|browserconfig\.xml|robots\.txt|humans\.txt)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?[a-z0-9=.]+)?$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts",
          name: "[name].[ext]",
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      filename: "index.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/contact.html",
      filename: "contact.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/about.html",
      filename: "about.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/contact.html",
      filename: "contact.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/archive.html",
      filename: "archive.html",
      hash: true,
    }),

    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    //   whitelistPatterns: [/(slick|animated)/],
    // }),
  ],
};
