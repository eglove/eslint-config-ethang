import { rules } from "eslint-plugin-exception-handling";
import { EsLintRules, genRules, getNonDeprecatedRules } from "./gen-rules.js";

const ruleNames = Object.keys(
  getNonDeprecatedRules(rules as unknown as EsLintRules),
);

export const exceptionHandlingRules = genRules(
  ruleNames,
  [],
  "exception-handling",
);
