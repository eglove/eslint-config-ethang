import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { MarkdownGenerator } from "@ethang/markdown-generator/markdown-generator.js";
import { getList } from "./list-utils.mjs";

export const updateReadme = () => {
  const md = new MarkdownGenerator();
  md.header(1, "Opinionated, Strict, Brutal, Unforgiving", 2);
  md.link("View Config", "https://eslint-config-ethang.pages.dev/rules", 2);
  md.alert(
    "CAUTION",
    "Do not use this with Prettier! Styling rules are included.",
    2,
  );

  const getRuleCount = (rules) => {
    let count = 0;
    Object.values(rules).forEach((value) => {
      if (value === "error" || (Array.isArray(value) && value[0] === "error")) {
        count += 1;
      }
    });

    return count;
  };

  const coreRules = [
    ...getList("core"),
    ...getList("json"),
    ...getList("markdown"),
  ];

  let total = 0;
  for (const list of coreRules) {
    const count = getRuleCount(list.list);
    total += count;
    list["count"] = count;
  }
  coreRules.sort((a, b) => {
    return b.count - a.count;
  });

  const ruleDocs = [`${total} errored rules.`];
  for (const list of coreRules) {
    if (list.count < 1) {
      continue;
    }

    ruleDocs.push(
      `${list.count} ${list.count <= 1 ? "rule" : "rules"} from [${list.name}](${list.url})`,
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
        .filter((rule) => getRuleCount(rule.list) > 0)
        .map((rule) => {
          return `${getRuleCount(rule.list)} rules from [${rule.name}](${rule.url})`;
        }),
    ],
    `${reactCount} rules for **React**`,
    [
      '`import reactConfig from "@ethang/eslint-config/config.react.js";`',
      ...reactRules
        .filter((rule) => getRuleCount(rule.list) > 0)
        .map((rule) => {
          return `${getRuleCount(rule.list)} rules from [${rule.name}](${rule.url})`;
        }),
    ],
    `${solidCount} rules for **Solid**`,
    [
      '`import solidConfig from "@ethang/eslint-config/config.solid.js";`',
      ...solidRules
        .filter((rule) => getRuleCount(rule.list) > 0)
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

export default tseslint.config(...config, ...astroConfig, ...reactConfig, {
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    // your custom rules here
  },
});`,
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
