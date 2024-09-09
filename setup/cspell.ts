import cspell from "@cspell/eslint-plugin";
import { CustomRules, genRules, getNonDeprecatedRules } from "./gen-rules.js";

const ruleNames = Object.keys(getNonDeprecatedRules(cspell.rules));

const customRules: CustomRules = [];

export const cspellRules = genRules(ruleNames, customRules, "cspell");
