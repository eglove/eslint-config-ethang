import {projectBuilder} from '@ethang/project-builder/project-builder.js';

await projectBuilder('eslint-config-ethang', 'master', {
  isIgnoringBuild: true,
  preVersionBumpScripts: ['UPDATE', 'PRUNE'],
  postVersionBumpScripts: ['DEDUPE', 'LINT'],
  ignorePeerDependencies: ['@rushstack/eslint-patch'],
})
