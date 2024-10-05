/* eslint-disable */
import stylistic from "@stylistic/eslint-plugin";
import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

// @ts-expect-error this exists
const ruleNames = Object.keys(getNonDeprecatedRules(stylistic.rules));
const customRules = [
  { name: "block-spacing", rule: "off" }, // TS
  { name: "brace-style", rule: "off" }, // TS
  { name: "comma-dangle", rule: "off" }, // TS
  { name: "comma-spacing", rule: "off" }, // TS
  { name: "func-call-spacing", rule: "off" }, // TS
  { name: "function-call-spacing", rule: "off" }, // TS
  { name: "indent", rule: "off" }, // TS
  { name: "keyword-spacing", rule: "off" }, // TS
  { name: "lines-around-comment", rule: "off" }, // TS
  { name: "lines-between-class-members", rule: "off" }, // TS
  { name: "member-delimiter-style", rule: "off" }, // TS
  { name: "no-extra-parens", rule: "off" }, // TS
  { name: "no-extra-semi", rule: "off" }, // TS
  { name: "object-curly-newline", rule: "off" }, // TS
  { name: "object-curly-spacing", rule: "off" }, // TS
  { name: "object-property-newline", rule: "off" }, // TS
  { name: "padding-line-between-statements", rule: "off" }, // TS
  { name: "quote-props", rule: "off" }, // TS
  { name: "quotes", rule: "off" }, // TS
  { name: "semi", rule: "off" }, // TS
  { name: "space-before-blocks", rule: "off" }, // TS
  { name: "space-before-function-paren", rule: "off" }, // TS
  { name: "space-infix-ops", rule: "off" }, // TS
  { name: "type-annotation-spacing", rule: "off" }, // TS

  { name: "array-bracket-newline", rule: ["error", "consistent"] },
  { name: "array-element-newline", rule: ["error", "consistent"] },
  { name: "dot-location", rule: ["error", "property"] },
  { name: "function-call-argument-newline", rule: ["error", "consistent"] },
  { name: "function-paren-newline", rule: ["error", "consistent"] },
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
    name: "no-multiple-empty-lines",
    rule: { max: 1, maxEOF: 1, maxBOF: 0 },
  },
  { name: "padded-blocks", rule: ["error", "never"] },
  { name: "jsx-indent-props", rule: ["error", 2] },
  { name: "jsx-newline", rule: ["error", { prevent: true }] },
  { name: "jsx-sort-props", rule: "off" },
  {
    name: "jsx-wrap-multilines",
    rule: ["error", { declaration: "parens-new-line" }],
  },
];

export const stylisticRules = genRules(ruleNames, customRules, "stylistic");
