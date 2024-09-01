import { ruleList } from "./rule-list.mjs";

export const getList = (type) => {
  return ruleList
    .filter((list) => list.type === type)
    .sort((a, b) => a.order - b.order);
};

export const getListImportStrings = (list) => {
  return list
    .map((item) => {
      return item.importString;
    })
    .filter(Boolean);
};

export const getTypeImportStrings = (type) => {
  return ruleList
    .filter((list) => list.type === type)
    .map((item) => item.importString)
    .filter(Boolean);
};

export const getListJson = (list) => {
  return list
    .map((list) => {
      return JSON.stringify(list.list).slice(1, -1);
    })
    .join(",");
};

export const getTypeFiles = (type) => {
  switch (type) {
    case "core": {
      return ["**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}"];
    }

    case "markdown": {
      return ["**/*.md"];
    }

    case "json": {
      return ["**/*.{json,jsonc,json5}"];
    }

    case "react": {
      return ["**/*.{jsx,tsx}"];
    }

    case "astro": {
      return ["**/*.{astro}"];
    }

    case "solid": {
      return ["**/*.{jsx,tsx}"];
    }
  }
};

export const getListPlugins = (list) => {
  let pluginString = "";

  for (const item of list) {
    if (item.pluginName && item.pluginValue) {
      pluginString += `"${item.pluginName}": ${item.pluginValue},`;
    }
  }

  return pluginString;
};
