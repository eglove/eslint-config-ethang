import fs from 'node:fs'
import { execSync } from 'child_process'

const packageJson = fs.readFileSync('package.json', { encoding: 'utf8' })

const packageObject = JSON.parse(packageJson)

const peerDependencies = {
  eslint: packageObject.dependencies.eslint,
  "@typescript-eslint/eslint-plugin": packageObject.dependencies["@typescript-eslint/eslint-plugin"],
  "@typescript-eslint/parser": packageObject.dependencies["@typescript-eslint/parser"],
  "eslint-config-prettier": packageObject.dependencies["eslint-config-prettier"],
  "eslint-config-xo": packageObject.dependencies["eslint-config-xo"],
  "eslint-config-xo-react": packageObject.dependencies["eslint-config-xo-react"],
  "eslint-config-xo-space": packageObject.dependencies["eslint-config-xo-space"],
  "eslint-config-xo-typescript": packageObject.dependencies["eslint-config-xo-typescript"],
  "eslint-plugin-astro": packageObject.dependencies["eslint-plugin-astro"],
  "eslint-plugin-functional": packageObject.dependencies["eslint-plugin-functional"],
  "eslint-plugin-import": packageObject.dependencies["eslint-plugin-import"],
  "eslint-plugin-jsx-a11y": packageObject.dependencies["eslint-plugin-jsx-a11y"],
  "eslint-plugin-prettier": packageObject.dependencies["eslint-plugin-prettier"],
  "eslint-plugin-react": packageObject.dependencies["eslint-plugin-react"],
  "eslint-plugin-react-hooks": packageObject.dependencies["eslint-plugin-react-hooks"],
  "eslint-plugin-simple-import-sort": packageObject.dependencies["eslint-plugin-simple-import-sort"],
  "eslint-plugin-sort-keys-fix": packageObject.dependencies["eslint-plugin-sort-keys-fix"],
  "eslint-plugin-tailwindcss": packageObject.dependencies["eslint-plugin-tailwindcss"],
  "eslint-plugin-typescript-sort-keys": packageObject.dependencies["eslint-plugin-typescript-sort-keys"],
  "eslint-plugin-unicorn": packageObject.dependencies["eslint-plugin-unicorn"],
  "eslint-plugin-unused-imports": packageObject.dependencies["eslint-plugin-unused-imports"],
  prettier: packageObject.dependencies.prettier,
  typescript: packageObject.dependencies.typescript,
}

packageObject.peerDependencies = peerDependencies

fs.writeFileSync('package.json', JSON.stringify(packageObject, null, 2) + '\n', 'utf8')

execSync('npm publish --access public')
