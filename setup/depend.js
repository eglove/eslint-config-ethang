/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import depend from "eslint-plugin-depend";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(depend.rules);
const changedRules = [
  { name: "ban-dependencies", rule: ["error", { allowed: ["lodash"] }] },
];

export const dependRules = genRules(ruleNames, changedRules, "depend");
