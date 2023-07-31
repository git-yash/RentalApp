import {Rental} from '../../modals/Rental';
import firestore from '@react-native-firebase/firestore';
import LatLng = Geocoder.LatLng;
import storage from '@react-native-firebase/storage';
import {Review} from '../../modals/Review';
import Geocoder from 'react-native-geocoding';

export default class ExploreService {
  async getAllReviews(rentalID: string): Promise<Review[]> {
    try {
      const collectionRef = firestore()
        .collection('posts')
        .doc(rentalID)
        .collection('reviews');
      const querySnapshot = await collectionRef.get();

      const reviews: Review[] = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        reviews.push({
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

        let picturePaths: string[] = [];
        this.getAllPicturePaths(doc.id).then(_paths => (picturePaths = _paths));

        let reviews: Review[] = [];
        this.getAllReviews(doc.id).then(_reviews => (reviews = _reviews));

        rentalObjects.push({
          id: doc.id,
          reviews: reviews,
          title: data.title,
          pricePerHour: data.pricePerHour,
          rating: data.rating,
          address: data.address,
          location: data.location,
          description: data.description,
          isAvailable: data.isAvailable,
          owner: data.owner,
          picturePaths: picturePaths,
        });
      });

      rentalObjects.forEach(rental => {
        this.getAllPicturePaths(rental.id).then(paths => {
          rental.picturePaths = paths;
        });
      });

      return rentalObjects;
    } catch (error) {
      console.error('Error fetching rental objects:', error);
      return [];
    }
  }
}
