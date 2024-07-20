# Opinionated, Strict, Brutal, Unforgiving

[View Config](https://eslint-config-ethang.pages.dev/rules)

* 594 errored rules.
* 141 rules from vanilla EsLint
* 112 rules from [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* 105 rules from [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
* 75 rules from [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* 51 rules from [eslint-plugin-astro](https://www.npmjs.com/package/eslint-plugin-astro)
* 35 rules from [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* 32 rules from [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
* 20 rules from [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/tree/67bbfdf3c6862dcbfe455a4afbd83fa60f9d1ea4)
* 17 rules from [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
* 3 rules from [@tanstack/eslint-plugin-query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)
* 2 rules from [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
* Includes Prettier built in (do NOT use this with a separate Prettier config.)

# Install

`pnpm i -D eslint prettier typescript-eslint @ethang/eslint-config`

**Requires TypesScript and tsconfig.json at root directory.**

# Config

In **eslint.config.js**

```js
import config from "@ethang/eslint-config/eslint.config.js";
import tseslint from "typescript-eslint";

export default tseslint.config(...config, {
  ignores: ["dist/"], // Your ignores directories
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    // your custom rules here
  },
});
```

**Scripts**:

```json
"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}
```
