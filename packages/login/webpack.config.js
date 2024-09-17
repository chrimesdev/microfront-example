const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  devServer: {
    port: 8083,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "login",
      filename: "remoteEntry.js",
      exposes: {
        "./Login": "./src/index",
      },
      remotes: {
        app1: "app1@http://localhost:8081/remoteEntry.js",
        app2: "app2@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
