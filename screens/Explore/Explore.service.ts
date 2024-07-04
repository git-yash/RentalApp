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
    category?: string,
    searchText?: string,
    startDate?: Date,
    endDate?: Date,
  ) {
    let filters = this.createLocationInMilesFilter(location, radiusInMiles);
    const categoryFilter = this.createCategoryFilter(category);
    if (categoryFilter !== undefined) {
      // @ts-ignore
      filters.and.push(categoryFilter);
    }

    if (searchText) {
      filters.and.push({
        // @ts-ignore
        or: [
          {title: {contains: searchText}},
          {description: {contains: searchText}},
        ],
      });
    }

    if (startDate && endDate) {
      filters.and.push({
        // @ts-ignore
        or: [
          {bookingStartDates: {ge: startDate.toISOString()}},
          {bookingEndDates: {le: endDate.toISOString()}},
        ],
      });
    }

    return this.client
      .graphql({
        query: listRentalsWithAllDetails,
        variables: {
          filter: filters,
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

  private createCategoryFilter(category?: string) {
    if (!category) {
      return undefined;
    }
    return {category: {eq: category}};
  }

  private createLocationInMilesFilter(
    location: Geocoder.LatLng,
    radiusInMiles: number,
  ) {
    const earthRadius = 3958.8; // Earth's radius in miles

    const latRad = location.lat * (Math.PI / 180);

    const latDiff = radiusInMiles / earthRadius;
    const lonDiff = radiusInMiles / (earthRadius * Math.cos(latRad));

    const minLat = location.lat - latDiff * (180 / Math.PI);
    const maxLat = location.lat + latDiff * (180 / Math.PI);
    const minLon = location.lng - lonDiff * (180 / Math.PI);
    const maxLon = location.lng + lonDiff * (180 / Math.PI);

    // Prepare filters
    return {
      and: [
        {isAvailable: {eq: 1}},
        {latitude: {between: [minLat, maxLat]}},
        {longitude: {between: [minLon, maxLon]}},
      ],
    };
  }
}
