# @shadowmanu/eslint-config

This is a work in progress. The focus of this package is to pack in as many
pedantic rules as possible, in an opinionated as hell way, to only allow a small
subset of TypeScript, focusing on readability and predictability.

This will only provide a config, meaning it uses rules from as many existing
eslint plugins as possible to reach its goal.

Use it as any other [shareable config](https://eslint.org/docs/user-guide/configuring/configuration-files#using-a-shareable-configuration-package):

```javascript
module.exports = {
  "extends": ["@shadowmanu/eslint-config"]
}
```