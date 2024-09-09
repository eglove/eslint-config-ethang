import depend from "eslint-plugin-depend";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(depend.rules);
const changedRules = [
  {
    name: "ban-dependencies",
    rule: ["error", { allowed: ["lodash"] }],
  },
];

export const dependRules = genRules(ruleNames, changedRules, "depend");
