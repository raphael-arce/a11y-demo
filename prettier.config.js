export default {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  useTabs: true,
  trailingComma: "all",
  printWidth: 80,
  overrides: [
    {
      files: ["*.yml", "*.yaml"],
      options: {
        useTabs: false,
      },
    },
  ],
};
