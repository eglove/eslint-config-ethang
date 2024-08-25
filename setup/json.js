import json from "@eslint/json";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(json.rules);
const customRules = [];

export const jsonRules = genRules(ruleNames, customRules, "json");
