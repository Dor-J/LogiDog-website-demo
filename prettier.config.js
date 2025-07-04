/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const prettierConfig = {
  trailingComma: "none",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default prettierConfig;
