const path = require("path");
const webpack =require("webpack");

module.exports = {
  entry: "./src/index.js", // start bundling files
  mode: "development", // This saves us from having to add a mode flag when we run the development server.
  module: { // define how your exported javascript moduels are transformed
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader", // loader is a shorthand for the use property, when only one loader is being utilized.
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }, // allow use to specifywhich extensions Webpack will resolve, 能够使用户在引入模块时不带扩展
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/", // where dev server serves your file
    filename: "main.js"
  },
  devServer: {
    contentBase: path.join(__dirname,"public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};