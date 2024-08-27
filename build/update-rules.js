import { dependRules } from "../setup/depend.js";
import { barrelRules } from "../setup/barrel.js";
import { compatRules } from "../setup/compat.js";
import { eslintRules } from "../setup/eslint.js";
import { nRules } from "../setup/n.js";
import { typescriptRules } from "../setup/typescript-eslint.js";
import { unicornRules } from "../setup/unicorn.js";
import { lodashRules } from "../setup/lodash.js";
import { sonarRules } from "../setup/sonar.js";
import { tanstackQueryRules } from "../setup/tanstack-query.js";
import { tailwindRules } from "../setup/tailwind.js";
import { stylisticRules } from "../setup/stylistic.js";
import { perfectionistRules } from "../setup/perfectionist.js";
import { a11yRules } from "../setup/a11y.js";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { deprecatedRules } from "../setup/deprecated.js";
import { markdownRules } from "../setup/markdown.js";
import { jsonRules } from "../setup/json.js";

export const updateRules = async () => {
  let configFile = "";

  const jsRules = {
    ...dependRules,
    ...barrelRules,
    ...compatRules,
    ...eslintRules,
    ...nRules,
    ...typescriptRules,
    ...unicornRules,
    ...lodashRules,
    ...sonarRules,
    ...tanstackQueryRules,
    ...tailwindRules,
    ...stylisticRules,
    ...perfectionistRules,
    ...a11yRules,
    ...deprecatedRules,
  };

  const jsRulesJon = JSON.stringify(jsRules).slice(1, -1);
  const markdownRulesJson = JSON.stringify(markdownRules).slice(1, -1);
  const jsonRulesJson = JSON.stringify(jsonRules).slice(1, -1);

  const importList = [
    'import parser from "@typescript-eslint/parser";',
    'import a11y from "eslint-plugin-jsx-a11y/lib/index.js";',
    'import n from "eslint-plugin-n";',
    'import unicorn from "eslint-plugin-unicorn";',
    'import tseslint from "typescript-eslint";',
    'import sonar from "eslint-plugin-sonarjs";',
    'import tanstack from "@tanstack/eslint-plugin-query";',
    'import perfectionist from "eslint-plugin-perfectionist";',
    'import depend from "eslint-plugin-depend";',
    'import barrel from "eslint-plugin-barrel-files";',
    'import compat from "eslint-plugin-compat";',
    'import lodashConfig from "eslint-plugin-lodash";',
    'import tailwind from "eslint-plugin-tailwindcss";',
    'import stylistic from "@stylistic/eslint-plugin";',
    'import markdown from "@eslint/markdown";',
    'import json from "@eslint/json";',
    'import { ignores } from "./constants.js";',
  ].sort((a, b) => {
    return a.localeCompare(b);
  });

  importList.forEach((item) => {
    configFile += `${item}\n`;
  });

  configFile += `\nexport const languageOptions = {
  parser,
  parserOptions: {
    project: true,
    tsconfigRootDir: import.meta.dirname,
  },
};

export default tseslint.config(
  {
    files: ["**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}"],
    ignores,
    languageOptions,
    plugins: {
      "@tanstack/query": tanstack,
      "@typescript-eslint": tseslint.plugin,
      a11y,
      barrel,
      compat,
      depend,
      lodash: lodashConfig,
      n,
      perfectionist,
      sonar,
      stylistic,
      tailwind,
      unicorn,
    },
    rules: {
      ${jsRulesJon}
    },
  },
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    rules: {
      ${markdownRulesJson}
    },
  },
  {
    files: ["**/*.{json,jsonc,json5}"],
    plugins: { json },
    rules: {
      ${jsonRulesJson}
    },
  },
);\n`;

  await writeFileSync(
    join(import.meta.dirname, "../eslint.config.js"),
    configFile,
    "utf8",
  );
};
