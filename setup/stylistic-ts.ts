import stylisticTs from "@stylistic/eslint-plugin-ts";
import { genRules, getNonDeprecatedRules } from "./gen-rules.js";

const ruleNames = Object.keys(getNonDeprecatedRules(stylisticTs.rules));

const customRules = [
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
  { name: "indent", rule: ["error", 2] },
  {
    name: "no-extra-parens",
    rule: ["error", "all", { ignoreJSX: "multi-line" }],
  },
  {
    name: "object-curly-newline",
    rule: ["error", { multiline: true, consistent: true }],
  },
  { name: "object-curly-spacing", rule: ["error", "always"] },
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
];

export const stylisticTsRules = genRules(
  ruleNames,
  customRules,
  "stylistic-ts",
);
