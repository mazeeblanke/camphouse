const path = require("path");
const webpack = require("webpack");
const LoadablePlugin = require("@loadable/webpack-plugin");
const AntdScssThemePlugin = require("antd-scss-theme-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

const clientConfig = {
  name: "client",
  target: "web",
  mode: "development",
  entry: [
    path.resolve(__dirname, "../src/index.js"),
    "webpack-hot-middleware/client"
  ],
  output: {
    filename: "client-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist"
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ['file-loader']
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          // isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },

          AntdScssThemePlugin.themify("sass-loader")
        ]
      },
      {
        test: /\.less$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },

          AntdScssThemePlugin.themify({
            loader: "less-loader",
            options: { javascriptEnabled: true }
          })
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new LoadablePlugin(),
    new AntdScssThemePlugin(
      path.resolve(__dirname, "../scss/antd.overrides.scss")
    ),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    })
  ]
};

const serverConfig = {
  name: "server",
  target: "node",
  mode: "development",
  output: {
    libraryTarget: "commonjs2",
    filename: "server-bundle.js",
    publicPath: "/dist"
  },
  entry: [path.resolve(__dirname, "./serverRenderer")],
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  },
  plugins: [
    new AntdScssThemePlugin(
      path.resolve(__dirname, "../scss/antd.overrides.scss")
    )
  ],
  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ['file-loader']
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] },
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },

          AntdScssThemePlugin.themify("sass-loader")
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          // isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },

          AntdScssThemePlugin.themify({
            loader: "less-loader",
            options: { javascriptEnabled: true }
          })
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /mode_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};

module.exports = [serverConfig, clientConfig];
