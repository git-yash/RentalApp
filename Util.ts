import {ImageSourcePropType} from 'react-native';
import Colors from './assets/Colors';

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
      return true;
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
      Util.getPasswordStrength(password) === 'No Password' || Util.getPasswordStrength(password) === 'Weak'
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
}
