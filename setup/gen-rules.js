/**
 * @param {Array<String>} ruleNames
 * @param {Array<{name: string, rule: unknown}>} customRules
 * @param {string?} prefix
 * @return {Object}
 */
export const genRules = (ruleNames, customRules, prefix) => {
  const rules = {};

  for (const rule of ruleNames) {
    if (prefix === undefined) {
      rules[rule] = "error";
    } else {
      rules[`${prefix}/${rule}`] = "error";
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
        console.error(`${rule.name} does not exist.`);
      }
    }
  }

  return rules;
};
