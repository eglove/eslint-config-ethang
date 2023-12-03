import { projectBuilder } from '@ethang/project-builder/project-builder.js'
import { execSync } from 'node:child_process'

await projectBuilder('eslint-config-ethang', 'master', {
  isIgnoringBuild: true,
  preVersionBumpScripts: ['UPDATE', 'PRUNE'],
  postVersionBumpScripts: ['DEDUPE', 'LINT'],
  ignorePeerDependencies: ['@rushstack/eslint-patch'],
})

execSync('npm publish --access public')
