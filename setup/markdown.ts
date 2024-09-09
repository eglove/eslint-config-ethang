import markdown from "@eslint/markdown";

import { type CustomRules, genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(markdown.rules ?? {});
const customRules: CustomRules = [];

export const markdownRules = genRules(ruleNames, customRules, "markdown");
