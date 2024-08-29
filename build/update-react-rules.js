import { reactRules } from "../setup/react.js";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getLatestReact } from "./get-react-version.mjs";

export const updateReactRules = async () => {
  let configFile = "";
  const react = await getLatestReact();
  const settings = JSON.stringify({
    react: { version: react.version },
  }).slice(1, -1);

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
  settings: {
    ${settings}
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
