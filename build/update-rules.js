import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getLatestReact } from "./get-react-version.js";
import {
  getListImportStrings,
  getList,
  getListJson,
  getTypeFiles,
  getListPlugins,
} from "./list-utils.mjs";

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
    files: ["${getTypeFiles("core")}"],
    ignores,
    languageOptions,
    settings: {
      ${settings}
    },
    plugins: {
      ${getListPlugins(coreList)}
    },
    rules: {
      ${jsRulesJon}
    },
  },
  {
    files: ["${getTypeFiles("markdown")}"],
    plugins: {
      ${getListPlugins(markdownList)}
    },
    rules: {
      ${markdownRulesJson}
    },
  },
  {
    files: ["${getTypeFiles("json")}"],
    plugins: { ${getListPlugins(jsonList)} },
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
