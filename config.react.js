import react from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

import { languageOptions } from "./eslint.config.js";
import { ignores } from "./constants.js";
import { reactRules } from "./setup/react.js";

export default tseslint.config({
  files: ["**/*.{jsx,tsx}"],
  ignores,
  languageOptions,
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  rules: {
    ...reactRules,
  },
});
