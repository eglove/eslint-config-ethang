import a11y from "eslint-plugin-jsx-a11y";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(a11y.rules ?? {});
const customRules = [
  {
    name: "accessible-emoji",
    rule: "off",
  },
  {
    name: "label-has-for",
    rule: "off",
  },
  {
    name: "media-has-caption",
    rule: "off",
  },
  {
    name: "no-onchange",
    rule: "off",
  },
];

export const a11yRules = genRules(ruleNames, customRules, "a11y");
