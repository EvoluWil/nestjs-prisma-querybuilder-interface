import { FilterParse } from './FilterParse';

export const FilterResolver = filters => {
  return filters
    .map(filter => {
      if (filter?.and) {
        if (filter.path) {
          return {
            path: filter.path,
            filter: FilterParse(filter.and, `and`)
          };
        }

        return FilterParse(filter.and, 'and');
      }

      if (filter?.or) {
        if (filter.path) {
          return {
            path: filter.path,
            filter: FilterParse(filter.or, `or`)
          };
        }
        return FilterParse(filter.or, 'or');
      }

      if (filter?.not) {
        if (filter.path) {
          return {
            path: filter.path,
            filter: FilterParse(filter.not, `not`)
          };
        }
        return FilterParse(filter.not, 'not');
      }

      if (filter?.filter) {
        if (filter.path) {
          return {
            path: filter.path,
            filter: FilterParse(filter.filter)
          };
        }
      }

      return FilterParse([filter]);
    })
    .flat();
};
