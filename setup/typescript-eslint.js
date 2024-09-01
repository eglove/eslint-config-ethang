import tseslint from "typescript-eslint";

import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(tseslint.plugin.rules);
const customRules = [
  {
    name: "adjacent-overload-signatures",
    rule: "off",
  },
  {
    name: "class-methods-use-this",
    rule: "off",
  },
  {
    name: "consistent-return",
    rule: "off",
  },
  {
    name: "consistent-type-definitions",
    rule: ["error", "type"],
  },
  {
    name: "consistent-type-imports",
    rule: ["error", { fixStyle: "inline-type-imports" }],
  },
  {
    name: "explicit-function-return-type",
    rule: "off",
  },
  {
    name: "explicit-module-boundary-types",
    rule: "off",
  },
  {
    name: "init-declarations",
    rule: "off",
  },
  {
    name: "member-ordering",
    rule: "off",
  },
  {
    name: "naming-convention",
    rule: "off",
  },
  {
    name: "no-dupe-class-members",
    rule: "off",
  },
  {
    name: "no-empty-interface",
    rule: "off",
  },
  {
    name: "no-invalid-this",
    rule: "off",
  },
  {
    name: "no-loss-of-precision",
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
    name: "no-type-alias",
    rule: "off",
  },
  {
    name: "no-use-before-define",
    rule: "off",
  },
  {
    name: "no-var-requires",
    rule: "off",
  },
  {
    name: "parameter-properties",
    rule: "off",
  },
  {
    name: "prefer-readonly-parameter-types",
    rule: "off",
  },
  {
    name: "prefer-ts-expect-error",
    rule: "off",
  },
  {
    name: "sort-type-constituents",
    rule: "off",
  },
  {
    name: "typedef",
    rule: "off",
  },
  {
    name: "max-params",
    rule: "off",
  },
  {
    name: "no-unused-vars",
    rule: [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
      },
    ],
  },
];

export const typescriptRules = genRules(
  ruleNames,
  customRules,
  "@typescript-eslint",
);
