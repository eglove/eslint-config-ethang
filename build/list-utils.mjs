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

export const getListJson = (list) => {
  return list
    .map((list) => {
      return JSON.stringify(list.list).slice(1, -1);
    })
    .join(",");
};
