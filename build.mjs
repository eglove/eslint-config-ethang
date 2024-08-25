// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { updateRules } from "./build/update-rules.js";
import { updateReadme } from "./build/update-readme.js";
import { execSync } from "node:child_process";

updateRules();
updateReadme();
execSync("pnpm lint");
//
// await projectBuilder("eslint-config-ethang", "master", {
//   isLibrary: true,
//   scripts: ["UPDATE", "DEDUPE", "LINT"],
//   tsupOptions: {
//     bundle: true,
//   },
// });
