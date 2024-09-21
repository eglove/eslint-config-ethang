import { a11yRules } from "../setup/a11y.ts";
import { astroRules } from "../setup/astro.ts";
import { barrelRules } from "../setup/barrel.ts";
import { compatRules } from "../setup/compat.ts";
import { dependRules } from "../setup/depend.ts";
import { deprecatedRules } from "../setup/deprecated.ts";
import { eslintRules } from "../setup/eslint.ts";
import { jsonRules } from "../setup/json.ts";
import { lodashRules } from "../setup/lodash.ts";
import { markdownRules } from "../setup/markdown.ts";
import { nRules } from "../setup/n.ts";
import { perfectionistRules } from "../setup/perfectionist.ts";
import { reactHookRules, reactRules } from "../setup/react.ts";
import { solidRules } from "../setup/solid.ts";
import { sonarRules } from "../setup/sonar.ts";
import { stylisticRules } from "../setup/stylistic.ts";
import { tailwindRules } from "../setup/tailwind.ts";
import { tanstackQueryRules } from "../setup/tanstack-query.ts";
import { typescriptRules } from "../setup/typescript-eslint.ts";
import { unicornRules } from "../setup/unicorn.ts";
import { cspellRules } from "../setup/cspell.js";
import { tanstackRouterRules } from "../setup/tanstack-router.js";

