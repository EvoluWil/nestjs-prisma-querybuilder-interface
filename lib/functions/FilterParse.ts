import { Filter, FiltersField } from '../interfaces/Filter';
import { getType } from './GetType';

export const FilterParse = (filters, filterGroup?: string): Filter => {
  return filters.map(filter => {
    let parsedFilter: FiltersField = {};
    Object.keys(filter)?.forEach(key => {
      if (key === 'path') {
        parsedFilter = {
          ...parsedFilter,
          path: filter?.path
        };
      } else if (key === 'value') {
        parsedFilter = {
          ...parsedFilter,
          value: filter?.value
        };
      } else if (key === 'insensitive') {
        parsedFilter = {
          ...parsedFilter,
          insensitive: filter?.insensitive
        };
      } else if (key === 'operator') {
        parsedFilter = {
          ...parsedFilter,
          operator: filter?.operator
        };
      } else {
        if (getType(filter[key]) === 'object') {
          if (filter[key]?.insensitive) {
            parsedFilter = {
              ...parsedFilter,
              insensitive: filter[key]?.insensitive
            };
            delete filter[key].insensitive;
          }
          parsedFilter = {
            ...parsedFilter,
            operator: Object.keys(filter[key])[0],
            value: Object.values(filter[key])[0],
            path: key
          };
        } else {
          parsedFilter = {
            ...parsedFilter,
            operator: 'equals',
            path: key,
            value: filter[key]
          };
        }
      }

      parsedFilter = {
        ...parsedFilter,
        type: getType(parsedFilter['value'])
      };

      if (parsedFilter['type'] === 'date') {
        parsedFilter = {
          ...parsedFilter,
          value: new Date(parsedFilter['value']).toISOString()
        };
      }

      if (filterGroup) {
        parsedFilter = {
          ...parsedFilter,
          filterGroup
        };
      }
    });
    return parsedFilter;
  });
};
