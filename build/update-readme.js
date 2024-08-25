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
import { MarkdownGenerator } from "@ethang/markdown-generator/markdown-generator.js";
import { markdownRules } from "../setup/markdown.js";
import { jsonRules } from "../setup/json.js";

export const updateReadme = () => {
  const md = new MarkdownGenerator();
  md.header(1, "Opinionated, Strict, Brutal, Unforgiving");
  md.newLine(2);
  md.link("View Config", "https://eslint-config-ethang.pages.dev/rules");
  md.newLine(2);
  md.alert(
    "CAUTION",
    "Do not use this with Prettier! Styling rules are included.",
  );
  md.newLine(2);

  const getRuleCount = (rules) => {
    let count = 0;
    Object.values(rules).forEach((value) => {
      if (value === "error" || (Array.isArray(value) && value[0] === "error")) {
        count += 1;
      }
    });

    return count;
  };

  const ruleList = [
    {
      list: dependRules,
      name: "eslint-plugin-depend",
      url: "https://github.com/es-tooling/eslint-plugin-depend/tree/main",
    },
    {
      list: barrelRules,
      name: "eslint-plugin-barrel-files",
      url: "https://github.com/thepassle/eslint-plugin-barrel-files",
    },
    {
      list: compatRules,
      name: "eslint-plugin-compat",
      url: "https://github.com/amilajack/eslint-plugin-compat",
    },
    {
      list: eslintRules,
      name: "@eslint/js",
      url: "https://github.com/eslint/eslint/tree/main/packages/js",
    },
    {
      list: nRules,
      name: "eslint-plugin-n",
      url: "https://github.com/eslint-community/eslint-plugin-n",
    },
    {
      list: typescriptRules,
      name: "@typescript/eslint",
      url: "https://github.com/typescript-eslint/typescript-eslint",
    },
    {
      list: unicornRules,
      name: "sindresorhus/eslint-plugin-unicorn",
      url: "https://github.com/sindresorhus/eslint-plugin-unicorn",
    },
    {
      list: lodashRules,
      name: "eslint-plugin-lodash",
      url: "https://github.com/wix-incubator/eslint-plugin-lodash",
    },
    {
      list: sonarRules,
      name: "eslint-plugin-sonarjs",
      url: "https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md",
    },
    {
      list: tanstackQueryRules,
      name: "@tanstack/eslint-plugin-query",
      url: "https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query",
    },
    {
      list: tailwindRules,
      name: "eslint-plugin-tailwindcss",
      url: "https://github.com/francoismassart/eslint-plugin-tailwindcss",
    },
    {
      list: stylisticRules,
      name: "@stylistic/eslint-plugin",
      url: "https://eslint.style/",
    },
    {
      list: perfectionistRules,
      name: "eslint-plugin-perfectionist",
      url: "https://github.com/azat-io/eslint-plugin-perfectionist",
    },
    {
      list: a11yRules,
      name: "jsx-a11y",
      url: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y",
    },
    {
      list: markdownRules,
      name: "@eslint/markdown",
      url: "https://github.com/eslint/markdown",
    },
    {
      list: jsonRules,
      name: "@eslint/json",
      url: "https://github.com/eslint/json",
    },
  ];

  let total = 0;
  for (const list of ruleList) {
    const count = getRuleCount(list.list);
    total += count;
    list["count"] = count;
  }
  ruleList.sort((a, b) => {
    return b.count - a.count;
  });

  const ruleDocs = [`${total} errored rules.`];
  for (const list of ruleList) {
    ruleDocs.push(
      `${list.count} ${list.count <= 1 ? "rule" : "rules"} from [${list.name}](${list.url})`,
    );
  }

  md.unorderedList(ruleDocs);
  md.newLine();
  md.header(1, "Add Even More!");
  md.newLine(2);
  md.unorderedList(["51 rules for **Astro**"]);
  md.unorderedList(
    [
      '`import astroConfig from "@ethang/eslint-config/config.astro.js";`',
      "51 rules from [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)",
    ],
    2,
  );
  md.unorderedList(["68 rules for **React**"]);
  md.unorderedList(
    [
      '`import reactConfig from "@ethang/eslint-config/config.react.js";`',
      "68 rules from [@eslint-react/eslint-plugin](https://eslint-react.xyz/)",
    ],
    2,
  );
  md.unorderedList(["18 rules for **Solid**"]);
  md.unorderedList(
    [
      '`import solidConfig from "@ethang/eslint-config/config.solid.js";`',
      "18 rules from [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)",
    ],
    2,
  );
  md.newLine();
  md.header(1, "Install");
  md.newLine(2);
  md.inlineCode("pnpm i -D eslint typescript-eslint @ethang/eslint-config");
  md.newLine(2);
  md.bold("Requires TypesScript and tsconfig.json at root directory.");
  md.newLine(2);
  md.header(1, "Config");
  md.newLine(2);
  md.text("In **eslint.config.js**");
  md.newLine(2);
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
  );
  md.newLine(2);
  md.bold("Scripts");
  md.newLine(2);
  md.codeBlock(
    `"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}`,
    "json",
  );
  md.newLine(2);
  md.bold("Browserslist");
  md.newLine(2);
  md.text(
    "This config will also lint for browserslist features. Make sure to set this in package.json. [More info.](https://github.com/browserslist/browserslist)",
  );
  md.newLine(2);
  md.codeBlock(
    `"browserslist": [
  "defaults and fully supports es6-module",
  "maintained node versions"
]`,
    "json",
  );

  writeFileSync(join(import.meta.dirname, "../README.md"), md.render(), "utf8");
};
