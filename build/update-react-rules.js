import { reactRules } from "../setup/react.js";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

export const updateReactRules = () => {
  let configFile = "";

  const rulesJson = JSON.stringify(reactRules).slice(1, -1);

  const importList = [
    'import react from "@eslint-react/eslint-plugin";',
    'import reactHooks from "eslint-plugin-react-hooks";',
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
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  rules: {
    ${rulesJson}
  },
});
`;

  writeFileSync(
    join(import.meta.dirname, "../config.react.js"),
    configFile,
    "utf8",
  );
};
