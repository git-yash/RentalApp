import {Rental} from '../../modals/Rental';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ExploreService from '../Explore/Explore.service';

export default class BookmarksService {
  async setBookmarkedPosts(setBookmarkedPosts: any): Promise<void> {
    const exploreService = new ExploreService();
    // Reference to the collection
    const collectionRef = firestore()
      .collection('users')
      .doc(auth().currentUser?.email as string)
      .collection('bookmarkedPosts');

    // Query the collection to retrieve all documents
    collectionRef
      .get()
      .then(async querySnapshot => {
        const documentIds: string[] = [];

        querySnapshot.forEach(documentSnapshot => {
          // Get the document ID and add it to the list
          const documentId = documentSnapshot.id;
          documentIds.push(documentId);
        });

        // Now you have an array of document IDs
        console.log('Document IDs:', documentIds);

        const databaseRef = firestore().collection('posts');

        try {
          const rentalsQuerySnapshot = await databaseRef.get();

          const rentalObjects: Rental[] = [];
          rentalsQuerySnapshot.forEach(doc => {
            if (!documentIds.includes(doc.id)) {
              return;
            }
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
            exploreService.getAllPicturePaths(rental.id).then(paths => {
              rental.picturePaths = paths;
            });

            exploreService
              .getAllReviews(rental.id)
              .then(_reviews => (rental.reviews = _reviews));

            exploreService
              .getUserFromUserEmail(rental.userEmail)
              .then(_user => {
                rental.user = _user;
              });
          });

          setBookmarkedPosts(rentalObjects);
        } catch (error) {
          console.error('Error fetching rental objects:', error);
          setBookmarkedPosts([]);
        }
      })
      .catch(error => {
        console.error('Error getting documents:', error);
      });
  }
}
