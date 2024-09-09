import { createConfigFile } from "./create-config-file.js";

export const coreFile = [
  {
    name: "core",
    label: "Core",
    importString: 'import config from "@ethang/eslint-config/eslint.config.js',
    options: {
      includeReactVersion: true,
      includeLanguageOptions: true,
      includeIgnores: true,
      extraImports: ['import { fixupPluginRules } from "@eslint/compat";'], // TODO remove with v9 compat
    },
  },
  {
    name: "markdown",
  },
  {
    name: "json",
  },
];

const astroFile = [
  {
    name: "astro",
    label: "Astro",
    importString:
      'import astroConfig from "@ethang/eslint-config/config.astro.js',
    options: {
      includeIgnores: true,
      includeLanguageOptions: true,
      extraImports: ['import tseslint from "typescript-eslint";'],
    },
  },
];

const reactFile = [
  {
    name: "react",
    label: "React",
    importString:
      'import reactConfig from "@ethang/eslint-config/config.react.js',
    options: {
      includeReactVersion: true,
      includeIgnores: true,
      includeLanguageOptions: true,
      extraImports: [
        'import tseslint from "typescript-eslint";',
        'import { fixupPluginRules } from "@eslint/compat";', // TODO remove with v9 compat
      ],
    },
  },
];

const solidFile = [
  {
    name: "solid",
    label: "Solid",
    importString:
      'import reactConfig from "@ethang/eslint-config/config.solid.js',
    options: {
      includeIgnores: true,
      includeLanguageOptions: true,
      extraImports: ['import tseslint from "typescript-eslint";'],
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
