# Opinionated, Strict, Brutal, Unforgiving

* More than 500 errored rules.
* Over 100 vanilla EsLint rules.
* Over 100 rules from [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
* Over 100 rules from [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* Nearly 100 rules from [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* Includes [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
* Includes [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* Includes [eslint-plugin-astro](https://www.npmjs.com/package/eslint-plugin-astro)
* Import sorting with [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
* Includes Prettier built in (do NOT use this with a separate Prettier config.)
* And more...

# Install

`{your package manager install} @ethang/eslint-config`

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
      tsconfigRootDir: "./tsconfig.json",
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
