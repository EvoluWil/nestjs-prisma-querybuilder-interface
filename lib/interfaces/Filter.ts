import { Operator } from './Operator';

type FilterObject = {
  [x in string]: any;
};

type OperatorObject = {
  [x in Operator]: string | Date | boolean | number;
};

export type FiltersField =
  | FilterObject
  | OperatorObject
  | { path: string }
  | { value: string }
  | { insensitive: boolean }
  | { operator: Operator };

export type Filter = Array<
  | FiltersField
  | { or: FiltersField[] }
  | { and: FiltersField[] }
  | { not: FiltersField[] }
>;
