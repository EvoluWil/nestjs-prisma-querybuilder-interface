import { ParsedFilter } from '../interfaces/Filter';
import { FilterResolver } from './FilterResolver';
import { getType } from './GetType';

export const FilterParse = (filters = [], filterGroup?: ParsedFilter['filterGroup']) => {
  return filters.map((filter) => {
    if (filter?.and) {
      return {
        ...filter,
        filter: FilterParse(filter?.and, 'and')
      };
    }

    if (filter?.or) {
      return {
        ...filter,
        filter: FilterParse(filter?.or, 'or')
      };
    }

    if (filter?.not) {
      return {
        ...filter,
        filter: FilterParse(filter?.not, 'not')
      };
    }

    if (filter?.filter) {
      return {
        ...filter,
        filter: FilterResolver(filter?.filter)
      };
    }

    const filterParsed: ParsedFilter = {
      path: filter?.path,
      value: filter?.value,
      operator: filter?.operator,
      type: getType(filter?.value),
      insensitive: filter?.insensitive,
      filterInsideOperator: filter?.filterInsideOperator,

      filterGroup: filterGroup || filter?.filterGroup
    };

    return filterParsed;
  });
};
