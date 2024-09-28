// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: [
    "bun x taze latest -I -w",
    "bun ./build/update-rules.ts",
    "bun ./build/update-readme.ts",
    "bun lint",
  ],
  tsupOptions: {
    bundle: true,
  },
});
