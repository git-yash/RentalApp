import User from './User';

export default class Rental {
  id: string = '';
  image: string = '';
  title: string = '';
  user: User;
  rentalAddress: string = '';
  pricePerDay: number = 0;
  rating: number = 0;

  constructor(
    id: string,
    image: string,
    title: string,
    user: User,
    rentalAddress: string,
    pricePerDay: number,
    rating: number,
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.user = user;
    this.rentalAddress = rentalAddress;
    this.pricePerDay = pricePerDay;
    this.rating = rating;
  }
}
