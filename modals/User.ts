import Rental from './Rental';

export default class User {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  dateJoined: Date | undefined;
  birthdate: Date | undefined;
  itemsUpForRent: [Rental];
  isVerified: boolean = false;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dateJoined: Date | undefined,
    birthdate: Date | undefined,
    itemsUpForRent: [Rental],
    isVerified: boolean,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateJoined = dateJoined;
    this.birthdate = birthdate;
    this.itemsUpForRent = itemsUpForRent;
    this.isVerified = isVerified;
  }

  public getFirstLetterOfLastName(): string {
    return this.lastName.charAt(0) + '.';
  }
}
