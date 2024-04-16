// @ts-check
import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("eslint-config-ethang", "master", {
  ignorePeerDependencies: ["@rushstack/eslint-patch"],
  isLibrary: true,
  postVersionBumpScripts: ["DEDUPE", "LINT"],
  preVersionBumpScripts: ["UPDATE"],
  publishDirectory: "dist",
  tsConfigOverrides: {
    compilerOptions: {
      emitDeclarationOnly: true,
    },
    include: ["src"],
  },
  tsupOptions: {
    bundle: true,
    entry: ["index.ts"],
    format: ["cjs", "esm"],
    minify: true,
    outDir: "dist",
  },
});
