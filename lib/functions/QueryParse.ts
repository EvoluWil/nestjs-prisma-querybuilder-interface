import { FilterParse } from './FilterParse';
import { ObjectParse } from './ObjectParse';

export const QueryParse = (filters: any) => {
  const parsedFilter = [];
  filters.forEach(filter => {
    if (filter?.and) {
      return parsedFilter.push(...FilterParse(filter.and, 'and'));
    }
    if (filter?.or) {
      return parsedFilter.push(...FilterParse(filter.or, 'or'));
    }
    return parsedFilter.push(...ObjectParse(filter));
  });
  return parsedFilter;
};
