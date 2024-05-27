// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  postVersionBumpScripts: ["DEDUPE", "LINT"],
  preVersionBumpScripts: ["UPDATE"],
  tsupOptions: {
    bundle: true,
  },
});
