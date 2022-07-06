# Webpack Developer 1

# 1. Implement Webpack in a new application.

### a. Install Webpack, Webpack CLI, and Webpack Dev Server (dev dependencies)

```bash
$ npm install --save-dev webpack
$ npm install --save-dev webpack-cli
$ npm install --save-dev webpack-dev-server
```

### b. Install HTML Webpack Plugin

```bash
$ npm install --save-dev html-webpack-plugin
```

### c. Install CSS loaders and mini CSS plugin

```bash
$ npm install --save-dev style-loader
$ npm install --save-dev css-loader
$ npm install --save-dev mini-css-extract-plugin
```

# 2. Use Webpack to bundle ES6 modules.

First we need to configure Webpack, create a new file named `webpack.config.js`

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  entry: {
    index: path.resolve(__dirname, "source", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
```

Second, create a babel configuration file named `babel.config.json`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Third, we need to use npm scripts commands in `package.json`:

```json
{
  // omitted configuration

  "scripts": {
    "start": "webpack serve --mode development --open",
    "build": "webpack --mode production"
  }

  // omitted configuration
}
```

# 3. Optimize HTML, CSS, and JS output for quick download

We need to add the following configuration to webpack config file

```js
// omitted configuration

module.exports = {
  // omitted configuration

  optimization: {
    splitChunks: { chunks: "all" },
  },

  // omitted configuration
};
```

# 4. Use Loaders to handle Sass precompiling and Babel transpiling

### a. Add SASS support and SASS loader

```bash
$ npm install --save-dev sass
$ npm install --save-dev sass-loader
```

### b. Add Babel, Babel presets and Babel loader

```bash
$ npm install --save-dev @babel/core
$ npm install --save-dev @babel/preset-env
$ npm install --save-dev @babel/preset-react
$ npm install --save-dev babel-loader
```

### c. Add Babel loader to Webpack config (for React JSx files). Final configuration.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  entry: {
    index: path.resolve(__dirname, "source", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
```
