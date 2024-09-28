// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { execSync } from "node:child_process";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: ["bun x taze latest -I -w", "bun lint"],
  postInstall: async () => {
    console.log("Updating Rules...");
    execSync(`pnpx tsx ./build/update-rules.ts`, { stdio: "inherit" });
    execSync(`pnpx tsx ./build/update-readme.ts`, { stdio: "inherit" });
  },
  tsupOptions: {
    bundle: true,
  },
});
