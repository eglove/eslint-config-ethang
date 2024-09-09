import solid from "eslint-plugin-solid";

import { EsLintRules, genRules, getNonDeprecatedRules } from "./gen-rules.ts";

const ruleNames = Object.keys(
  getNonDeprecatedRules(solid.rules as unknown as EsLintRules),
);
const customRules = [
  {
    name: "no-proxy-apis",
    rule: "off",
  },
];

export const solidRules = genRules(ruleNames, customRules, "solid");
