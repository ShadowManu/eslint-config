const { mapOptionsAsErrors } = require("../utils");

module.exports = mapOptionsAsErrors({
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
});
