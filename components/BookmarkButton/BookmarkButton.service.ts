import {generateClient} from 'aws-amplify/api';
import {
  createBookmarkedRental,
  deleteBookmarkedRental,
} from '../../src/graphql/mutations';
import {
  CreateBookmarkedRentalInput,
  DeleteBookmarkedRentalInput,
  Rental,
} from '../../src/API';
import {bookmarkedRentalsByUserID} from '../../src/graphql/queries';

export default class BookmarkButtonService {
  client = generateClient();

  async createBookmark(userID: string, rental: Rental) {
    this.client
      .graphql({
        query: createBookmarkedRental,
        variables: {
          input: {
            userID: userID,
            bookmarkedRentalRentalId: rental.id,
          } as CreateBookmarkedRentalInput,
        },
      })
      .catch(e => {
        throw e;
      });
  }

  async deleteBookmark(bookmarkID: string) {
    this.client
      .graphql({
        query: deleteBookmarkedRental,
        variables: {
          input: {
            id: bookmarkID,
          } as DeleteBookmarkedRentalInput,
        },
      })
      .catch(e => {
        throw e;
      });
  }

  async getBookmark(userID: string, rentalID: string) {
    return this.client
      .graphql({
        query: bookmarkedRentalsByUserID,
        variables: {
          userID: userID,
          filter: {
            bookmarkedRentalRentalId: {eq: rentalID},
          },
        },
      })
      .then(r => {
        return r;
      })
      .catch(e => {
        throw e;
      });
  }
}