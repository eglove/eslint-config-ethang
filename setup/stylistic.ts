/* eslint-disable */
import stylistic from "@stylistic/eslint-plugin";
import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

// @ts-expect-error this exists
const ruleNames = Object.keys(getNonDeprecatedRules(stylistic.rules));
const customRules = [
  { name: "array-bracket-newline", rule: ["error", "consistent"] },
  { name: "array-element-newline", rule: ["error", "consistent"] },
  {
    name: "comma-dangle",
    rule: [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        enums: "never",
        generics: "never",
        tuples: "never",
      },
    ],
  },
  { name: "dot-location", rule: ["error", "property"] },
  { name: "function-call-argument-newline", rule: ["error", "consistent"] },
  { name: "function-paren-newline", rule: ["error", "consistent"] },
  { name: "indent", rule: ["error", 2] },
  { name: "line-comment-position", rule: "off" },
  {
    name: "max-len",
    rule: [
      "error",
      {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  { name: "multiline-comment-style", rule: "off" },
  {
    name: "no-extra-parens",
    rule: ["error", "all", { ignoreJSX: "multi-line" }],
  },
  {
    name: "object-curly-newline",
    rule: ["error", { multiline: true, consistent: true }],
  },
  { name: "object-curly-spacing", rule: ["error", "always"] },
  { name: "padded-blocks", rule: ["error", "never"] },
  { name: "quote-props", rule: ["error", "as-needed"] },
  {
    name: "space-before-function-paren",
    rule: [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
  { name: "jsx-indent-props", rule: ["error", 2] },
  { name: "jsx-newline", rule: ["error", { prevent: true }] },
  { name: "jsx-sort-props", rule: "off" },
  {
    name: "jsx-wrap-multilines",
    rule: ["error", { declaration: "parens-new-line" }],
  },
];

export const stylisticRules = genRules(ruleNames, customRules, "stylistic");
