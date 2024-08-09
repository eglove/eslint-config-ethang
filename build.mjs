// @ts-check
import { projectBuilder } from '@ethang/project-builder/project-builder.js'

await projectBuilder('eslint-config-ethang', 'master', {
	isLibrary: true,
	scripts: ['UPDATE', 'DEDUPE', 'LINT'],
	tsupOptions: {
		bundle: true,
	},
})
