import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {Review} from './Review';
import {Price} from './Price';
import {DateRange} from './DateRange';
import GeoPoint = FirebaseFirestoreTypes.GeoPoint;

export interface Rental {
  id: string;
  title: string;
  description: string;
  isAvailable: boolean;
  prices: string;
  priceItems: Price[];
  rating: number;
  address: string;
  location: GeoPoint;
  reviews: Review[];
  userEmail: string;
  user?: User;
  picturePaths: string[];
  bookedDateRanges: DateRange[];
  isBookmarked?: boolean;
  deliveryOption: string;
  category: string;
}
