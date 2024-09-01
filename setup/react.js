import react from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import { genRules } from "./gen-rules.js";

const reactRuleNames = Object.keys(react.rules);
const customReactRules = [
  { name: "avoid-shorthand-boolean", rule: "off" },
  { name: "avoid-shorthand-fragment", rule: "off" },
  { name: "debug/class-component", rule: "off" },
  { name: "debug/function-component", rule: "off" },
  { name: "debug/is-from-react", rule: "off" },
  { name: "debug/react-hooks", rule: "off" },
  {
    name: "naming-convention/filename",
    rule: ["error", { rule: "kebab-case" }],
  },
];
const reactGen = genRules(reactRuleNames, customReactRules, "react");

const reactHookRuleNames = Object.keys(reactHooks.rules);
const customHookRules = [
  { name: "exhaustive-deps", rule: "off" }, // TODO fix w/ v9 compatibility
  { name: "rules-of-hooks", rule: "off" }, // TODO fix w/ v9 compatibility
];
const hookGen = genRules(reactHookRuleNames, customHookRules, "react-hooks");

export const reactRules = {
  ...reactGen,
};

export const reactHookRules = {
  ...hookGen,
};
