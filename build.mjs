import { projectBuilder } from '@ethang/project-builder/project-builder.js'

await projectBuilder('eslint-config-ethang', 'master', {
  isLibrary: true,
  preVersionBumpScripts: ['UPDATE'],
  postVersionBumpScripts: ['DEDUPE', 'LINT'],
  ignorePeerDependencies: ['@rushstack/eslint-patch'],
})
