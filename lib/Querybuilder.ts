import { stringify } from 'qs';
import { QueryParse } from './functions/QueryParse';
import { Query } from './interfaces/Query';

export function QueryString(query: Query): string {
  if (query?.filter) {
    const filters = QueryParse(query.filter);
    return stringify({ ...query, filters });
  } else {
    return stringify(query);
  }
}
