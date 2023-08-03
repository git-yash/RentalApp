import axios from 'axios';
import {Platform} from 'react-native';
import Util from '../../Util';

export default class MiniRentalExploreViewService {
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
    destinationAddress: string,
  ): Promise<string | undefined> {
    try {
      let address: string;
      return this.getAddressFromLocation(latitude, longitude).then(
        async _address => {
          address = _address;
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${address}&destination=${destinationAddress}&key=${Util.getAPIKeyForPlatform(
              Platform.OS,
            )}`,
          );
          const {status, routes} = response.data;

          if (status === 'OK' && routes.length > 0) {
            const {distance, duration} = routes[0].legs[0];
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
