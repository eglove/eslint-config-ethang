/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import compat from "eslint-plugin-compat";

import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(compat.rules);
const changedRules = [];

export const compatRules = genRules(ruleNames, changedRules, "compat");
