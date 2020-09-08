const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".json", ".css", ".scss"],
  },

  module: {
    rules: [
      // All files with a '.js' or '.jsx' extension will be handled by babel.
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      //{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

      { test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader" },

      {
        test: /\.scss/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
      },

      { test: /\.png|svg|jpg|gif$/, use: ["file-loader"] },
    ],
  },

  optimization: {
    minimize: true,
    nodeEnv: "development",
  },
};
