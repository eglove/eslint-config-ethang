import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

import { languageOptions } from "./eslint.config.js";
import { ignores } from "./constants.js";
import { astroRules } from "./setup/astro.js";

export default tseslint.config({
  files: ["**/*.{astro}"],
  ignores,
  languageOptions,
  plugins: { astro },
  rules: {
    ...astroRules,
  },
});
