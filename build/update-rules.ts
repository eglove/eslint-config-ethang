import type { ConfigOptions } from "./create-config.ts";

import { createConfigFile } from "./create-config-file.ts";

export type ConfigFile = {
  importString?: string;
  label?: string;
  name: string;
  options?: ConfigOptions;
};

export const coreFile = [
  {
    importString: 'import config from "@ethang/eslint-config/eslint.config.js',
    label: "Core",
    name: "core",
    options: {
      extraImports: ['import { fixupPluginRules } from "@eslint/compat";'], // TODO remove with v9 compat
      includeIgnores: true,
      includeLanguageOptions: true,
      includeReactVersion: true,
    },
  },
  {
    name: "markdown",
  },
  {
    name: "json",
  },
  {
    name: "jsonc",
  },
  {
    name: "json5",
  },
];

const astroFile = [
  {
    importString:
      'import astroConfig from "@ethang/eslint-config/config.astro.ts',
    label: "Astro",
    name: "astro",
    options: {
      extraImports: ['import tseslint from "typescript-eslint";'],
      includeIgnores: true,
      includeLanguageOptions: true,
    },
  },
];

const reactFile = [
  {
    importString:
      'import reactConfig from "@ethang/eslint-config/config.react.ts',
    label: "React",
    name: "react",
    options: {
      extraImports: [
        'import tseslint from "typescript-eslint";',
        'import { fixupPluginRules } from "@eslint/compat";', // TODO remove with v9 compat
      ],
      includeIgnores: true,
      includeLanguageOptions: true,
      includeReactVersion: true,
    },
  },
];

const solidFile = [
  {
    importString:
      'import reactConfig from "@ethang/eslint-config/config.solid.ts',
    label: "Solid",
    name: "solid",
    options: {
      extraImports: ['import tseslint from "typescript-eslint";'],
      includeIgnores: true,
      includeLanguageOptions: true,
    },
  },
];

export const secondaryRules = {
  astro: astroFile,
  react: reactFile,
  solid: solidFile,
};

export const allRules = {
  core: coreFile,
  ...secondaryRules,
};

export const updateRules = async () => {
  await Promise.all([
    createConfigFile(coreFile, "eslint.config.js"),
    createConfigFile(astroFile, "config.astro.js"),
    createConfigFile(reactFile, "config.react.js"),
    createConfigFile(solidFile, "config.solid.js"),
  ]);
};

await updateRules();
