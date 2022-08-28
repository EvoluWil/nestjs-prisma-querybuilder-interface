import { And } from './And';
import { Filter } from './Filter';
import { Or } from './Or';

export type FiltersFields = Array<Filter | Or | And>;
