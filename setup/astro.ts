import astro from "eslint-plugin-astro";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(astro.rules);
const customRules = [
  {
    name: "no-set-html-directive",
    rule: 'off"',
  },
];

export const astroRules = genRules(ruleNames, customRules, "astro");
