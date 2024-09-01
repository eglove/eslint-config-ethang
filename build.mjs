// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { updateRules } from "./build/update-rules.js";
import { updateReadme } from "./build/update-readme.js";

await updateRules();
updateReadme();

// await projectBuilder("eslint-config-ethang", "master", {
//   isLibrary: true,
//   scripts: ["UPDATE", "DEDUPE", "LINT"],
//   postInstall: async () => {
//     console.log("Updating Rules...");
//     await updateRules();
//     await updateReactRules();
//     updateSolidRules();
//     updateAstroRules();
//     updateReadme();
//   },
//   tsupOptions: {
//     bundle: true,
//   },
// });
