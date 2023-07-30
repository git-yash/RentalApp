import {ImageSourcePropType, Platform} from 'react-native';
import Colors from './assets/Colors';
import auth from '@react-native-firebase/auth';
import Geocoder from 'react-native-geocoding';
import firestore from '@react-native-firebase/firestore';
import LatLng = Geocoder.LatLng;
import {Rental} from './modals/Rental';
import {Review} from './modals/Review';

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

  public static async getAllRentals(
    location: LatLng,
    radiusInMiles: number,
  ): Promise<Rental[]> {
    const databaseRef = firestore().collection<Rental>('posts');
    const currentLatitude = location.lat;
    const currentLongitude = location.lng;

    const latRadian = radiusInMiles / 3963.2; // Approximate miles to radians conversion
    const lonRadian =
      radiusInMiles / 3963.2 / Math.cos(currentLatitude * (Math.PI / 180));
    const maxLatitude = currentLatitude + (latRadian * 180) / Math.PI;
    const minLatitude = currentLatitude - (latRadian * 180) / Math.PI;
    const maxLongitude = currentLongitude + (lonRadian * 180) / Math.PI;
    const minLongitude = currentLongitude - (lonRadian * 180) / Math.PI;

    try {
      const querySnapshot = await databaseRef
        .where(
          'location',
          '>=',
          new firestore.GeoPoint(minLatitude, minLongitude),
        )
        .where(
          'location',
          '<=',
          new firestore.GeoPoint(maxLatitude, maxLongitude),
        )
        .get();

      const rentalObjects: Rental[] = [];
      querySnapshot.forEach(doc => {
        const data: Rental = doc.data();
        rentalObjects.push({id: doc.id, ...data});
      });

      return rentalObjects;
    } catch (error) {
      console.error('Error fetching rental objects:', error);
      return [];
    }
  }
}
