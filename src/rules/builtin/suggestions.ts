import { mapOptionsAsErrors } from "../../utils";

export default mapOptionsAsErrors({
  "accessor-pairs": {
    setWithoutGet: true,
    getWithoutSet: true,
    enforceForClassMembers: true,
  },
  "arrow-body-style": ["as-needed", { requireReturnForObjectLiteral: false }],
  "block-scoped-var": true,
  camelcase: {
    properties: "never",
    ignoreDestructuring: true,
    ignoreImports: false,
    ignoreGlobals: true,
  },
  "capitalized-comments": ["always"],
  "class-methods-use-this": { enforceForClassFields: true },
  complexity: { max: 20 },
  // NOTE: Not needed for TypeScript (strict)
  "consistent-return": { treatUndefinedAsUnspecified: false },
  "consistent-this": ["that"],

  // curly: true,
  // "default-case": true,
  // "default-case-last": true,
  // "default-param-last": true,
  // "dot-notation": true,
  // eqeqeq: true,
  // "func-name-matching": true,
  // "func-names": true,
  // "func-style": true,
  // "grouped-accessor-pairs": true,
  // "guard-for-in": true,
  // "id-denylist": true,
  // "id-length": true,
  // "id-match": true,
  // "init-declarations": true,
  // "max-classes-per-file": true,
  // "max-depth": true,
  // "max-lines": true,
  // "max-lines-per-function": true,
  // "max-nested-callbacks": true,
  // "max-params": true,
  // "max-statements": true,
  // "multiline-comment-style": true,
  // "new-cap": true,
  // "no-alert": true,
  // "no-array-constructor": true,
  // "no-bitwise": true,
  // "no-caller": true,
  // "no-case-declarations": true,
  // "no-confusing-arrow": true,
  // "no-console": true,
  // "no-continue": true,
  // "no-delete-var": true,
  // "no-div-regex": true,
  // "no-else-return": true,
  // "no-empty": true,
  // "no-empty-function": true,
  // "no-eq-null": true,
  // "no-eval": true,
  // "no-extend-native": true,
  // "no-extra-bind": true,
  // "no-extra-boolean-cast": true,
  // "no-extra-label": true,
  // "no-extra-semi": true,
  // "no-floating-decimal": true,
  // "no-global-assign": true,
  // "no-implicit-coercion": true,
  // "no-implicit-globals": true,
  // "no-implied-eval": true,
  // "no-inline-comments": true,
  // "no-invalid-this": true,
  // "no-iterator": true,
  // "no-label-var": true,
  // "no-labels": true,
  // "no-lone-blocks": true,
  // "no-lonely-if": true,
  // "no-loop-func": true,
  // "no-magic-numbers": true,
  // "no-mixed-operators": true,
  // "no-multi-assign": true,
  // "no-multi-str": true,
  // "no-negated-condition": true,
  // "no-nested-ternary": true,
  // "no-new": true,
  // "no-new-func": true,
  // "no-new-object": true,
  // "no-new-wrappers": true,
  // "no-nonoctal-decimal-escape": true,
  // "no-octal": true,
  // "no-octal-escape": true,
  // "no-param-reassign": true,
  // "no-plusplus": true,
  // "no-proto": true,
  // "no-redeclare": true,
  // "no-regex-spaces": true,
  // "no-restricted-exports": true,
  // "no-restricted-globals": true,
  // "no-restricted-imports": true,
  // "no-restricted-properties": true,
  // "no-restricted-syntax": true,
  // "no-return-assign": true,
  // "no-return-await": true,
  // "no-script-url": true,
  // "no-sequences": true,
  // "no-shadow": true,
  // "no-shadow-restricted-names": true,
  // "no-ternary": true,
  // "no-throw-literal": true,
  // "no-undef-init": true,
  // "no-undefined": true,
  // "no-underscore-dangle": true,
  // "no-unneeded-ternary": true,
  // "no-unused-expressions": true,
  // "no-unused-labels": true,
  // "no-useless-call": true,
  // "no-useless-catch": true,
  // "no-useless-computed-key": true,
  // "no-useless-concat": true,
  // "no-useless-constructor": true,
  // "no-useless-escape": true,
  // "no-useless-rename": true,
  // "no-useless-return": true,
  // "no-var": true,
  // "no-void": true,
  // "no-warning-comments": true,
  // "no-with": true,
  // "object-shorthand": true,
  // "one-var": true,
  // "one-var-declaration-per-line": true,
  // "operator-assignment": true,
  // "prefer-arrow-callback": true,
  // "prefer-const": true,
  // "prefer-destructuring": true,
  // "prefer-exponentiation-operator": true,
  // "prefer-named-capture-group": true,
  // "prefer-numeric-literals": true,
  // "prefer-object-has-own": true,
  // "prefer-object-spread": true,
  // "prefer-promise-reject-errors": true,
  // "prefer-regex-literals": true,
  // "prefer-rest-params": true,
  // "prefer-spread": true,
  // "prefer-template": true,
  // "quote-props": true,
  // radix: true,
  // "require-await": true,
  // "require-unicode-regexp": true,
  // "require-yield": true,
  // "sort-imports": true,
  // "sort-keys": true,
  // "sort-vars": true,
  // "spaced-comment": true,
  // strict: true,
  // "symbol-description": true,
  // "vars-on-top": true,
  // yoda: true,
});