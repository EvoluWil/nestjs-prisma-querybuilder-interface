import { FiltersFields } from 'lib/interfaces/FiltersFields';
import { ParsedFilter } from 'lib/interfaces/ParsedFilter';
import { FilterParse } from './FilterParse';
import { getType } from './GetType';

const objects = {
  and: 'and',
  or: 'or'
};

export const ObjectParse = (filter: FiltersFields): ParsedFilter[] => {
  return Object.keys(filter)?.map((key, index) => {
    if (!objects[key]) {
      const type = getType(Object.values(filter)[index]);
      return {
        path: key,
        value:
          type === 'object'
            ? Object.values(Object.values(filter)[index])[0]
            : Object.values(filter)[index],
        operator:
          type === 'object'
            ? Object.keys(Object.values(filter)[index])[0]
            : 'equals',
        type:
          type === 'object'
            ? getType(Object.values(Object.values(filter)[index])[0])
            : type
      };
    } else {
      return FilterParse(filter as any, key as any);
    }
  });
};
