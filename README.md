# Opinionated, Strict, Brutal, Unforgiving

* Nearly every EsLint rule error's as a default.
* [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  * 100's of opinionated rules for a consistent codebase.
* [@typescript-eslint/strict-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict-type-checked.ts)
* [@typescript-eslint/stylistic-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts)
  * Strictest config options from typescript-eslint
* Includes Prettier built in (do NOT use this with a separate Prettier config.)
* And more...

# Install

`{your package manager install} @ethang/eslint-config`

**Requires TypesScript and tsconfig.json at root directory.**

# Config

In **eslint.config.js**

```js
import config from "@ethang/eslint-config/index.js";

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

**Scripts**:

```json
"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}
```
