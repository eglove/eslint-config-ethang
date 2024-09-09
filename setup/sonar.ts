/* eslint-disable */
import sonar from "eslint-plugin-sonarjs";
import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

const ruleNames = Object.keys(getNonDeprecatedRules(sonar.rules));
const customRules = [
  { name: "arrow-function-convention", rule: "off" },
  { name: "comment-regex", rule: "off" },
  { name: "cyclomatic-complexity", rule: "off" },
  { name: "file-header", rule: "off" },
  {
    name: "function-name",
    rule: [
      "error",
      {
        format: "^(?:[a-z][a-zA-Z0-9]*|[A-Z][A-Z0-9]*)$",
      },
    ],
  },
  { name: "function-return-type", rule: "off" },
  { name: "max-union-size", rule: "off" },
  { name: "new-cap", rule: "off" },
  { name: "no-implicit-dependencies", rule: "off" },
  { name: "no-inconsistent-returns", rule: "off" },
  { name: "no-reference-error", rule: "off" }, // TODO bug: reports globals
  { name: "no-undefined-assignment", rule: "off" },
  { name: "shorthand-property-grouping", rule: "off" }, // Conflicts with perfectionist sorting
  { name: "sonar-no-fallthrough", rule: "off" }, // TODO readd with v9 compat?
  { name: "sonar-no-magic-numbers", rule: "off" },
  { name: "switch-without-default", rule: "off" }, // @typescript-eslint/switch-exhaustiveness-check works better
  { name: "todo-tag", rule: "off" },
];

const rules = genRules(ruleNames, customRules, "sonar");

// Turn off duplicate S# rules
for (const key of Object.keys(rules)) {
  if (/^sonar\/S\d+/.test(key)) {
    rules[key] = "off";
  }
}

export const sonarRules = rules;
