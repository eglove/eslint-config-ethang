import unicorn from "eslint-plugin-unicorn";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(unicorn.rules ?? {});
const customRules = [
  {
    name: "empty-brace-spaces",
    rule: "off",
  },
  {
    name: "explicit-length-check",
    rule: "off",
  },
  {
    name: "no-keyword-prefix",
    rule: "off",
  },
  {
    name: "no-nested-ternary",
    rule: "off",
  },
  {
    name: "no-null",
    rule: "off",
  },
  {
    name: "number-literal-case",
    rule: "off",
  },
  {
    name: "template-indent",
    rule: "off",
  },
  {
    name: "import-index",
    rule: "off",
  },
  {
    name: "no-array-instanceof",
    rule: "off",
  },
  {
    name: "no-fn-reference-in-iterator",
    rule: "off",
  },
  {
    name: "no-reduce",
    rule: "off",
  },
  {
    name: "no-unsafe-regex",
    rule: "off",
  },
  {
    name: "prefer-dataset",
    rule: "off",
  },
  {
    name: "prefer-event-key",
    rule: "off",
  },
  {
    name: "prefer-exponentiation-operator",
    rule: "off",
  },
  {
    name: "prefer-flat-map",
    rule: "off",
  },
  {
    name: "prefer-node-append",
    rule: "off",
  },
  {
    name: "prefer-node-remove",
    rule: "off",
  },
  {
    name: "prefer-object-has-own",
    rule: "off",
  },
  {
    name: "prefer-replace-all",
    rule: "off",
  },
  {
    name: "prefer-starts-ends-with",
    rule: "off",
  },
  {
    name: "prefer-text-content",
    rule: "off",
  },
  {
    name: "prefer-trim-start-end",
    rule: "off",
  },
  {
    name: "regex-shorthand",
    rule: "off",
  },
];

export const unicornRules = genRules(ruleNames, customRules, "unicorn");
