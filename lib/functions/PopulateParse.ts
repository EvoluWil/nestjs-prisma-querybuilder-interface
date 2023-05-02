import { Populate } from '../interfaces/Populate';
import { FilterResolver } from './FilterResolver';

export const PopulateParse = (populates: Populate): Populate => {
  return populates.map(populate => {
    const currentPopulate = { ...populate };
    if (currentPopulate.filter) {
      currentPopulate.filter = FilterResolver(currentPopulate.filter);
    }
    if (currentPopulate.populate) {
      currentPopulate.populate = PopulateParse(currentPopulate.populate);
    }
    return currentPopulate;
  });
};
