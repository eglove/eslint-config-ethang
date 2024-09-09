import tanstack from "@tanstack/eslint-plugin-query";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(tanstack.rules);

export const tanstackQueryRules = genRules(ruleNames, [], "@tanstack/query");
