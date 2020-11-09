// module.exports = {
//   env: {
//     apiKey: "http://54.87.169.150:8081/",
//   },
// };

module.exports = {
  env: {
    APIBaseUrl: "http://15.206.189.30:8081/",
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['http://p2w.in/'],
    path: '/_next/image',
    loader: 'imgix',
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
