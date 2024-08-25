import { solidRules } from "../setup/solid.js";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

export function updateSolidRules() {
  let configFile = "";

  const rulesJson = JSON.stringify(solidRules).slice(1, -1);

  const importList = [
    'import solid from "eslint-plugin-solid";',
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
  files: ["**/*.{jsx,tsx}"],
  ignores,
  languageOptions,
  plugins: { solid },
  rules: {
    ${rulesJson},
  },
});
`;

  writeFileSync(
    join(import.meta.dirname, "../config.solid.js"),
    configFile,
    "utf8",
  );
}
