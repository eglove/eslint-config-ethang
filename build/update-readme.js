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

export const updateReadme = () => {
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

  const ruleDocs = [`- ${total} errored rules.`];
  for (const list of ruleList) {
    ruleDocs.push(
      `- ${list.count} ${list.count <= 1 ? "rule" : "rules"} from [${list.name}](${list.url})`,
    );
  }

  const readme = readFileSync(
    join(import.meta.dirname, "../README.md"),
    "utf8",
  );
  let readmeLines = readme.split("\n");

  let start = 0;
  let end = 0;
  for (let index = 1; index < readmeLines.length; index++) {
    if (
      readmeLines[index] ===
      "Do **NOT** use this with Prettier! Styling rules are included."
    ) {
      start = index;
    }

    if (readmeLines[index] === "# Add Even More!") {
      end = index;
    }

    if (start !== 0 && end !== 0) {
      break;
    }
  }

  readmeLines = [
    ...readmeLines.splice(0, start + 2),
    ...ruleDocs,
    ...readmeLines.splice(end - 7),
  ].join("\n");

  writeFileSync(join(import.meta.dirname, "../README.md"), readmeLines, "utf8");
};
