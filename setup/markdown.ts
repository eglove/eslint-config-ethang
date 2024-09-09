import markdown from "@eslint/markdown";

import {
  type CustomRules,
  genRules,
  getNonDeprecatedRules,
} from "./gen-rules.ts";

const ruleNames = Object.keys(getNonDeprecatedRules(markdown.rules ?? {}));
const customRules: CustomRules = [];

export const markdownRules = genRules(ruleNames, customRules, "markdown");
