import {Rental, Review} from '../../../src/API';

export type RentalDetails = {
  rental: Rental;
  distance: string;
  reviews: Review[];
};
