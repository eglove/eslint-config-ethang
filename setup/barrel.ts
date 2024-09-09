// @ts-expect-error no types
import barrel from "eslint-plugin-barrel-files";

import { type CustomRules, genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(barrel.rules);
const customRules: CustomRules = [];

export const barrelRules = genRules(ruleNames, customRules, "barrel");
