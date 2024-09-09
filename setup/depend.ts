import depend from "eslint-plugin-depend";

import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

const ruleNames = Object.keys(getNonDeprecatedRules(depend.rules));
const changedRules = [
  {
    name: "ban-dependencies",
    rule: ["error", { allowed: ["lodash"] }],
  },
];

export const dependRules = genRules(ruleNames, changedRules, "depend");
