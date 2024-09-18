import tanstack from "@tanstack/eslint-plugin-router";
import { genRules, getNonDeprecatedRules } from "./gen-rules.js";

// @ts-expect-error it's fine
const ruleNames = Object.keys(getNonDeprecatedRules(tanstack.rules));

export const tanstackRouterRules = genRules(ruleNames, [], "@tanstack/router");
