# Opinionated, Strict, Brutal, Unforgiving

[View Config](https://eslint-config-ethang.pages.dev/rules)

* 524 errored rules.
* 142 rules from vanilla EsLint
* 113 rules from [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* 104 rules from [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
* 42 rules from [eslint-plugin-lodash](https://github.com/wix-incubator/eslint-plugin-lodash)
* 35 rules from [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* 32 rules from [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
* 20 rules from [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/tree/67bbfdf3c6862dcbfe455a4afbd83fa60f9d1ea4)
* 20 rules from [eslint-plugin-github](https://github.com/github/eslint-plugin-github)
* 19 rules from [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
* 7 rules from [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
* 4 rules from [eslint-plugin-barrel-files](https://github.com/thepassle/eslint-plugin-barrel-files)
* 3 rules from [@tanstack/eslint-plugin-query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)
* 1 rule from [eslint-plugin-depend](https://github.com/es-tooling/eslint-plugin-depend/tree/main)
* 1 rule from [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
* Includes Prettier built-in (do NOT use this with a separate Prettier config.)

# Add Even More!
* 51 rules for **Astro**
  * `import configAstro from "@ethang/eslint-config/config.astro.js";`
  * 51 rules from [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
* 72 rules for **React**
  * `import configReact from "@ethang/eslint-config/config.react.js";`
  * 70 rules from [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
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
import configReact from "@ethang/eslint-config/config.react.js"; // OPTIONAL

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

** Browserslist **

This config will also lint for browserslist features. Make sure to set this in package.json. [More info.](https://github.com/browserslist/browserslist)

```json
"browserslist": [
  "defaults and fully supports es6-module",
  "maintained node versions"
]
```
