import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getList, getListImportStrings, getListJson } from "./list-utils.mjs";

export const updateSolidRules = () => {
  let configFile = "";

  const solidList = getList("solid");
  const json = getListJson(solidList);

  const importList = [
    'import tseslint from "typescript-eslint";',
    'import { ignores, languageOptions } from "./constants.js";',
    ...getListImportStrings(solidList),
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
  plugins: { solid },
  rules: {
    ${json},
  },
});
`;

  writeFileSync(
    join(import.meta.dirname, "../config.solid.js"),
    configFile,
    "utf8",
  );
};
