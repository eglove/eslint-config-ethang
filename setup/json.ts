import json from "@eslint/json";

import { type CustomRules, genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(json.rules);
const customRules: CustomRules = [];

export const jsonRules = genRules(ruleNames, customRules, "json");
