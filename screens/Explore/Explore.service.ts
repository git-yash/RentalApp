import Geocoder from 'react-native-geocoding';
import {generateClient, GraphQLResult} from 'aws-amplify/api';
import {
  bookingsByRentalID,
  getUser,
  reviewsByRentalID,
} from '../../src/graphql/queries';
import {GetUserQuery, Rental} from '../../src/API';
import {listRentalsWithAllDetails} from '../../src/graphql/custom-queries';
import LatLng = Geocoder.LatLng;

export default class ExploreService {
  client;

  constructor() {
    this.client = generateClient();
  }

  async getUserFromUserEmail(
    email: string,
  ): Promise<GraphQLResult<GetUserQuery>> {
    return await this.client.graphql({
      query: getUser,
      variables: {
        id: email,
      },
    });
  }

  async getBookedDateRanges(rentalID: string): Promise<void> {
    this.client
      .graphql({
        query: bookingsByRentalID,
        variables: {
          rentalID: rentalID,
        },
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }

  async getAllReviews(rentalID: string): Promise<void> {
    this.client
      .graphql({
        query: reviewsByRentalID,
        variables: {
          rentalID: rentalID,
        },
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }

  async getAllRentals(
    location: LatLng,
    radiusInMiles: number,
    category: number,
    searchText?: string,
    startDate?: Date,
    endDate?: Date,
  ) {
    return this.client
      .graphql({
        query: listRentalsWithAllDetails,
        variables: {
          filter: {
            and: [
              {
                or: [
                  {
                    title: {contains: searchText || ''},
                    description: {contains: searchText || ''},
                  },
                ],
                and: [
                  {
                    category: {eq: category},
                    isAvailable: {eq: true},
                  },
                ],
              },
            ],
          },
          limit: 15,
        },
      })
      .then(response => {
        return response.data.listRentals.items as Rental[];
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
  }
}
