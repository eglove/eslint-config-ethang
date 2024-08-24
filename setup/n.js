/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import n from "eslint-plugin-n";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(n.rules);
const changedRules = [
  { name: "callback-return", rule: "off" },
  { name: "exports-style", rule: ["error", "exports"] },
  { name: "file-extension-in-import", rule: "off" },
  { name: "global-require", rule: "off" },
  { name: "no-callback-literal", rule: "off" },
  { name: "no-missing-import", rule: "off" },
  { name: "no-mixed-requires", rule: "off" },
  { name: "no-new-require", rule: "off" },
  { name: "no-process-env", rule: "off" },
  { name: "no-process-exit", rule: "off" },
  { name: "no-restricted-import", rule: "off" },
  { name: "no-restricted-require", rule: "off" },
  { name: "no-sync", rule: "off" },
  { name: "no-unpublished-import", rule: "off" },
  { name: "no-unpublished-require", rule: "off" },
  { name: "prefer-promises/dns", rule: "off" },
  { name: "prefer-promises/fs", rule: "off" },
  { name: "process-exit-as-throw", rule: "off" },
  { name: "hashbang", rule: "off" },
  { name: "no-hide-core-modules", rule: "off" },
  { name: "shebang", rule: "off" },
];

export const nRules = genRules(ruleNames, changedRules, "n");
