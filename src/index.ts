import builtin from "./rules/builtin";

export = {
  parser: "@typescript-eslint/parser",
  rules: {
    ...builtin,
  },
};
