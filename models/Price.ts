export enum TimeIncrements {
  Hour,
  Day,
  Week,
  Month,
}

export interface Price {
  price: number;
  timeIncrement: number;
  isFirmOnPrice?: boolean;
}
