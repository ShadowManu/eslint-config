import type { Linter } from "eslint";

/**
 * Transforms each rule value into the ESLint Linter.RuleLevelAndOptions.
 * This helps writing simpler configurations as this package already wants to
 * treat everything as an error and be as pedantic as possible.
 */
export const mapOptionsAsErrors = (
  rules: Record<string, boolean | unknown>
) => {
  const result: Linter.RulesRecord = {};

  for (const [name, options] of Object.entries(rules)) {
    const value: Linter.RuleLevelAndOptions = (() => {
      if (options === false) return ["off"];
      if (options === true) return ["error"];
      return ["error", options];
    })();

    result[name] = value;
  }

  return result;
};
