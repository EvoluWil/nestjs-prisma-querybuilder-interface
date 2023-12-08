import { Filter, FiltersField } from 'lib/interfaces/Filter';
import { FilterParse } from './FilterParse';

export const FilterResolver = (filters) => {
  return filters
    .map((filter) => {
      if (filter?.and) {
        if (filter.path) {
          return {
            ...filter,
            filter: FilterParse(filter.and, 'and')
          };
        }

        return FilterParse(filter.and, 'and');
      }

      if (filter?.or) {
        if (filter.path) {
          return {
            ...filter,
            filter: FilterParse(filter.or, 'or')
          };
        }

        return FilterParse(filter.or, 'or');
      }

      if (filter?.not) {
        if (filter.path) {
          return {
            ...filter,
            filter: FilterParse(filter.not, 'not')
          };
        }

        return FilterParse(filter.not, 'not');
      }

      if (filter?.filter) {
        if (filter.path) {
          return {
            ...filter,
            filter: FilterParse(filter.filter)
          };
        }
      }

      return FilterParse([filter]);
    })
    .flat();
};
