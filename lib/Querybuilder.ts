import { stringify } from 'qs';
import { QueryParse } from './functions/QueryParse';
import { Query } from './interfaces/Query';

export function QueryString(query: Query): string {
  if (query?.filter) {
    query.filter = QueryParse(query.filter);
    return stringify(query);
  } else {
    return stringify(query);
  }
}
