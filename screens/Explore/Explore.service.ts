import Geocoder from 'react-native-geocoding';
import {GraphQLResult} from 'aws-amplify/api';
import {
  bookingsByRentalID,
  getUser,
  reviewsByRental,
} from '../../src/graphql/queries';
import {GetUserQuery, Rental} from '../../src/API';
import {listRentalsForCard} from '../../src/graphql/custom-queries';
import {AbstractAPIService} from '../../services/AbstractAPI.service';
import LatLng = Geocoder.LatLng;

export default class ExploreService extends AbstractAPIService {
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
        query: reviewsByRental,
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
        query: listRentalsForCard,
        variables: {
          filter: filters,
          limit: 15,
          availabilityCategoryIndex: `1#${category}`,
        },
      })
      .then(response => {
        return response.data.rentalsByAvailabilityCategoryIndex
          .items as Rental[];
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
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
        {latitude: {between: [minLat, maxLat]}},
        {longitude: {between: [minLon, maxLon]}},
      ],
    };
  }
}
