import { getTypeImportStrings } from "./list-utils.mjs";
import { createConfig } from "./create-config.js";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

export const createConfigFile = async (listConfigs, fileName) => {
  let configFile = "";

  const imports = listConfigs
    .map((list) => {
      const importStrings = getTypeImportStrings(list.name);

      if (list.options?.extraImports?.length > 0) {
        importStrings.push(...list.options.extraImports);
      }

      return importStrings;
    })
    .flat();

  const importList = [
    'import { ignores, languageOptions } from "./constants.js";',
    ...imports,
  ].sort((a, b) => a.localeCompare(b));

  importList.forEach((item) => {
    configFile += `${item}\n`;
  });

  const configs = await Promise.all(
    listConfigs.map((list) => {
      return createConfig(list.name, list.options);
    }),
  );

  configFile += `\nexport default tseslint.config(
    ${configs.join("\n")}
  );\n`;

  writeFileSync(
    join(import.meta.dirname, `../${fileName}`),
    configFile,
    "utf8",
  );
};
