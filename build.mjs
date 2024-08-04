// @ts-check
import { projectBuilder } from '@ethang/project-builder/project-builder.js'
import { execSync } from 'node:child_process'

execSync('pnpx update-browserslist-db')
execSync('git add .')
execSync('git commit -m "Update BrowsersList')
execSync('git push')

await projectBuilder('eslint-config-ethang', 'master', {
	isLibrary: true,
	postVersionBumpScripts: ['DEDUPE', 'LINT'],
	preVersionBumpScripts: ['UPDATE'],
	tsupOptions: {
		bundle: true,
	},
})
