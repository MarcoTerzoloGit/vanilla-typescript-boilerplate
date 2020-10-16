module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: `./tsconfig.json`,
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};
