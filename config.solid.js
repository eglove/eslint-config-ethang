import solid from "eslint-plugin-solid";
import tseslint from "typescript-eslint";

import { languageOptions } from "./eslint.config.js";
import { ignores } from "./constants.js";
import { solidRules } from "./setup/solid.js";

export default tseslint.config({
  files: ["**/*.{jsx,tsx}"],
  ignores,
  languageOptions,
  plugins: { solid },
  rules: {
    ...solidRules,
  },
});
