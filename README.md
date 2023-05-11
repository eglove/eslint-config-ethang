# Opinionated, Strict, Non-Dogmatic

* Usable in any TypeScript project, includes React rules.
* [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  * 100's of opinionated rules for a consistent codebase.
* [xojs/eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)
  * Extends unicorn, adds import sorting, 2 space formatting, as well as rules specific to TypeScript and React.
* [eslint-functional/eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional)
  * Borrows rules to enforce immutable object & array mutations.
* Includes Prettier built in (do NOT use this with a separate Prettier config.)
* Object key sorting.
* Explicit return types.
* Strict react hook enforcement.
* JSX prop sorting
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
