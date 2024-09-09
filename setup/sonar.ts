/* eslint-disable */
import sonar from "eslint-plugin-sonarjs";
import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(sonar.rules);
const customRules = [
  { name: "aws-s3-bucket-server-encryption", rule: "off" },
  { name: "arrow-function-convention", rule: "off" },
  { name: "brace-style", rule: "off" },
  { name: "conditional-indentation", rule: "off" },
  { name: "comment-regex", rule: "off" },
  { name: "cookies", rule: "off" },
  { name: "cyclomatic-complexity", rule: "off" },
  { name: "dns-prefetching", rule: "off" },
  { name: "encryption", rule: "off" },
  { name: "enforce-trailing-comma", rule: "off" },
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
  { name: "no-extra-semi", rule: "off" },
  { name: "no-implicit-dependencies", rule: "off" },
  { name: "no-inconsistent-returns", rule: "off" },
  { name: "no-redundant-parentheses", rule: "off" },
  { name: "no-reference-error", rule: "off" }, // TODO bug: reports globals
  { name: "no-tab", rule: "off" },
  { name: "no-undefined-assignment", rule: "off" },
  { name: "process-argv", rule: "off" },
  { name: "regular-expr", rule: "off" },
  { name: "semi", rule: "off" },
  { name: "shorthand-property-grouping", rule: "off" }, // Conflicts with perfectionist sorting
  { name: "sockets", rule: "off" },
  { name: "sonar-no-fallthrough", rule: "off" }, // TODO readd with v9 compat?
  { name: "sonar-no-magic-numbers", rule: "off" },
  { name: "standard-input", rule: "off" },
  { name: "switch-without-default", rule: "off" }, // @typescript-eslint/switch-exhaustiveness-check works better
  { name: "todo-tag", rule: "off" },
  { name: "useless-string-operation", rule: "off" },
  { name: "web-sql-database", rule: "off" },
  { name: "xpath", rule: "off" },
];

const rules = genRules(ruleNames, customRules, "sonar");

// Turn off duplicate S# rules
for (const key of Object.keys(rules)) {
  if (/^sonar\/S\d+/.test(key)) {
    rules[key] = "off";
  }
}

export const sonarRules = rules;
