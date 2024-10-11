import react from "@eslint-react/eslint-plugin";
// @ts-expect-error no types
import reactHooks from "eslint-plugin-react-hooks";

import { genRules, getNonDeprecatedRules } from "./gen-rules.ts";

// @ts-expect-error ignore types
const reactRuleNames = Object.keys(getNonDeprecatedRules(react.rules));
const customReactRules = [
  {
    name: "avoid-shorthand-boolean",
    rule: "off",
  },
  {
    name: "avoid-shorthand-fragment",
    rule: "off",
  },
  {
    name: "debug/class-component",
    rule: "off",
  },
  {
    name: "debug/function-component",
    rule: "off",
  },
  {
    name: "debug/hook",
    rule: "off",
  },
  {
    name: "debug/is-from-react",
    rule: "off",
  },
  {
    name: "debug/react-hooks",
    rule: "off",
  },
  {
    name: "naming-convention/filename",
    rule: ["error", { rule: "kebab-case" }],
  },
];
const reactGen = genRules(reactRuleNames, customReactRules, "react");

const reactHookRuleNames = Object.keys(reactHooks.rules);
const customHookRules = [
  {
    name: "exhaustive-deps",
    rule: "error",
  },
  {
    name: "rules-of-hooks",
    rule: "error",
  },
];
const hookGen = genRules(reactHookRuleNames, customHookRules, "react-hooks");

export const reactRules = {
  ...reactGen,
};

export const reactHookRules = {
  ...hookGen,
};
