import {ImageSourcePropType, Platform} from 'react-native';
import Colors from './assets/Colors';
import auth from '@react-native-firebase/auth';
import Geocoder from 'react-native-geocoding';
import LatLng = Geocoder.LatLng;
import {Rental} from './modals/Rental';

export default class Util {
  public static formatPhoneNumber(phoneNumber: string): string {
    // Remove any non-digit characters from the phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the phone number has a valid length
    if (cleanedNumber.length === 10) {
      // Format as (XXX) XXX-XXXX
      return cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else {
      // Invalid phone number length, return the original string
      return phoneNumber;
    }
  }

  public static isValidEmail(email: string): boolean {
    if (email.length === 0) {
      return false;
    }

    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    return emailRegex.test(email);
  }

  public static getImageSource(imageName: string): ImageSourcePropType {
    if (imageName === 'Apple') {
      return require('./assets/images/appleLogo.png');
    } else if (imageName === 'Google') {
      return require('./assets/images/googleLogo24.png');
    }

    return require('./assets/images/facebookLogo.png');
  }

  public static getPasswordStrength(password: string): string {
    if (password.length === 0) {
      return 'No Password';
    }

    let strongPassword = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
    );
    let mediumPassword = new RegExp(
      '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
    );

    if (strongPassword.test(password)) {
      return 'Strong';
    } else if (mediumPassword.test(password)) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  }

  public static getPasswordStrengthBorderColor(
    passwordStrength: string,
  ): string {
    if (passwordStrength === 'Strong') {
      return Colors.green;
    } else if (passwordStrength === 'Medium') {
      return Colors.mediumYellow;
    } else if (passwordStrength === 'Weak') {
      return Colors.invalidRed;
    }

    return Colors.gray400;
  }

  public static isPasswordInvalid(password: string): boolean {
    return (
      Util.getPasswordStrength(password) === 'No Password' ||
      Util.getPasswordStrength(password) === 'Weak'
    );
  }

  public static getAge(birthDate: Date) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  public static options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  public static getUserInitials(): string {
    let name = auth().currentUser?.displayName;
    if (typeof name === 'string') {
      const nameArray = name.split(' ');
      const firstNameIn = nameArray[0].charAt(0).toUpperCase();
      const lastNameIn = nameArray[nameArray.length - 1]
        .charAt(0)
        .toUpperCase();
      return firstNameIn + lastNameIn;
    }

    return '';
  }

  public static getAPIKeyForPlatform(platform: string): string {
    switch (platform) {
      case 'ios':
        return 'AIzaSyBess9KnTOAUWkF1uLGWsCR6mdJM4VTvl0';
      case 'android':
        return 'AIzaSyALRojxK1-M8lo-vB28xa1_nQomRhj4K3Q';
      default:
        return 'AIzaSyC_ndBoSOiL1Cvm3tzb-kdSC18Fpfja3_Q';
    }
  }

  public static getLocationFromAddress(address: string): LatLng | void {
    Geocoder.init(Util.getAPIKeyForPlatform(Platform.OS));

    Geocoder.from(address)
      .then(json => {
        return json.results[0].geometry.location;
      })
      .catch(error => console.log(error));
  }

  public static getNameWithLastNameAbbreviated(
    name: string | undefined,
  ): string | undefined {
    if (!name) {
      return undefined;
    }
    let nameArray: string[] = name.split(' ');
    return nameArray[0] + ' ' + nameArray[1][0] + '.';
  }

  public static getCityAndState(address: string): string | null {
    const regex = /,\s*([^,]+),\s*([^,]+),\s*USA$/;
    const match = address.match(regex);

    if (match) {
      const city = match[1].trim();
      const state = match[2].trim();
      return `${city}, ${state}`;
    } else {
      return null;
    }
  }

  public static getIndexFromRentalID(rentals: Rental[], id: string): number {
    return rentals.findIndex(rental => rental.id === id);
  }
}
