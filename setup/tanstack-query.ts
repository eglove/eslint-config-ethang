import tanstack from "@tanstack/eslint-plugin-query";

import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

// @ts-expect-error it's fine
const ruleNames = Object.keys(getNonDeprecatedRules(tanstack.rules));

export const tanstackQueryRules = genRules(ruleNames, [], "@tanstack/query");
