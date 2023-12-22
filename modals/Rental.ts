import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import GeoPoint = FirebaseFirestoreTypes.GeoPoint;
import {Review} from './Review';
import {Price} from './Price';

export interface Rental {
  id: string;
  title: string;
  description: string;
  isAvailable: boolean;
  prices: Price[];
  rating: number;
  address: string;
  location: GeoPoint;
  reviews: Review[];
  userEmail: string;
  user?: User;
  picturePaths: string[];
  isBookmarked?: boolean;
  deliveryOption: string;
  category: string;
}
