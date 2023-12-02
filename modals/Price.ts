export enum TimeIncrements {
  Hour,
  Day,
  Week,
}

export interface Price {
  price: number;
  timeIncrement: number;
  isFirmOnPrice: boolean;
}
