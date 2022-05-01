const { builtin } = require("./rules/builtin");

module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    ...builtin,
  },
};
