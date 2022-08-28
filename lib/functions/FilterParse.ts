import { ObjectParse } from './ObjectParse';

export const FilterParse = (filter: any, filterGroup: 'and' | 'or') => {
  if (filter?.length) {
    return filter.map(filter => {
      if (filter?.and) {
        return FilterParse(filter.and, 'and');
      }
      if (filter?.or) {
        return FilterParse(filter.or, 'or');
      }
      const parsedObject = ObjectParse(filter)[0];
      return { ...parsedObject, filterGroup };
    });
  }
};
