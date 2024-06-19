import {ImageSourcePropType, Platform} from 'react-native';
import Colors from './assets/Colors';
import Geocoder from 'react-native-geocoding';
import {Address, Price, Rental, TimeIncrement} from './src/API';
import LatLng = Geocoder.LatLng;

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

  public static getUserInitials(name: string): string {
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
      .catch(error => console.error(error));
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

  public static getIndexFromRentalID(
    rentals: Rental[],
    id: string | undefined,
  ): number {
    return rentals.findIndex(rental => rental.id === id);
  }

  public static getFormattedNumberText(num = 0, word: string): string {
    let formattedNum: string;
    if (num === 1) {
      return num + ' ' + word;
    }
    if (num >= 1000000) {
      const millionValue = (num / 1000000).toFixed(1);
      formattedNum = millionValue.endsWith('.0')
        ? millionValue.slice(0, -2) + 'm'
        : millionValue + 'm';
    } else if (num >= 1000) {
      const thousandValue = (num / 1000).toFixed(1);
      formattedNum = thousandValue.endsWith('.0')
        ? thousandValue.slice(0, -2) + 'k'
        : thousandValue + 'k';
    } else {
      formattedNum = num.toString();
    }

    return formattedNum + ' ' + word + 's';
  }

  public static formatCustomDate(date: Date): string {
    const today = new Date();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const timeDifference = today.getTime() - date.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysDifference === 0) {
      return 'Today';
    } else if (daysDifference === 1) {
      return 'Yesterday';
    } else if (daysDifference < 7) {
      return daysOfWeek[date.getDay()];
    } else if (daysDifference < 365) {
      return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
    } else {
      const yearsDifference = today.getFullYear() - date.getFullYear();
      return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
    }
  }

  public static getPriceItems(pricesString: string): Price[] {
    let pricesStringArr: string[] = pricesString.split('|');
    let priceItems: Price[] = [];
    for (const priceString of pricesStringArr) {
      let priceStringArr: string[] = priceString.split(',');
      let isFirmOnPrice: boolean = priceStringArr[2] === 'F';
      priceItems.push({
        __typename: 'Price',
        amount: parseInt(priceStringArr[0], 10),
        timeIncrement: TimeIncrement.DAY,
        isFirmOnPrice: isFirmOnPrice,
      });
    }
    return priceItems;
  }

  public static toISODateString(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
  }

  public static addressToString(address: Address) {
    return `${address.street} ${address.street2}, ${address.city}, ${address.state} ${address.zip}, ${address.country}`;
  }
}
