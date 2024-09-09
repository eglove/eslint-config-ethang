import json from "@eslint/json";

import {
  type CustomRules,
  genRules,
  getNonDeprecatedRules,
  type EsLintRules,
} from "./gen-rules.ts";

const ruleNames = Object.keys(
  getNonDeprecatedRules(json.rules as unknown as EsLintRules),
);
const customRules: CustomRules = [];

export const jsonRules = genRules(ruleNames, customRules, "json");
