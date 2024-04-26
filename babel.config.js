module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            src: "./src",
            components: "./src/components",
            hook: "./src/hook",
            navigation: "./src/navigation",
            screens: "./src/screens",
            theme: "./src/theme",
            types: "./src/types",
            utils: "./src/utils",
            assets: "./assets",
            commonComponent: "./src/components/common",
            sliceRedux: "./src/sliceRedux",
            dataFake: "./src/data",
          },
        },
      ],
    ],
  };
};
