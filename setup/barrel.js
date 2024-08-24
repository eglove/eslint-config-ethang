/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import barrel from "eslint-plugin-barrel-files";
import { genRules } from "./gen-rules.js";

const ruleNames = Object.keys(barrel.rules);
const customRules = [];

export const barrelRules = genRules(ruleNames, customRules, "barrel");
