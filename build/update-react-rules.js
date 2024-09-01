import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getLatestReact } from "./get-react-version.mjs";
import { getList, getListImportStrings, getListJson } from "./list-utils.mjs";

export const updateReactRules = async () => {
  let configFile = "";
  const react = await getLatestReact();
  const settings = JSON.stringify({
    react: { version: react.version },
  }).slice(1, -1);

  const reactList = getList("react");
  const json = getListJson(reactList);

  const importList = [
    'import tseslint from "typescript-eslint";',
    'import { languageOptions } from "./eslint.config.js";',
    'import { ignores } from "./constants.js";',
    ...getListImportStrings(reactList),
  ].sort((a, b) => {
    return a.localeCompare(b);
  });

  importList.forEach((item) => {
    configFile += `${item}\n`;
  });

  configFile += `\nexport default tseslint.config({
  files: ["**/*.{jsx,tsx}"],
  ignores,
  languageOptions,
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  settings: {
    ${settings}
  },
  rules: {
    ${json},
  },
});
`;

  writeFileSync(
    join(import.meta.dirname, "../config.react.js"),
    configFile,
    "utf8",
  );
};
