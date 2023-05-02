import { Filter } from './Filter';

/**
 * exemples:
 *
 *  `POPULATE`
 *
 *  [{ path: 'user', select: 'firstName lastName', filter: [{ path: 'firstName', value: 'John' }], primaryKey: '_id', populate: [{ path: 'address', select: 'street' }] }]
 *
 *  * path is the field that will be populated
 *
 *  * select is the fields that will be returned
 *
 *  * populate is the fields that will be populate in current path
 *
 *  * filter is the fields that will be used to filter the populate
 *
 *  * primaryKey is the field that will be used to populate the path
 *  @default 'id'
 */

export type Populate = Array<{
  filter?: Filter;
  populate?: Populate;
  primaryKey?: string;
  path: string;
  select: string;
}>;
