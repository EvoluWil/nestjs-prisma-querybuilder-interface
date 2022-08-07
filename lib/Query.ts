export interface Populate {
  path: string;
  select: string;
  populate?: Populate[];
}

export interface FiltersFields {
  path: string;
  value: string;
  type?: 'string' | 'boolean' | 'number' | 'date';
  operator?:
    | 'contains'
    | 'endsWith'
    | 'startsWith'
    | 'equals'
    | 'gt'
    | 'gte'
    | 'in'
    | 'lt'
    | 'lte'
    | 'not'
    | 'notIn';
}

export interface Query {
  select: string;
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  sortField?: string;
  populate?: Populate[];
  operator?: 'and' | 'or' | 'not';
  filter?: FiltersFields[];
}
