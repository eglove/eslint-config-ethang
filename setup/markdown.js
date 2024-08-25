import markdown from "@eslint/markdown";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(markdown.rules);
const customRules = [];

export const markdownRules = genRules(ruleNames, customRules, "markdown");
