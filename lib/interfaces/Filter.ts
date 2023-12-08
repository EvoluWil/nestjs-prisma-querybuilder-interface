import { Operator } from './Operator';

export type FiltersField = {
  path: string;
  value?: any;
  insensitive?: boolean;
  operator?: Operator;
  filterInsideOperator?: 'none' | 'some' | 'every';
  filterGroup?: 'and' | 'or' | 'not' | 'filter';
  or?: Filter;
  and?: Filter;
  not?: Filter;
  filter?: Filter;
};

export type ParsedFilter = FiltersField & {
  type: 'string' | 'number' | 'boolean' | 'date';
  filterGroup?: 'and' | 'or' | 'not' | 'filter';
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
export type Filter = Array<FiltersField | { or: Filter } | { and: Filter } | { not: Filter } | { filter: Filter }>;
