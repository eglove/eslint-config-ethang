import eslint from "@eslint/js";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(eslint.configs.all.rules);
const changedRules = [
  {
    name: "arrow-body-style",
    rule: ["error", "always"],
  },
  {
    name: "camelcase",
    rule: "off",
  },
  {
    name: "capitalized-comments",
    rule: "off",
  },
  {
    name: "class-methods-use-this",
    rule: "off",
  },
  {
    name: "complexity",
    rule: "off",
  },
  {
    name: "consistent-return",
    rule: "off",
  },
  {
    name: "consistent-this",
    rule: "off",
  },
  {
    name: "curly",
    rule: "off",
  },
  {
    name: "default-case",
    rule: "off",
  },
  {
    name: "default-case-last",
    rule: "off",
  },
  {
    name: "default-param-last",
    rule: "off",
  },
  {
    name: "dot-notation",
    rule: "off",
  },
  {
    name: "func-names",
    rule: "off",
  },
  {
    name: "func-style",
    rule: ["error", "declaration", { allowArrowFunctions: true }],
  },
  {
    name: "id-denylist",
    rule: "off",
  },
  {
    name: "id-length",
    rule: "off",
  },
  {
    name: "id-match",
    rule: "off",
  },
  {
    name: "init-declarations",
    rule: "off",
  },
  {
    name: "max-lines",
    rule: "off",
  },
  {
    name: "max-lines-per-function",
    rule: "off",
  },
  {
    name: "max-params",
    rule: "off",
  },
  {
    name: "new-cap",
    rule: "off",
  },
  {
    name: "no-array-constructor",
    rule: "off",
  },
  {
    name: "no-dupe-class-members",
    rule: "off",
  },
  {
    name: "no-empty-function",
    rule: "off",
  },
  {
    name: "no-implicit-globals",
    rule: "off",
  },
  {
    name: "no-implied-eval",
    rule: "off",
  },
  {
    name: "no-inline-comments",
    rule: "off",
  },
  {
    name: "no-magic-numbers",
    rule: "off",
  },
  {
    name: "no-redeclare",
    rule: "off",
  },
  {
    name: "no-restricted-exports",
    rule: "off",
  },
  {
    name: "no-restricted-globals",
    rule: "off",
  },
  {
    name: "no-restricted-imports",
    rule: "off",
  },
  {
    name: "no-restricted-properties",
    rule: "off",
  },
  {
    name: "no-restricted-syntax",
    rule: "off",
  },
  {
    name: "no-shadow",
    rule: "off",
  },
  {
    name: "no-template-curly-in-string",
    rule: "off",
  },
  {
    name: "no-ternary",
    rule: "off",
  },
  {
    name: "no-throw-literal",
    rule: "off",
  },
  {
    name: "no-undef",
    rule: "off",
  },
  {
    name: "no-undefined",
    rule: "off",
  },
  {
    name: "no-underscore-dangle",
    rule: "off",
  },
  {
    name: "no-unexpected-multiline",
    rule: "off",
  },
  {
    name: "no-unsafe-optional-chaining",
    rule: ["error", { disallowArithmeticOperators: true }],
  },
  {
    name: "no-unused-expressions",
    rule: "off",
  },
  {
    name: "no-unused-vars",
    rule: "off",
  },
  {
    name: "no-use-before-define",
    rule: "off",
  },
  {
    name: "no-useless-assignment",
    rule: "off",
  },
  {
    name: "no-useless-constructor",
    rule: "off",
  },
  {
    name: "no-warning-comments",
    rule: "off",
  },
  {
    name: "one-var",
    rule: "off",
  },
  {
    name: "prefer-destructuring",
    rule: "off",
  },
  {
    name: "prefer-promise-reject-errors",
    rule: "off",
  },
  {
    name: "require-await",
    rule: "off",
  },
  {
    name: "sort-imports",
    rule: "off",
  },
  {
    name: "sort-keys",
    rule: "off",
  },
  {
    name: "yoda",
    rule: ["error", "always"],
  },
];

export const eslintRules = genRules(ruleNames, changedRules);
