import {versionBump} from '@ethang/project-builder/version-bump.js';

await versionBump(['UPDATE', 'PRUNE'], ['DEDUPE', 'LINT'])
