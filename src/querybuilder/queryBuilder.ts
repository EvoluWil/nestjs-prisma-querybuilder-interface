import QueryString from "qs";
import { Query } from "./Query";

export const queryBuilder = (query: Query) => {
  return `?${QueryString.stringify(query)}`;
};
