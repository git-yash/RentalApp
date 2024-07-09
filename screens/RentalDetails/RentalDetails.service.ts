import axios from 'axios';
import Util from '../../Util';
import {Platform} from 'react-native';
import {
  Address,
  ModelReviewConnection,
  ModelSortDirection,
  Rental,
} from '../../src/API';
import {AbstractAPIService} from '../../services/AbstractAPI.service';
import {
  getRentalWithDetails,
  reviewByRentalForRentalDetails,
} from '../../src/graphql/custom-queries';

export default class RentalDetailsService extends AbstractAPIService {
  async getRentalDetails(rentalID: string) {
    return await this.client
      .graphql({
        query: getRentalWithDetails,
        variables: {id: rentalID},
      })
      .then(response => {
        return response.data.getRental as Rental;
      })
      .catch((e: Error) => {
        throw this.logError(e, 'Error fetching rental');
      });
  }

  async getReviews(rentalID: string, limit: number, nextToken?: string) {
    return await this.client
      .graphql({
        query: reviewByRentalForRentalDetails,
        variables: {
          rentalID: rentalID,
          sortDirection: ModelSortDirection.DESC,
          limit: limit,
          nextToken: nextToken,
        },
      })
      .then(response => {
        return response.data.reviewsByRental as ModelReviewConnection;
      })
      .catch((e: Error) => {
        throw this.logError(e, 'Error fetching reviews');
      });
  }

  async getAddressFromLocation(
    latitude: number,
    longitude: number,
  ): Promise<string> {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${Util.getAPIKeyForPlatform(
          Platform.OS,
        )}`,
      );

      const {results, status} = response.data;

      if (status === 'OK' && results.length > 0) {
        return results[0].formatted_address as string;
      } else {
        return 'No address found for the given coordinates.';
      }
    } catch (error) {
      return 'error';
    }
  }

  async getDistanceAndTimeFromAddresses(
    latitude: number,
    longitude: number,
    destinationAddress: Address,
  ): Promise<string | undefined> {
    if (!destinationAddress.zip) {
      return '';
    }

    const addressString: string = Util.addressToString(destinationAddress);
    try {
      let address: string;
      return this.getAddressFromLocation(latitude, longitude).then(
        async _address => {
          address = _address;
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${address}&destination=${addressString}&key=${Util.getAPIKeyForPlatform(
              Platform.OS,
            )}`,
          );
          const {status, routes} = response.data;

          if (status === 'OK' && routes.length > 0) {
            const {distance} = routes[0].legs[0];
            return distance.text as string;
          } else {
            return 'No routes found.';
          }
        },
      );
    } catch (error) {
      return 'error';
    }
  }
}
