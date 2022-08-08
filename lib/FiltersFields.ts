export interface FiltersFields {
  path: string;
  value: string;
  type?: 'string' | 'boolean' | 'number' | 'date';
  operator?: 'contains' | 'endsWith' | 'startsWith' | 'equals' | 'gt' | 'gte' | 'in' | 'lt' | 'lte' | 'not' | 'notIn';
}
