// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { execSync } from "node:child_process";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: [
    "bun x taze latest -I -w",
    "bun lint",
    "bun ./build/update-rules.ts",
    "bun ./build/update-readme.ts",
  ],
  tsupOptions: {
    bundle: true,
  },
});
