import {ImageSourcePropType, Platform} from 'react-native';
import Colors from './assets/Colors';
import Geocoder from 'react-native-geocoding';
import {Address, Price, Rental, TimeIncrement} from './src/API';
import {
  ANDROID_GOOGLE_API_KEY,
  DEFAULT_GOOGLE_API_KEY,
  IOS_GOOGLE_API_KEY,
} from '@env';
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

    const regex: RegExp =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regex.test(email);
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
    const nameArray = name.split(' ');
    const firstNameIn = nameArray[0].charAt(0).toUpperCase();
    const lastNameIn = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
    return firstNameIn + lastNameIn;
  }

  public static getAPIKeyForPlatform(platform: string): string {
    switch (platform) {
      case 'ios':
        return IOS_GOOGLE_API_KEY;
      case 'android':
        return ANDROID_GOOGLE_API_KEY;
      default:
        return DEFAULT_GOOGLE_API_KEY;
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

  public static addressToString(address?: Address): string {
    if (!address) {
      return '';
    }
    return `${address.street} ${address.street2 || ''}, ${address.city}, ${
      address.state
    } ${address.zip}, ${address.country}`;
  }

  public static getCategoryTextFromIndex(index: number): string {
    let categoryNames: string[] = [
      'Lawn Equipment',
      'Power Tools',
      'Electronics',
      'Pool Equipment',
      'Sports',
      'Outdoors',
      'Home',
      'Cooking',
      'Other',
    ];
    return categoryNames[index];
  }

  public static getPriceString(
    amountHourly?: number | null,
    amountDaily?: number | null,
    amountWeekly?: number | null,
  ) {
    const parts: string[] = [];

    if (amountHourly !== undefined && amountHourly !== null) {
      parts.push(`$${amountHourly}H`);
    }

    if (amountDaily !== undefined && amountDaily !== null) {
      parts.push(`$${amountDaily}D`);
    }

    if (amountWeekly !== undefined && amountWeekly !== null) {
      parts.push(`$${amountWeekly}W`);
    }

    return parts.join(' / ');
  }

  public static getChatDate(date: Date): string {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    // Function to check if the input date is today
    const isToday = (inputDate: Date): boolean => {
      return inputDate.toDateString() === now.toDateString();
    };

    // Function to check if the input date is yesterday
    const isYesterday = (inputDate: Date): boolean => {
      return inputDate.toDateString() === yesterday.toDateString();
    };

    // Format time in "h:mm am/pm" format
    const formatTime = (inputDate: Date): string => {
      const hours = inputDate.getHours();
      const minutes = inputDate.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12; // convert 0 hour to 12
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}:${formattedMinutes}${ampm}`;
    };

    // Get the month, day, and weekday in a readable format
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getMonthDay = (inputDate: Date): string => {
      const month = monthNames[inputDate.getMonth()];
      const day = inputDate.getDate();
      const dayOfWeek = dayNames[inputDate.getDay()];
      const daySuffix = (day: number): string => {
        if (day > 3 && day < 21) {
          return 'th';
        }
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      };
      return `${dayOfWeek}, ${month} ${day}${daySuffix(day)}`;
    };

    if (isToday(date)) {
      return `Today at ${formatTime(date)}`;
    } else if (isYesterday(date)) {
      return `Yesterday at ${formatTime(date)}`;
    } else {
      return `${getMonthDay(date)} at ${formatTime(date)}`;
    }
  }
}
