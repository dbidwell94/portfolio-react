import * as path from "path";
import htmlPlugin from "html-webpack-plugin";
import webpack from "webpack";
import tsConfigPathPlugin from "tsconfig-paths-webpack-plugin";

module.exports = (env: any, argsv: any): webpack.Configuration => {
  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    mode: argsv.mode || "development",
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".json", ".js", "jsx"],
      plugins: [new tsConfigPathPlugin({ configFile: "tsconfig.json" }) as any],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "less-loader" },
          ],
        },
        {
          test: /\.html?$/,
          exclude: /node_modules/,
          use: [{ loader: "html-loader" }],
        },
      ],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    devServer: {
      historyApiFallback: true,
      port: 1437,
    },
    plugins: [
      new htmlPlugin({
        filename: "index.html",
        template: "./src/public/index.html",
        hash: true,
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "async",
        minSize: 10000,
        maxSize: 100000,
        maxAsyncRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  };
};
