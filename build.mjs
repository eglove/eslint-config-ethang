// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: [
    "pnpm up -i --latest",
    "pnpm dedupe",
    "bun ./build/update-rules.ts",
    "bun ./build/update-readme.ts",
    "pnpm lint",
  ],
  tsupOptions: {
    bundle: true,
  },
});
