import solid from "eslint-plugin-solid";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(solid.rules);
const customRules = [
  { name: "no-proxy-apis", rule: "off" },
  { name: "prefer-classlist", rule: "off" },
];

export const solidRules = genRules(ruleNames, customRules, "solid");
