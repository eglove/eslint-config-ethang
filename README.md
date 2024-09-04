# Opinionated, Strict, Brutal, Unforgiving

[View Config](https://eslint-config-ethang.pages.dev/rules)

> [!CAUTION]
> Do not use this with Prettier! Styling rules are included.

- 885 errored rules.
- 289 rules from [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md)
- 145 rules from [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js)
- 113 rules from [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- 104 rules from [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
- 91 rules from [@stylistic/eslint-plugin](https://eslint.style/)
- 42 rules from [eslint-plugin-lodash](https://github.com/wix-incubator/eslint-plugin-lodash)
- 35 rules from [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- 20 rules from [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
- 19 rules from [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
- 7 rules from [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- 7 rules from [@eslint/markdown](https://github.com/eslint/markdown)
- 4 rules from [eslint-plugin-barrel-files](https://github.com/thepassle/eslint-plugin-barrel-files)
- 4 rules from [@tanstack/eslint-plugin-query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)
- 2 rules from [@eslint/json](https://github.com/eslint/json)
- 1 rule from [eslint-plugin-depend](https://github.com/es-tooling/eslint-plugin-depend/tree/main)
- 1 rule from [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
- 1 rule from [@ethang/eslint-plugin](https://github.com/eglove/eslint-plugin)

# Add Even More!

- 51 rules for **Astro**
  - `import astroConfig from "@ethang/eslint-config/config.astro.js";`
  - 51 rules from [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
- 71 rules for **React**
  - `import reactConfig from "@ethang/eslint-config/config.react.js";`
  - 71 rules from [@eslint-react/eslint-plugin](https://eslint-react.xyz/)
- 18 rules for **Solid**
  - `import solidConfig from "@ethang/eslint-config/config.solid.js";`
  - 18 rules from [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)

# Install

`pnpm i -D eslint typescript-eslint @ethang/eslint-config`

**Requires TypesScript and tsconfig.json at root directory.**

# Config

In **eslint.config.js**

```js
import config from "@ethang/eslint-config/eslint.config.js";
import tseslint from "typescript-eslint";
import astroConfig from "@ethang/eslint-config/config.astro.js"; // OPTIONAL
import reactConfig from "@ethang/eslint-config/config.react.js"; // OPTIONAL

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

**Scripts**

```json
"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}
```

**Browserslist**

This config will also lint for browserslist features. Make sure to set this in package.json. [More info.](https://github.com/browserslist/browserslist)

```json
"browserslist": [
  "defaults and fully supports es6-module",
  "maintained node versions"
]
```
