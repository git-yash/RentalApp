import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import GeoPoint = FirebaseFirestoreTypes.GeoPoint;
import {Review} from './Review';

export interface Rental {
  id: string;
  title: string;
  description: string;
  isAvailable: boolean;
  pricePerHour: number;
  rating: number;
  address: string;
  location: GeoPoint;
  reviews: Review[];
  userEmail: string;
  user?: User;
  picturePaths: string[];
}
