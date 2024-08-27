// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";
import { updateRules } from "./build/update-rules.js";
import { updateReadme } from "./build/update-readme.js";
import { execSync } from "node:child_process";
import { updateReactRules } from "./build/update-react-rules.js";
import { updateSolidRules } from "./build/update-solid-rules.js";
import { updateAstroRules } from "./build/update-astro-rules.js";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  scripts: ["UPDATE", "DEDUPE", "LINT"],
  postInstall: () => {
    updateRules();
    updateReactRules();
    updateSolidRules();
    updateAstroRules();
    updateReadme();
    execSync("pnpm lint");
  },
  tsupOptions: {
    bundle: true,
  },
});
