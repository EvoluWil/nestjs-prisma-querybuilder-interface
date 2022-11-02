import { FilterParse } from './FilterParse';

export const FilterResolver = filters => {
  const FilterResolved = [];
  filters.forEach(filter => {
    if (filter?.and) {
      return FilterResolved.push(...FilterParse(filter.and, 'and'));
    }
    if (filter?.or) {
      return FilterResolved.push(...FilterParse(filter.or, 'or'));
    }

    return FilterResolved.push(...FilterParse([filter]));
  });
  return FilterResolved;
};
