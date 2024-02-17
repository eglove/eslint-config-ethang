# Opinionated, Strict, Brutal, Unforgiving

* Usable in any TypeScript project, includes React rules.
* Nearly every EsLint rule error's as a default.
* [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  * 100's of opinionated rules for a consistent codebase.
* [@typescript-eslint/strict-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict-type-checked.ts)
* [@typescript-eslint/stylistic-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts)
  * Strictest config options from typescript-eslint
  * Plus more! Nearly all rules added.
* [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
  * Nearly all react plugin rules enabled, exhaustive peer dependencies labeled as error
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  * Strictest ruleset for proper accessibility
* [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
  * Keep tailwind classnames organized and remove redundancies.
* Sort all the things!
  * Type, interface, and enum keys.
  * [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
    * Auto-fix imports in a much cleaner fashion than vanilla EsLint rules 
  * Tailwind classes
  * JSX props
  * [eslint-plugin-sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix)
    * Object keys (Dangerous auto fix! This config is meant for greenfield projects!)
* Includes Prettier built in (do NOT use this with a separate Prettier config.)
* Auto fix unused imports
* And more...

# Install

`pnpm|yarn|npm install eslint-config-ethang`

**Requires TypesScript and tsconfig.json at root directory.**

# Config

In **package.json**:

```json
"eslintConfig": {
  "extends": ["ethang"],
}
```

In **.eslintrc**:

```json
{
  "extends": "ethang"
}
```

**Scripts**:

```json
"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}
```
