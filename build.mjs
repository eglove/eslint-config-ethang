// @ts-check
import { projectBuilder } from '@ethang/project-builder/project-builder.js'

await projectBuilder('eslint-config-ethang', 'master', {
	isLibrary: true,
	scripts: ['DEDUPE', 'LINT', 'UPDATE'],
	tsupOptions: {
		bundle: true,
	},
})
