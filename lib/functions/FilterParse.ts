import { ParsedFilter } from '../interfaces/Filter';
import { FilterResolver } from './FilterResolver';
import { getType } from './GetType';

export const FilterParse = (
  filters = [],
  filterGroup?: ParsedFilter['filterGroup']
) => {
  return filters.map(filter => {
    const path = filter.path;
    if (filter.and) {
      return {
        path,
        filter: FilterParse(filter.and, `and`)
      };
    }

    if (filter.or) {
      return {
        path,
        filter: FilterParse(filter.or, `or`)
      };
    }

    if (filter.not) {
      return {
        path,
        filter: FilterParse(filter.not, `not`)
      };
    }

    if (filter.filter) {
      return {
        path,
        filter: FilterResolver(filter.filter)
      };
    }
    const value = filter.value;
    const operator = filter.operator || 'equals';
    const type = getType(value);

    const filterParsed: ParsedFilter = {
      path,
      type,
      value,
      operator
    };

    if (filter.filterInsideOperator) {
      filterParsed.filterInsideOperator = filter.filterInsideOperator;
    }

    if (filter.insensitive) {
      filterParsed.insensitive = filter.insensitive;
    }

    if (filterGroup || filter.filterGroup) {
      filterParsed.filterGroup = filterGroup || filter.filterGroup;
    }
    return filterParsed;
  });
};
