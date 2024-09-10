import cspell from "@cspell/eslint-plugin";
import { CustomRules, genRules, getNonDeprecatedRules } from "./gen-rules.js";

const ruleNames = Object.keys(getNonDeprecatedRules(cspell.rules));

const customRules: CustomRules = [
  {
    name: "spellchecker",
    rule: [
      "error",
      {
        cspell: {
          words: [
            "ethang",
            "TSESTree",
            "Boop",
            "cldr",
            "astro",
            "laravel",
            "qwik",
            "sitecore",
            "uswds",
            "mediat",
            "Packt",
            "Academind",
            "Udemy",
            "Colte",
            "Bootcamp",
            "HTMX",
            "MERN",
            "Nuxt",
            "Credly",
            "Sterett",
            "Beyonder",
            "hotspot",
            "lqip",
            "Hawn",
          ],
        },
      },
    ],
  },
];

export const cspellRules = genRules(ruleNames, customRules, "cspell");
