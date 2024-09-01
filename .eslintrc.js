module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/vue3-essential",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],
  },
};
