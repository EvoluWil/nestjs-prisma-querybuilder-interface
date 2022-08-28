import { Operator } from './Operator';

type FilterObject = {
  [x in Operator]: string | Date | boolean | number;
};

export type Filter = {
  [x: string]: string | Date | boolean | number | FilterObject | object;
};
