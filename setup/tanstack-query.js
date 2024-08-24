/* eslint-disable */
import tanstack from "@tanstack/eslint-plugin-query";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(tanstack.rules);

export const tanstackQueryRules = genRules(ruleNames, [], "@tanstack/query");
