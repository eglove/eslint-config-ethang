import compat from "eslint-plugin-compat";

import {
  type CustomRules,
  genRules,
  getNonDeprecatedRules,
} from "./gen-rules.ts";

const ruleNames = Object.keys(getNonDeprecatedRules(compat.rules));
const changedRules: CustomRules = [];

export const compatRules = genRules(ruleNames, changedRules, "compat");
