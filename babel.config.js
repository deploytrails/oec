module.exports = (api) => {
  api.cache(true);

  const presets = [
    "next/babel",

    [
      "@emotion/babel-preset-css-prop",
      {
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: "[dirname]-[local]",
      },
    ],
  ];

  return {
    presets,
  };
};
