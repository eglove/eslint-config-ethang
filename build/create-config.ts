import { getLatestReact } from "./get-react-version.ts";
import {
  getList,
  getListJson,
  getListPlugins,
  getTypeFiles,
  getTypeLanguage,
} from "./list-utils.ts";

export type ConfigOptions = {
  extraImports?: string[];
  includeIgnores?: boolean;
  includeLanguageOptions?: boolean;
  includeReactVersion?: boolean;
};

export const createConfig = async (
  type: string,
  options: ConfigOptions = {},
) => {
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

  const language = getTypeLanguage(type);

  config += `{
    files: ["${getTypeFiles(type)}"],${optionals}${language ? `language: "${language}",` : ""}
    plugins: {
      ${getListPlugins(list)}
    },
    rules: {
      ${ruleJson}
    },
  },`;

  return config;
};
