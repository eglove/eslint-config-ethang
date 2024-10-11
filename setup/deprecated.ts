import { type CustomRules, genRules } from "./gen-rules.ts";
import { builtinRules } from "eslint/use-at-your-own-risk";

let ruleNames: string[] = [];
[...builtinRules.entries()].forEach(([key, rule]) => {
  if (rule.meta?.deprecated === true) {
    ruleNames.push(key);
  }
});

const customRules: CustomRules = [];

export const deprecatedRules = genRules(
  ruleNames,
  customRules,
  undefined,
  "off",
);
