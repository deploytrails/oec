// module.exports = {
//   env: {
//     apiKey: "http://54.87.169.150:8081/",
//   },
// };

module.exports = {
  env: {
    APIBaseUrl: "http://15.206.189.30:8081/",
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
};
