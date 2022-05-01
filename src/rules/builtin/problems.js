const { mapOptionsAsErrors } = require("../../utils");

exports.problems = mapOptionsAsErrors({
  "array-callback-return": { allowImplicit: false, checkForEach: true },
  "constructor-super": true,
  "for-direction": true,
  "getter-return": { allowImplicit: false },
  "no-async-promise-executor": true,
  // Although made in good faith, there's too many cases
  // where enabling this rule won't make sense
  "no-await-in-loop": false,
  "no-class-assign": true,
  "no-compare-neg-zero": true,
  "no-cond-assign": "always",
  "no-const-assign": true,
  "no-constant-binary-expression": true,
  "no-constant-condition": { checkLoops: true },
  "no-constructor-return": true,
  "no-control-regex": true,
  "no-debugger": true,
  "no-dupe-args": true,
  "no-dupe-class-members": true,
  "no-dupe-else-if": true,
  "no-dupe-keys": true,
  "no-duplicate-case": true,
  "no-duplicate-imports": { includeExports: false },
  "no-empty-character-class": true,
  "no-empty-pattern": true,
  "no-ex-assign": true,
  "no-fallthrough": true,
  "no-func-assign": true,
  "no-import-assign": true,
  "no-inner-declarations": "both",
  "no-invalid-regexp": true,
  "no-irregular-whitespace": { skipStrings: true },
  "no-loss-of-precision": true,
  "no-misleading-character-class": true,
  "no-new-symbol": true,
  "no-obj-calls": true,
  "no-promise-executor-return": true,
  "no-prototype-builtins": true,
  "no-self-assign": { props: true },
  "no-self-compare": true,
  "no-setter-return": true,
  "no-sparse-arrays": true,
  "no-template-curly-in-string": true,
  "no-this-before-super": true,
  "no-undef": { typeof: false },
  "no-unexpected-multiline": true,
  "no-unmodified-loop-condition": true,
  "no-unreachable": true,
  "no-unreachable-loop": true,
  "no-unsafe-finally": true,
  "no-unsafe-negation": { enforceForOrderingRelations: true },

  // TypeScript comments added from here
  // Rules above may be disabled for TypeScript source code for performance.

  // NOTE: Not needed for TypeScript (strict)
  "no-unsafe-optional-chaining": { disallowArithmeticOperators: true },
  // NOTE: Not needed for TypeScript (noUnusedLocals)
  "no-unused-private-class-members": true,
  // NOTE: Not needed for TypeScript (noUnusedLocals, noUnusedParameters)
  "no-unused-vars": {
    vars: "all",
    args: "after-used",
    ignoreRestSiblings: true,
  },
  // NOTE: Not needed for TypeScript
  // But it could be useful for forbidding only function hoisting
  "no-use-before-define": { functions: true, classes: true, variables: true },
  "no-useless-backreference": true,
  "require-atomic-updates": { allowProperties: false },
  "use-isnan": { enforceForSwitchCase: true, enforceForIndexOf: true },
  // NOTE: Not needed for TypeScript
  "valid-typeof": true,
});
