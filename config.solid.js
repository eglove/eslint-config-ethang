import { ignores, languageOptions } from "./constants.js";
import solid from "eslint-plugin-solid";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{jsx,tsx}"],
  ignores,
  languageOptions,
  plugins: {
    solid: solid,
  },
  rules: {
    "solid/components-return-once": "error",
    "solid/event-handlers": "error",
    "solid/imports": "error",
    "solid/jsx-no-duplicate-props": "error",
    "solid/jsx-no-script-url": "error",
    "solid/jsx-no-undef": "error",
    "solid/jsx-uses-vars": "error",
    "solid/no-array-handlers": "error",
    "solid/no-destructure": "error",
    "solid/no-innerhtml": "error",
    "solid/no-proxy-apis": "off",
    "solid/no-react-deps": "error",
    "solid/no-react-specific-props": "error",
    "solid/no-unknown-namespaces": "error",
    "solid/prefer-classlist": "off",
    "solid/prefer-for": "error",
    "solid/prefer-show": "error",
    "solid/reactivity": "error",
    "solid/self-closing-comp": "error",
    "solid/style-prop": "error",
  },
});
