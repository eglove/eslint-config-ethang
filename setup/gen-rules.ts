import { Rule } from "eslint";

export type EsLintRules = Record<string, Rule.RuleModule>;

export const getNonDeprecatedRules = (rules: EsLintRules) => {
  const filtered: EsLintRules = {};

  for (const [key, value] of Object.entries(rules)) {
    if (value.meta?.deprecated !== true) {
      filtered[key] = value;
    }
  }

  return filtered;
};

export type CustomRules = {
  name: string;
  rule: unknown;
}[];

export const genRules = (
  ruleNames: string[],
  customRules: CustomRules,
  prefix?: string,
  defaultOverride = "error",
) => {
  const rules: Record<string, unknown> = {};

  for (const rule of ruleNames) {
    if (prefix === undefined) {
      rules[rule] = defaultOverride ?? "error";
    } else {
      rules[`${prefix}/${rule}`] = defaultOverride ?? "error";
    }
  }

  if (customRules) {
    for (const rule of customRules) {
      if (ruleNames.includes(rule.name)) {
        if (prefix === undefined) {
          rules[rule.name] = rule.rule;
        } else {
          rules[`${prefix}/${rule.name}`] = rule.rule;
        }
      } else {
        // eslint-disable-next-line no-console
        console.error(
          `${rule.name} in ${prefix ?? "(unknown prefix)"} does not exist.`,
        );
      }
    }
  }

  return Object.fromEntries(
    Object.entries(rules).sort(([a], [b]) => {
      return a.localeCompare(b);
    }),
  );
};
