import { Filter } from './Filter';

type PopulateObject = {
  [x: string]: string;
};

export type Populate = Array<
  | PopulateObject
  | { filter: Filter }
  | { populate: Populate }
  | { primaryKey: string }
  | { path: string }
  | { select: string }
>;
