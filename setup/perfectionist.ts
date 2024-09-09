import perfectionist from "eslint-plugin-perfectionist";

import { EsLintRules, genRules, getNonDeprecatedRules } from "./gen-rules.ts";

const ruleNames = Object.keys(
  getNonDeprecatedRules(perfectionist.rules as unknown as EsLintRules),
);
const customRules = [
  {
    name: "sort-astro-attributes",
    rule: [
      "error",
      {
        groups: ["astro-shorthand", "shorthand", "multiline"],
      },
    ],
  },
  {
    name: "sort-imports",
    rule: [
      "error",
      {
        groups: [
          "type",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],
        newlinesBetween: "always",
      },
    ],
  },
  {
    name: "sort-jsx-props",
    rule: ["error", { groups: ["shorthand", "multiline"] }],
  },
  {
    name: "sort-svelte-attributes",
    rule: [
      "error",
      {
        groups: ["svelte-shorthand", "shorthand", "multiline"],
      },
    ],
  },
  {
    name: "sort-switch-case",
    rule: [
      "error",
      {
        order: "asc",
        type: "alphabetical",
      },
    ],
  },
  {
    name: "sort-variable-declarations",
    rule: [
      "error",
      {
        order: "asc",
        type: "alphabetical",
      },
    ],
  },
  {
    name: "sort-vue-attributes",
    rule: ["error", { groups: ["shorthand", "multiline"] }],
  },
];

export const perfectionistRules = genRules(
  ruleNames,
  customRules,
  "perfectionist",
);
