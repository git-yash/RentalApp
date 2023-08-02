import {Rental} from '../../modals/Rental';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Review} from '../../modals/Review';
import Geocoder from 'react-native-geocoding';
import LatLng = Geocoder.LatLng;

export default class ExploreService {
  async getUserFromUserEmail(email: string): Promise<User | undefined> {
    return firestore()
      .collection<User>('users')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        console.log(documentSnapshot.exists);
        console.log(documentSnapshot.data() as User);
        return documentSnapshot.exists
          ? (documentSnapshot.data() as User)
          : undefined;
      });
  }

  async getAllReviews(rentalID: string): Promise<Review[]> {
    try {
      const collectionRef = firestore()
        .collection<Rental>('posts')
        .doc(rentalID)
        .collection('reviews');
      const querySnapshot = await collectionRef.get();

      const reviews: Review[] = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        reviews.push({
          user: undefined,
          description: data.description,
          postID: data.postID,
          rating: data.rating,
          title: data.title,
        });
      });

      return reviews;
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  }

  async getAllPicturePaths(postID: string): Promise<string[]> {
    try {
      const storageRef = storage()
        .ref()
        .child('rentalPostPictures/' + postID);

      const items = await storageRef.listAll();

      return await Promise.all(items.items.map(ref => ref.getDownloadURL()));
    } catch (error) {
      console.error('Error fetching files:', error);
      return [];
    }
  }

  async getAllRentals(
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

        rentalObjects.push({
          user: undefined,
          userEmail: data.userEmail,
          id: doc.id,
          reviews: [],
          title: data.title,
          pricePerHour: data.pricePerHour,
          rating: data.rating,
          address: data.address,
          location: data.location,
          description: data.description,
          isAvailable: data.isAvailable,
          picturePaths: [],
        });
      });

      rentalObjects.forEach(rental => {
        this.getAllPicturePaths(rental.id).then(paths => {
          rental.picturePaths = paths;
        });

        this.getAllReviews(rental.id).then(
          _reviews => (rental.reviews = _reviews),
        );

        this.getUserFromUserEmail(rental.userEmail).then(_user => {
          rental.user = _user;
        });
      });

      return rentalObjects;
    } catch (error) {
      console.error('Error fetching rental objects:', error);
      return [];
    }
  }
}
