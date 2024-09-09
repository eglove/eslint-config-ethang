// @ts-expect-error no types
import lodash from "eslint-plugin-lodash";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(lodash.rules);
const customRules = [
  {
    name: "chain-style",
    rule: ["error", "as-needed"],
  },
  {
    name: "consistent-compose",
    rule: ["error", "flow"],
  },
  {
    name: "identity-shorthand",
    rule: ["error", "always"],
  },
  {
    name: "import-scope",
    rule: ["error", "method"],
  },
  {
    name: "matches-prop-shorthand",
    rule: ["error", "always"],
  },
  {
    name: "matches-shorthand",
    rule: ["error", "always", 3],
  },
  {
    name: "path-style",
    rule: ["error", "array"],
  },
  {
    name: "prefer-includes",
    rule: ["error", { includeNative: true }],
  },
  {
    name: "prefer-some",
    rule: ["error", { includeNative: true }],
  },
  {
    name: "prop-shorthand",
    rule: ["error", "always"],
  },
];

export const lodashRules = genRules(ruleNames, customRules, "lodash");
