// @ts-check
/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
import * as fs from "node:fs";
import { projectBuilder } from "@ethang/project-builder/project-builder.js";

fs.copyFileSync("index.js", "eslint.config.js");

await projectBuilder("eslint-config-ethang", "master", {
  isLibrary: true,
  postVersionBumpScripts: ["DEDUPE", "LINT"],
  preVersionBumpScripts: ["UPDATE"],
});
