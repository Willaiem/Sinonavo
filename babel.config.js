module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./"],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ],
          alias: {
            '@sinonavo/components': './src/components/index.ts',
            "@sinonavo/types": "./src/types/index.d.ts",
            "@sinonavo/stores": "./src/stores",
            "@sinonavo/hooks": "./src/hooks"
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
