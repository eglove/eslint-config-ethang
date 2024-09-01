import { parser } from "typescript-eslint";

export const ignores = ["eslint.config.js", "node_modules", "dist"];

export const languageOptions = {
  parser,
  parserOptions: {
    project: true,
    tsconfigRootDir: import.meta.dirname,
  },
};
