export interface Populate {
  path: string;
  select: string;
  populate?: Populate[];
}
