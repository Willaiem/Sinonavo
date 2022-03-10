module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@sinonavo/components': './src/components/index.ts',
            '@sinonavo/countriesflags/*.png': "./assets/countriesflags/*.png"
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          "moduleName": "react-native-dotenv",
          "safe": true,
          "allowUndefined": true
        }
      ]
    ],
  };
};
