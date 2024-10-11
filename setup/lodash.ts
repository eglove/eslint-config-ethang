// @ts-expect-error no types
import lodash from "eslint-plugin-lodash";

import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

const ruleNames = Object.keys(getNonDeprecatedRules(lodash.rules));
const customRules = [
  {
    name: "chain-style",
    rule: [2, "as-needed"],
  },
  {
    name: "consistent-compose",
    rule: [2, "flow"],
  },
  {
    name: "identity-shorthand",
    rule: [2, "always"],
  },
  {
    name: "import-scope",
    rule: [2, "method"],
  },
  {
    name: "matches-prop-shorthand",
    rule: [2, "always"],
  },
  {
    name: "matches-shorthand",
    rule: [2, "always", 3],
  },
  {
    name: "path-style",
    rule: [2, "array"],
  },
  {
    name: "prefer-includes",
    rule: [2, { includeNative: true }],
  },
  {
    name: "prefer-some",
    rule: [2, { includeNative: true }],
  },
  {
    name: "prop-shorthand",
    rule: [2, "always"],
  },
];

export const lodashRules = genRules(ruleNames, customRules, "lodash");
