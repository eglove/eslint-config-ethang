import { dependRules } from "../setup/depend.js";
import { barrelRules } from "../setup/barrel.js";
import { compatRules } from "../setup/compat.js";
import { eslintRules } from "../setup/eslint.js";
import { nRules } from "../setup/n.js";
import { typescriptRules } from "../setup/typescript-eslint.js";
import { unicornRules } from "../setup/unicorn.js";
import { lodashRules } from "../setup/lodash.js";
import { sonarRules } from "../setup/sonar.js";
import { tanstackQueryRules } from "../setup/tanstack-query.js";
import { tailwindRules } from "../setup/tailwind.js";
import { stylisticRules } from "../setup/stylistic.js";
import { perfectionistRules } from "../setup/perfectionist.js";
import { a11yRules } from "../setup/a11y.js";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { deprecatedRules } from "../setup/deprecated.js";

export const updateRules = () => {
  const rules = {
    ...dependRules,
    ...barrelRules,
    ...compatRules,
    ...eslintRules,
    ...nRules,
    ...typescriptRules,
    ...unicornRules,
    ...lodashRules,
    ...sonarRules,
    ...tanstackQueryRules,
    ...tailwindRules,
    ...stylisticRules,
    ...perfectionistRules,
    ...a11yRules,
    ...deprecatedRules,
  };

  let jsonified = JSON.stringify(rules);
  jsonified = jsonified.slice(1, -1);

  const config = readFileSync(
    join(import.meta.dirname, "../eslint.config.js"),
    "utf8",
  );
  const lines = config.split("\n");

  let rulesStart = 0;
  let rulesEnd = 0;
  for (let index = 1; index < lines.length; index++) {
    if (lines[index].endsWith("rules: {")) {
      rulesStart = index;
    }

    if (0 !== rulesStart && lines[index].endsWith("},")) {
      rulesEnd = index;
    }
  }

  const updated = [
    ...lines.slice(0, rulesStart),
    "rules: {",
    jsonified,
    "},",
    ...lines.slice(rulesEnd + 1),
  ].join("\n");

  writeFileSync(
    join(import.meta.dirname, "../eslint.config.js"),
    updated,
    "utf8",
  );
};
