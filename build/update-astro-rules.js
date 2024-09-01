import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getListImportStrings, getList, getListJson } from "./list-utils.mjs";

export const updateAstroRules = () => {
  let configFile = "";

  const astroList = getList("astro");
  const json = getListJson(astroList);

  const importList = [
    'import tseslint from "typescript-eslint";',
    'import { languageOptions } from "./eslint.config.js";',
    'import { ignores } from "./constants.js";',
    ...getListImportStrings(astroList),
  ].sort((a, b) => {
    return a.localeCompare(b);
  });

  importList.forEach((item) => {
    configFile += `${item}\n`;
  });

  configFile += `\nexport default tseslint.config({
  files: ["**/*.{astro}"],
  ignores,
  languageOptions,
  plugins: { astro },
  rules: {
    ${json}
  },
});
`;

  writeFileSync(
    join(import.meta.dirname, "../config.astro.js"),
    configFile,
    "utf8",
  );
};
