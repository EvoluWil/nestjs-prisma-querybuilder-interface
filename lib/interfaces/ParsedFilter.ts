import { Filter } from './Filter';

export interface ParsedFilter extends Filter {
  path: string;
  value: any;
  type: any;
  operator: any;
}
