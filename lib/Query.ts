import { FiltersFields } from './FiltersFields';
import { Populate } from './Populate';
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
