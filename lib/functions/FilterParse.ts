import { Filter, ParsedFilter } from '../interfaces/Filter';
import { getType } from './GetType';

export const FilterParse = (
  filters = [],
  filterGroup?: ParsedFilter['filterGroup']
): Filter => {
  return filters.map(filter => {
    const path = filter.path;
    const value = filter.value;
    const insensitive = filter.insensitive || false;
    const operator = filter.operator || 'equals';
    const type = getType(value);

    const filterParsed: ParsedFilter = {
      path,
      type,
      value,
      operator,
      insensitive
    };
    if (filterGroup) {
      filterParsed.filterGroup = filterGroup;
    }
    return filterParsed;
  });
};
