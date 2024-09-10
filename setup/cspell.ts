import cspell from "@cspell/eslint-plugin";
import { CustomRules, genRules, getNonDeprecatedRules } from "./gen-rules.js";

const ruleNames = Object.keys(getNonDeprecatedRules(cspell.rules));

const customRules: CustomRules = [
  {
    name: "spellchecker",
    rule: ["error", { words: ["ethang"] }],
  },
];

export const cspellRules = genRules(ruleNames, customRules, "cspell");
