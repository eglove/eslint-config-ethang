import { rules } from "eslint-plugin-exception-handling";
import { EsLintRules, genRules, getNonDeprecatedRules } from "./gen-rules.js";

const ruleNames = Object.keys(
  getNonDeprecatedRules(rules as unknown as EsLintRules),
);

export const exceptionHandlingRules = genRules(
  ruleNames,
  [],
  "exception-handling",
  "off", // TODO fix with https://github.com/Akronae/eslint-plugin-exception-handling/issues/5
);
