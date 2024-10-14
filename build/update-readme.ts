import { MarkdownGenerator } from "@ethang/markdown-generator/markdown-generator.js";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

import type { genRules } from "../setup/gen-rules.ts";

import { getList } from "./list-utils.ts";

export const updateReadme = () => {
  const md = new MarkdownGenerator();
  md.header(1, "Relentless. Unapologetic.", 2);
  md.link("View Config", "https://eslint-config-ethang.pages.dev/rules", 2);
  md.alert(
    "CAUTION",
    "Do not use this with Prettier! Styling rules are included.",
    2,
  );

  const getRuleCount = (rules: ReturnType<typeof genRules>) => {
    let count = 0;
    for (const value of Object.values(rules)) {
      if ("error" === value || (Array.isArray(value) && "error" === value[0])) {
        count += 1;
      }
    }

    return count;
  };

  const coreRules = [
    ...getList("core"),
    ...getList("json"),
    ...getList("markdown"),
  ].map((rules) => {
    return {
      ...rules,
      count: 0,
    };
  });

  let total = 0;
  for (const list of coreRules) {
    const count = getRuleCount(list.list);
    total += count;
    list.count = count;
  }
  coreRules.sort((a, b) => {
    return b.count - a.count;
  });

  const ruleDocs = [`${total} errored rules.`];
  for (const list of coreRules) {
    if (1 > list.count) {
      continue;
    }

    ruleDocs.push(
      `${list.count} ${
        1 >= list.count ? "rule" : "rules"
      } from [${list.name}](${list.url})`,
    );
  }

  const astroRules = getList("astro");
  const reactRules = getList("react");
  const solidRules = getList("solid");

  let astroCount = 0;
  for (const astroRule of astroRules) {
    astroCount += getRuleCount(astroRule.list);
  }

  let reactCount = 0;
  for (const reactRule of reactRules) {
    reactCount += getRuleCount(reactRule.list);
  }

  let solidCount = 0;
  for (const solidRule of solidRules) {
    solidCount += getRuleCount(solidRule.list);
  }

  md.unorderedList(ruleDocs);
  md.newLine();
  md.header(1, "Add Even More!", 2);
  md.unorderedList([
    `${astroCount} rules for **Astro**`,
    [
      '`import astroConfig from "@ethang/eslint-config/config.astro.js";`',
      ...astroRules
        .filter((rule) => {
          return 0 < getRuleCount(rule.list);
        })
        .map((rule) => {
          return `${getRuleCount(rule.list)} rules from [${rule.name}](${rule.url})`;
        }),
    ],
    `${reactCount} rules for **React**`,
    [
      '`import reactConfig from "@ethang/eslint-config/config.react.js";`',
      ...reactRules
        .filter((rule) => {
          return 0 < getRuleCount(rule.list);
        })
        .map((rule) => {
          return `${getRuleCount(rule.list)} rules from [${rule.name}](${rule.url})`;
        }),
    ],
    `${solidCount} rules for **Solid**`,
    [
      '`import solidConfig from "@ethang/eslint-config/config.solid.js";`',
      ...solidRules
        .filter((rule) => {
          return 0 < getRuleCount(rule.list);
        })
        .map((rule) => {
          return `${getRuleCount(rule.list)} rules from [${rule.name}](${rule.url})`;
        }),
    ],
  ]);
  md.newLine();
  md.header(1, "Install", 2);
  md.inlineCode("pnpm i -D eslint typescript-eslint @ethang/eslint-config", 2);
  md.bold("Requires TypesScript and tsconfig.json at root directory.", 2);
  md.header(1, "Config", 2);
  md.text("In **eslint.config.js**", 2);
  md.codeBlock(
    `import config from "@ethang/eslint-config/eslint.config.js";
import tseslint from "typescript-eslint";
import astroConfig from "@ethang/eslint-config/config.astro.js"; // OPTIONAL
import reactConfig from "@ethang/eslint-config/config.react.js"; // OPTIONAL

export default tseslint.config(
  {
    ignores: [], // Ignored files apply to all following configs
  },
  ...config,
  ...astroConfig,
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Override rules from above configs
    },
  }
);`,
    "js",
    2,
  );
  md.bold("Scripts", 2);
  md.codeBlock(
    `"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}`,
    "json",
    2,
  );
  md.bold("Browserslist", 2);
  md.text(
    "This config will also lint for browserslist features. Make sure to set this in package.json. [More info.](https://github.com/browserslist/browserslist)",
    2,
  );
  md.codeBlock(
    `"browserslist": [
  "defaults and fully supports es6-module",
  "maintained node versions"
]`,
    "json",
  );

  writeFileSync(join(import.meta.dirname, "../README.md"), md.render(), "utf8");
};

updateReadme();
