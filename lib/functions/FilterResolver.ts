import { FiltersField } from 'lib/interfaces/Filter';
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

    if (filter?.not) {
      return FilterResolved.push(...FilterParse(filter.not, 'not'));
    }

    return FilterResolved.push(...FilterParse([filter]));
  });
  return FilterResolved;
};
