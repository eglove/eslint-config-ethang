// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { execSync } from "node:child_process";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: ["UPDATE", "DEDUPE", "LINT"],
  postInstall: async () => {
    console.log("Updating Rules...");
    execSync(`pnpx tsx ./build/update-rules.js`);
    execSync(`pnpx tsx ./build/update-readme.js`);
  },
  tsupOptions: {
    bundle: true,
  },
});
