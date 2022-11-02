import { Filter } from './Filter';
import { Populate } from './Populate';
import { SortFields } from './SortFields';

export interface Query {
  select?: string;
  page?: number;
  limit?: number;
  sort?: SortFields;
  populate?: Populate;
  filter?: Filter;
}
