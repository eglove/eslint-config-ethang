// @ts-check
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  postVersionBumpScripts: ["DEDUPE", "LINT"],
  preVersionBumpScripts: ["UPDATE"],
  publishDirectory: "dist",
});
