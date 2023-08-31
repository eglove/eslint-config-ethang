import fs from 'node:fs'

const packageJson = fs.readFileSync('package.json', { encoding: 'utf8' })

const packageObject = JSON.parse(packageJson)

const peerDependencies = {
  eslint: packageObject.dependencies.eslint,
  prettier: packageObject.dependencies.prettier,
  typescript: packageObject.dependencies.typescript,
}

packageObject.peerDependencies = peerDependencies

fs.writeFileSync('package.json', JSON.stringify(packageObject, null, 2) + '\n', 'utf8');

execSync('npm publish --access public');
