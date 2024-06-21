import storage from '@react-native-firebase/storage';
import Geocoder from 'react-native-geocoding';
import {generateClient, GraphQLResult} from 'aws-amplify/api';
import {
  bookingsByRentalID,
  getUser,
  reviewsByRentalID,
} from '../../src/graphql/queries';
import {GetUserQuery, Rental} from '../../src/API';
import {listRentalsWithAllDetails} from '../../src/graphql/customQueries';
import LatLng = Geocoder.LatLng;

export default class ExploreService {
  client;

  constructor() {
    this.client = generateClient();
  }

  async getUserFromUserEmail(
    email: string,
  ): Promise<GraphQLResult<GetUserQuery>> {
    return await this.client.graphql({
      query: getUser,
      variables: {
        id: email,
      },
    });
    // return firestore()
    //   .collection<User>('users')
    //   .doc(email)
    //   .get()
    //   .then(documentSnapshot => {
    //     return documentSnapshot.exists
    //       ? (documentSnapshot.data() as User)
    //       : undefined;
    //   });
  }

  async getBookedDateRanges(rentalID: string): Promise<void> {
    this.client
      .graphql({
        query: bookingsByRentalID,
        variables: {
          rentalID: rentalID,
        },
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
    // try {
    //   const collectionRef = firestore()
    //     .collection<Rental>('posts')
    //     .doc(rentalID)
    //     .collection('bookedDateRanges');
    //   const querySnapshot = await collectionRef.get();
    //
    //   const bookedDateRanges: DateRange[] = [];
    //   querySnapshot.forEach(doc => {
    //     const data = doc.data();
    //     bookedDateRanges.push({
    //       startDate: data.startDate,
    //       endDate: data.endDate,
    //     });
    //   });
    //   return bookedDateRanges;
    // } catch (error) {
    //   console.error('Error fetching documents:', error);
    //   return [];
    // }
  }

  async getAllReviews(rentalID: string): Promise<void> {
    this.client
      .graphql({
        query: reviewsByRentalID,
        variables: {
          rentalID: rentalID,
        },
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
    // try {
    //   const collectionRef = firestore()
    //     .collection<Rental>('posts')
    //     .doc(rentalID)
    //     .collection('reviews');
    //   const querySnapshot = await collectionRef.get();
    //
    //   const reviews: Review[] = [];
    //   querySnapshot.forEach(doc => {
    //     const data = doc.data();
    //     reviews.push({
    //       user: undefined,
    //       userEmail: data.userEmail,
    //       description: data.description,
    //       postID: data.postID,
    //       rating: data.rating,
    //       title: data.title,
    //       date: data.date.toDate(),
    //     });
    //   });
    //   for (const review of reviews) {
    //     this.getUserFromUserEmail(review.userEmail).then(_user => {
    //       review.user = _user;
    //     });
    //   }
    //
    //   return reviews;
    // } catch (error) {
    //   console.error('Error fetching documents:', error);
    //   return [];
    // }
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

  // async getQuerySnapshot(
  //   databaseRef: FirebaseFirestoreTypes.CollectionReference<Rental>,
  //   minLatitude: number,
  //   minLongitude: number,
  //   maxLatitude: number,
  //   maxLongitude: number,
  //   category: string,
  //   searchText?: string,
  //   dateRange?: DateRange,
  // ): Promise<FirebaseFirestoreTypes.QuerySnapshot<Rental>> {
  //   return await databaseRef
  //     .where(
  //       'location',
  //       '>=',
  //       new firestore.GeoPoint(minLatitude, minLongitude),
  //     )
  //     .where(
  //       'location',
  //       '<=',
  //       new firestore.GeoPoint(maxLatitude, maxLongitude),
  //     )
  //     .where('category', '==', category)
  //     .limit(10)
  //     .get();
  // }

  async getAllRentals(
    location: LatLng,
    radiusInMiles: number,
    category: number,
    searchText?: string,
    startDate?: Date,
    endDate?: Date,
  ) {
    return this.client
      .graphql({
        query: listRentalsWithAllDetails,
        variables: {
          filter: {
            and: [
              {
                or: [
                  {
                    title: {contains: searchText || ''},
                    description: {contains: searchText || ''},
                  },
                ],
                and: [
                  {
                    category: {eq: category},
                    isAvailable: {eq: true},
                  },
                ],
              },
            ],
          },
          limit: 15,
        },
      })
      .then(response => {
        return response.data.listRentals.items as Rental[];
      })
      .catch(e => {
        console.error(e);
        throw e;
      });
    // const databaseRef = firestore().collection<Rental>('posts');
    // const currentLatitude = location.lat;
    // const currentLongitude = location.lng;
    //
    // const latRadian = radiusInMiles / 3963.2; // Approximate miles to radians conversion
    // const lonRadian =
    //   radiusInMiles / 3963.2 / Math.cos(currentLatitude * (Math.PI / 180));
    // const maxLatitude = currentLatitude + (latRadian * 180) / Math.PI;
    // const minLatitude = currentLatitude - (latRadian * 180) / Math.PI;
    // const maxLongitude = currentLongitude + (lonRadian * 180) / Math.PI;
    // const minLongitude = currentLongitude - (lonRadian * 180) / Math.PI;
    // // const miniRentalExploreViewService = new MiniRentalExploreViewService();
    // let querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<Rental>;
    //
    // try {
    //   if (!searchText) {
    //     querySnapshot = await databaseRef
    //       .where(
    //         'location',
    //         '>=',
    //         new firestore.GeoPoint(minLatitude, minLongitude),
    //       )
    //       .where(
    //         'location',
    //         '<=',
    //         new firestore.GeoPoint(maxLatitude, maxLongitude),
    //       )
    //       .where('category', '==', category)
    //       .get();
    //   } else {
    //     querySnapshot = await databaseRef
    //       .where(
    //         'location',
    //         '>=',
    //         new firestore.GeoPoint(minLatitude, minLongitude),
    //       )
    //       .where(
    //         'location',
    //         '<=',
    //         new firestore.GeoPoint(maxLatitude, maxLongitude),
    //       )
    //       .where(
    //         Filter.or(
    //           Filter('title', 'contains', searchText),
    //           Filter('description', 'contains', searchText),
    //         ),
    //       )
    //       .get();
    //   }
    //
    //   let rentals: Rental[] = [];
    //   querySnapshot.forEach(doc => {
    //     const rental: Rental = doc.data();
    //
    //     rentals.push({
    //       user: undefined,
    //       userEmail: rental.userEmail,
    //       id: doc.id,
    //       reviews: [],
    //       title: rental.title,
    //       prices: rental.prices,
    //       priceItems: Util.getPriceItems(rental.prices),
    //       rating: rental.rating,
    //       address: rental.address,
    //       bookedDateRanges: [],
    //       location: rental.location,
    //       description: rental.description,
    //       isAvailable: rental.isAvailable,
    //       picturePaths: [],
    //       category: rental.category,
    //       deliveryOption: rental.deliveryOption,
    //     });
    //   });
    //
    //   for (const rental of rentals) {
    //     this.getAllPicturePaths(rental.id).then(paths => {
    //       rental.picturePaths = paths;
    //     });
    //
    //     this.getAllReviews(rental.id).then(
    //       _reviews => (rental.reviews = _reviews),
    //     );
    //
    //     this.getUserFromUserEmail(rental.userEmail).then(_user => {
    //       rental.user = _user;
    //     });
    //     this.getBookedDateRanges(rental.id).then(
    //       _bookedDateRanges => (rental.bookedDateRanges = _bookedDateRanges),
    //     );
    //   }
    //   if (dateRange) {
    //     rentals = rentals.filter(rental => {
    //       return !rental.bookedDateRanges.some(
    //         bookedDateRange =>
    //           bookedDateRange.startDate <= dateRange.endDate &&
    //           bookedDateRange.endDate >= dateRange.startDate,
    //       );
    //     });
    //   }
    //
    //   return rentals;
    // } catch (error) {
    //   console.error('Error fetching rental objects:', error);
    //   return [];
    // }
  }
}
