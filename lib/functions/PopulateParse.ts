import { Populate } from '../interfaces/Populate';
import { FilterParse } from './FilterParse';
import { FilterResolver } from './FilterResolver';

export const PopulateParse = (populates): Populate => {
  return populates.map(populate => {
    let parsedPopulate = {};
    Object.keys(populate)?.forEach(key => {
      if (key === 'filter') {
        parsedPopulate = {
          ...parsedPopulate,
          filter: FilterResolver(populate?.filter)
        };
      } else if (key === 'populate') {
        parsedPopulate = {
          ...parsedPopulate,
          populate: PopulateParse(populate?.populate)
        };
      } else if (key === 'primaryKey') {
        parsedPopulate = {
          ...parsedPopulate,
          primaryKey: populate?.primaryKey
        };
      } else if (key === 'path') {
        parsedPopulate = {
          ...parsedPopulate,
          path: populate?.path
        };
      } else if (key === 'select') {
        parsedPopulate = {
          ...parsedPopulate,
          select: populate?.select
        };
      } else {
        parsedPopulate = {
          ...parsedPopulate,
          path: key,
          select: populate[key]
        };
      }
    });
    return parsedPopulate;
  });
};
