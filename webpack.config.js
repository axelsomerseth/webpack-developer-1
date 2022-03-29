const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "source", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
};
