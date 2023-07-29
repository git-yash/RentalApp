type Rental = {
  id: string;
  title: string;
  description: string;
  isAvailable: boolean;
  pricePerHour: number;
  rating: number;
  address: string;
  latitude: number;
  longitude: number;
  picturePaths: [string];
  reviews: [Review];
  owner: User;
};