export const ruleList = [
  {
    importString: 'import depend from "eslint-plugin-depend";',
    list: dependRules,
    name: "eslint-plugin-depend",
    order: 0,
    pluginName: "depend",
    pluginValue: "depend",
    type: "core",
    url: "https://github.com/es-tooling/eslint-plugin-depend/tree/main",
  },
  {
    importString: 'import barrel from "eslint-plugin-barrel-files";',
    list: barrelRules,
    name: "eslint-plugin-barrel-files",
    order: 1,
    pluginName: "barrel",
    pluginValue: "barrel",
    type: "core",
    url: "https://github.com/thepassle/eslint-plugin-barrel-files",
  },
  {
    importString: 'import compat from "eslint-plugin-compat";',
    list: compatRules,
    name: "eslint-plugin-compat",
    order: 2,
    pluginName: "compat",
    pluginValue: "compat",
    type: "core",
    url: "https://github.com/amilajack/eslint-plugin-compat",
  },
  {
    importString: undefined,
    list: eslintRules,
    name: "@eslint/js",
    order: 3,
    pluginName: undefined,
    pluginValue: undefined,
    type: "core",
    url: "https://github.com/eslint/eslint/tree/main/packages/js",
  },
  {
    importString: 'import n from "eslint-plugin-n";',
    list: nRules,
    name: "eslint-plugin-n",
    order: 4,
    pluginName: "n",
    pluginValue: "n",
    type: "core",
    url: "https://github.com/eslint-community/eslint-plugin-n",
  },
  {
    importString: 'import tseslint from "typescript-eslint";',
    list: typescriptRules,
    name: "@typescript/eslint",
    order: 5,
    pluginName: "@typescript-eslint",
    pluginValue: "tseslint.plugin",
    type: "core",
    url: "https://github.com/typescript-eslint/typescript-eslint",
  },
  {
    importString: 'import unicorn from "eslint-plugin-unicorn";',
    list: unicornRules,
    name: "sindresorhus/eslint-plugin-unicorn",
    order: 6,
    pluginName: "unicorn",
    pluginValue: "unicorn",
    type: "core",
    url: "https://github.com/sindresorhus/eslint-plugin-unicorn",
  },
  {
    importString: 'import lodashConfig from "eslint-plugin-lodash";',
    list: lodashRules,
    name: "eslint-plugin-lodash",
    order: 7,
    pluginName: "lodash",
    pluginValue: "lodashConfig",
    type: "core",
    url: "https://github.com/wix-incubator/eslint-plugin-lodash",
  },
  {
    importString: 'import sonar from "eslint-plugin-sonarjs";',
    list: sonarRules,
    name: "eslint-plugin-sonarjs",
    order: 8,
    pluginName: "sonar",
    pluginValue: "fixupPluginRules(sonar)", // TODO remove with v9 compat
    type: "core",
    url: "https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md",
  },
  {
    importString: 'import tailwind from "eslint-plugin-tailwindcss";',
    list: tailwindRules,
    name: "eslint-plugin-tailwindcss",
    order: 9,
    pluginName: "tailwind",
    pluginValue: "tailwind",
    type: "core",
    url: "https://github.com/francoismassart/eslint-plugin-tailwindcss",
  },
  {
    importString: 'import stylistic from "@stylistic/eslint-plugin";',
    list: stylisticRules,
    name: "@stylistic/eslint-plugin",
    order: 10,
    pluginName: "stylistic",
    pluginValue: "stylistic",
    type: "core",
    url: "https://eslint.style/",
  },
  {
    importString: 'import perfectionist from "eslint-plugin-perfectionist";',
    list: perfectionistRules,
    name: "eslint-plugin-perfectionist",
    order: 11,
    pluginName: "perfectionist",
    pluginValue: "perfectionist",
    type: "core",
    url: "https://github.com/azat-io/eslint-plugin-perfectionist",
  },
  {
    importString: 'import tanstackQuery from "@tanstack/eslint-plugin-query";',
    list: tanstackQueryRules,
    name: "@tanstack/eslint-plugin-query",
    order: 12,
    pluginName: "@tanstack/query",
    pluginValue: "tanstackQuery",
    type: "core",
    url: "https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query",
  },
  {
    importString:
      'import tanstackRouter from "@tanstack/eslint-plugin-router";',
    list: tanstackRouterRules,
    name: "@tanstack/eslint-plugin-router",
    order: 13,
    pluginName: "@tanstack/router",
    pluginValue: "tanstackRouter",
    type: "core",
    url: "https://tanstack.com/router/latest/docs/eslint/eslint-plugin-router",
  },
  {
    importString: 'import a11y from "eslint-plugin-jsx-a11y/lib/index.js";',
    list: a11yRules,
    name: "jsx-a11y",
    order: 14,
    pluginName: "a11y",
    pluginValue: "a11y",
    type: "core",
    url: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y",
  },
  {
    importString: undefined,
    list: deprecatedRules,
    name: "@eslint/js",
    order: 15,
    pluginName: undefined,
    pluginValue: undefined,
    type: "core",
    url: "https://github.com/eslint/eslint/tree/main/packages/js",
  },
  {
    importString: 'import markdown from "@eslint/markdown";',
    list: markdownRules,
    name: "@eslint/markdown",
    order: 0,
    pluginName: "markdown",
    pluginValue: "markdown",
    type: "markdown",
    url: "https://github.com/eslint/markdown",
  },
  {
    importString: 'import json from "@eslint/json";',
    list: jsonRules,
    name: "@eslint/json",
    order: 0,
    pluginName: "json",
    pluginValue: "json",
    type: "json",
    url: "https://github.com/eslint/json",
  },
  {
    importString: 'import astro from "eslint-plugin-astro";',
    list: astroRules,
    name: "eslint-plugin-astro",
    pluginName: "astro",
    pluginValue: "astro",
    type: "astro",
    url: "https://github.com/ota-meshi/eslint-plugin-astro",
  },
  {
    importString: 'import react from "@eslint-react/eslint-plugin";',
    list: reactRules,
    name: "@eslint-react/eslint-plugin",
    pluginName: "react",
    pluginValue: "react",
    type: "react",
    url: "https://eslint-react.xyz/",
  },
  {
    importString: 'import reactHooks from "eslint-plugin-react-hooks";',
    list: reactHookRules,
    name: "eslint-plugin-react-hooks",
    pluginName: "react-hooks",
    pluginValue: "fixupPluginRules(reactHooks)", // TODO remove with v9 compat
    type: "react",
    url: "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
  },
  {
    importString: 'import solid from "eslint-plugin-solid";',
    list: solidRules,
    name: "eslint-plugin-solid",
    pluginName: "solid",
    pluginValue: "solid",
    type: "solid",
    url: "https://github.com/solidjs-community/eslint-plugin-solid",
  },
  {
    importString: 'import cspell from "@cspell/eslint-plugin";',
    list: cspellRules,
    name: "@cspell/eslint-plugin",
    pluginName: "cspell",
    pluginValue: "cspell",
    type: "core",
    url: "https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin",
  },
];
