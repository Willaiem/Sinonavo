module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./"],
          alias: {
            '@sinonavo/components': './src/components/index.ts'
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
