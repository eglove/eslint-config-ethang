// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { updateRules } from "./build/update-rules.js";
import { updateReadme } from "./build/update-readme.js";
import { updateReactRules } from "./build/update-react-rules.js";
import { updateSolidRules } from "./build/update-solid-rules.js";
import { updateAstroRules } from "./build/update-astro-rules.js";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: ["UPDATE", "DEDUPE", "LINT"],
  postInstall: async () => {
    await Promise.all([
      updateRules(),
      updateReactRules(),
      updateSolidRules(),
      updateAstroRules(),
      updateReadme(),
    ]);
  },
  tsupOptions: {
    bundle: true,
  },
});
