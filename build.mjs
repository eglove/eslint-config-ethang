import fs from 'node:fs'
import { execSync } from 'child_process'

const packageJson = fs.readFileSync('package.json', { encoding: 'utf8' })

const packageObject = JSON.parse(packageJson)

const peerDependencies = [
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "eslint",
  "eslint-config-prettier",
  "eslint-config-xo",
  "eslint-config-xo-react",
  "eslint-config-xo-space",
  "eslint-config-xo-typescript",
  "eslint-plugin-astro",
  "eslint-plugin-functional",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-simple-import-sort",
  "eslint-plugin-sort-keys-fix",
  "eslint-plugin-tailwindcss",
  "eslint-plugin-typescript-sort-keys",
  "eslint-plugin-unicorn",
  "eslint-plugin-unused-imports",
  "prettier",
  "prettier-plugin-astro",
  "typescript"
];

const peerDependenciesObject = {}
peerDependencies.forEach(dependency => {
  peerDependenciesObject[dependency] = packageObject.dependencies[dependency];
})

packageObject.peerDependencies = peerDependenciesObject

fs.writeFileSync('package.json', JSON.stringify(packageObject, null, 2) + '\n', 'utf8')

execSync('npm publish --access public')
