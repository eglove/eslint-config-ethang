import markdown from "@eslint/markdown";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(markdown.rules);
const customRules = [];

console.log(ruleNames);

export const markdownRules = genRules(ruleNames, customRules, "markdown");
