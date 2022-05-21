import { stringify } from 'qs';
import { Query } from './Query';

export function QueryToParam(query: Query) {
  return stringify(query);
}

export function QueryToUrl(query: Query) {
  return stringify(query);
}
