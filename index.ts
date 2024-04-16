// @ts-ignore types not needed
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// @ts-ignore types not needed
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
// @ts-ignore types not needed
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.all,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs["flat/all"],
  eslintConfigPrettier,
  eslintPluginPrettier,
);
