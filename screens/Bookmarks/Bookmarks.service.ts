import {generateClient} from 'aws-amplify/api';
import {listBookmarkedRentalsWithDetails} from '../../src/graphql/custom-queries';
import {Rental} from '../../src/API';

export default class BookmarksService {
  client = generateClient();

  async getBookmarkedRentals(userID: string): Promise<Rental[]> {
    return this.client
      .graphql({
        query: listBookmarkedRentalsWithDetails,
        variables: {
          filter: {
            userID: {eq: userID},
          },
        },
      })
      .then(response => {
        return response.data.listBookmarkedRentals.items.map(br => br.rental);
      })
      .catch(e => {
        throw e;
      });
  }
}
