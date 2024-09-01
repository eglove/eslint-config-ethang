import {
  getList,
  getListJson,
  getListPlugins,
  getTypeFiles,
} from "./list-utils.mjs";
import { getLatestReact } from "./get-react-version.js";

export const createConfig = async (type, options = {}) => {
  let config = "";
  let settings;

  if (options.includeReactVersion) {
    const react = await getLatestReact();
    settings = JSON.stringify({
      react: { version: react.version },
    }).slice(1, -1);
  }

  const list = getList(type);
  const ruleJson = getListJson(list);

  let optionals = "";

  if (options.includeIgnores) {
    optionals += "\nignores,";
  }

  if (options.includeLanguageOptions) {
    optionals += "\nlanguageOptions,";
  }

  if (options.includeReactVersion && settings) {
    optionals += `\nsettings: {
  ${settings}
},`;
  }

  config += `{
    files: ["${getTypeFiles(type)}"],${optionals}
    plugins: {
      ${getListPlugins(list)}
    },
    rules: {
      ${ruleJson}
    },
  },`;

  return config;
};
