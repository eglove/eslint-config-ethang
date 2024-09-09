import { writeFileSync } from "node:fs";
import { join } from "node:path";

import type { ConfigFile } from "./update-rules.ts";

import { createConfig } from "./create-config.ts";
import { getTypeImportStrings } from "./list-utils.ts";

export const createConfigFile = async (
  listConfigs: ConfigFile[],
  fileName: string,
) => {
  let configFile = "";

  const imports = listConfigs.flatMap((list) => {
    const importStrings = getTypeImportStrings(list.name);

    if (list.options?.extraImports && 0 < list.options.extraImports.length) {
      importStrings.push(...list.options.extraImports);
    }

    return importStrings;
  });

  const importList = [
    'import { ignores, languageOptions } from "./constants.js";',
    ...imports,
  ].toSorted((a, b) => {
    return (a ?? "").localeCompare(b ?? "");
  });

  for (const item of importList) {
    configFile += `${item}\n`;
  }

  const configs = await Promise.all(
    listConfigs.map(async (list) => {
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
