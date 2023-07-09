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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
