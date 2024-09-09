/* eslint-disable */
import tailwind from "eslint-plugin-tailwindcss";
import { genRules } from "./gen-rules.ts";

const ruleNames = Object.keys(tailwind.rules ?? {});
const customRules = [{ name: "no-custom-classname", rule: "off" }];

export const tailwindRules = genRules(ruleNames, customRules, "tailwind");
