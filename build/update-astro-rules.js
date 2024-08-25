import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { astroRules } from "../setup/astro.js";

export function updateAstroRules() {
  let configFile = "";

  const rulesJson = JSON.stringify(astroRules).slice(1, -1);

  const importList = [
    'import astro from "eslint-plugin-astro";',
    'import tseslint from "typescript-eslint";',
    'import { languageOptions } from "./eslint.config.js";',
    'import { ignores } from "./constants.js";',
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
    ${rulesJson}
  },
});
`;

  writeFileSync(
    join(import.meta.dirname, "../config.astro.js"),
    configFile,
    "utf8",
  );
}
