import { stringify } from 'qs';
import { FilterResolver } from './functions/FilterResolver';
import { PopulateParse } from './functions/PopulateParse';
import { Query } from './interfaces/Query';

export function QueryString(query: Query): string {
  if (query && query.filter) {
    query.filter = FilterResolver(query.filter);
  }

  if (query && query.populate) {
    query.populate = PopulateParse(query.populate);
  }

  return stringify(query);
}
