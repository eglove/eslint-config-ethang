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
