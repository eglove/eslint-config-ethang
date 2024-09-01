import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getLatestReact } from "./get-react-version.mjs";
import { getListImportStrings, getList, getListJson } from "./list-utils.mjs";

export const updateRules = async () => {
  let configFile = "";
  const react = await getLatestReact();
  const settings = JSON.stringify({
    react: { version: react.version },
  }).slice(1, -1);

  const coreList = getList("core");
  const jsRulesJon = getListJson(coreList);

  const markdownList = getList("markdown");
  const markdownRulesJson = getListJson(markdownList);

  const jsonList = getList("json");
  const jsonRulesJson = getListJson(jsonList);

  const importList = [
    'import parser from "@typescript-eslint/parser";',
    'import { ignores, languageOptions } from "./constants.js";',
    ...getListImportStrings(markdownList),
    ...getListImportStrings(jsonList),
    ...getListImportStrings(coreList),
  ].sort((a, b) => {
    return a.localeCompare(b);
  });

  importList.forEach((item) => {
    configFile += `${item}\n`;
  });

  configFile += `\nexport default tseslint.config(
  {
    files: ["**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}"],
    ignores,
    languageOptions,
    settings: {
      ${settings}
    },
    plugins: {
      "@tanstack/query": tanstack,
      "@typescript-eslint": tseslint.plugin,
      a11y,
      barrel,
      compat,
      depend,
      ethang,
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

  writeFileSync(
    join(import.meta.dirname, "../eslint.config.js"),
    configFile,
    "utf8",
  );
};
