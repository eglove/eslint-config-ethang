import a11y from "eslint-plugin-jsx-a11y";

import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

const ruleNames = Object.keys(getNonDeprecatedRules(a11y.rules ?? {}));
const customRules = [
  {
    // throws false positives
    name: "control-has-associated-label",
    rule: "off",
  },
  {
    name: "media-has-caption",
    rule: "off",
  },
];

export const a11yRules = genRules(ruleNames, customRules, "a11y");
