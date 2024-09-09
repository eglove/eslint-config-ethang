import ethang from "@ethang/eslint-plugin";

import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(ethang.rules);

export const ethangRules = genRules(ruleNames, [], "ethang");
