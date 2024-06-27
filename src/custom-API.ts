import {Rental} from './API';

export type ListBookmarkedRentalsWithDetailsQuery = {
  listBookmarkedRentals?: {
    __typename: 'ModelBookmarkedRentalConnection';
    items: Array<{
      __typename: 'BookmarkedRental';
      id: string;
      userID: string;
      rental: Rental;
      createdAt: string;
      updatedAt: string;
      bookmarkedRentalRentalId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};
