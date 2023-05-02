import { Operator } from './Operator';
export type FiltersField = {
  path: string;
  value: any;
  insensitive?: boolean;
  operator?: Operator;
};
export type ParsedFilter = FiltersField & {
  type: 'string' | 'number' | 'boolean' | 'date';
  filterGroup?: 'and' | 'or' | 'not';
};

type FilterFieldsInPopulate = FiltersField & {
  filterInsideOperator: 'none' | 'some' | 'every';
};

/**
 * exemples:
 *
 *  `FILTER`
 *
 *  [{ path: 'color', value: blue }]
 *
 * `OR`
 *
 *  [{ or: [{ path: 'color', operator: 'contains', value: blue }, { path: 'color', value: red }] }]
 *
 * `AND`
 * [{ and: [{ path: 'color', value: blue }, { path: 'size', operator: 'gte', value: 28 }] }]
 *
 * operators: 'contains' | 'endsWith' | 'startsWith' | 'equals' | 'gt' | 'gte' | 'in' | 'lt' | 'lte' | 'not' | 'notIn' | 'hasEvery' | 'hasSome' | 'has' | 'isEmpty'
 * @default 'equals'
 *
 * insensitive: true | false
 * @default false
 */
export type Filter = Array<
  FiltersField | { or: Filter } | { and: Filter } | { not: Filter }
>;

export type FilterInPopulate = Array<
  | FilterFieldsInPopulate
  | { or: FilterInPopulate }
  | { and: FilterInPopulate }
  | { not: FilterInPopulate }
>;
