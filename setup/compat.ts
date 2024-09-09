import compat from "eslint-plugin-compat";

import { type CustomRules, genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(compat.rules);
const changedRules: CustomRules = [];

export const compatRules = genRules(ruleNames, changedRules, "compat");
