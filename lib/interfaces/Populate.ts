export interface Populate {
  path: string;
  select: string;
  primaryKey?: string;
  populate?: Populate[];
}
