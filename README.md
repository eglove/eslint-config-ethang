# Opinionated, Strict, Brutal, Unforgiving

[View Config](https://eslint-config-ethang.pages.dev/rules)

* 469 errored rules.
* 142 rules from vanilla EsLint
* 113 rules from [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* 104 rules from [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
* 35 rules from [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* 32 rules from [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
* 20 rules from [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/tree/67bbfdf3c6862dcbfe455a4afbd83fa60f9d1ea4)
* 19 rules from [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
* 3 rules from [@tanstack/eslint-plugin-query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)
* Includes Prettier built-in (do NOT use this with a separate Prettier config.)

# Add Even More!
* 51 rules for **Astro**
  * `import configAstro from "@ethang/eslint-config/config.astro.js";`
  * 51 rules from [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
* 77 rules for **React**
  * `import configReact from "@ethang/eslint-config/config.react.js";`
  * 75 rules from [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
  * 2 rules from [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

# Install

`pnpm i -D eslint prettier typescript-eslint @ethang/eslint-config`

**Requires TypesScript and tsconfig.json at root directory.**

# Config

In **eslint.config.js**

```js
import config from "@ethang/eslint-config/eslint.config.js";
import tseslint from "typescript-eslint";
import configAstro from "@ethang/eslint-config/config.astro.js"; // OPTIONAL
import configReact from "@ethang/eslint-config/config.react.js"; // OPTINAL

export default tseslint.config(...config, ...astroConfig, ...reactConfig, {
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
