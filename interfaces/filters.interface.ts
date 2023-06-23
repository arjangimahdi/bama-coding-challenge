export interface Filters {
  index?: number;
  name: string;
  entity: {
    readonly id: number;
    name: string;
  }
}