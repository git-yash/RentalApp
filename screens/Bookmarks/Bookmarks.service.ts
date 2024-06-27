import {generateClient} from 'aws-amplify/api';
import {listBookmarkedRentalsWithDetails} from '../../src/graphql/custom-queries';
import {Rental} from '../../src/API';

export default class BookmarksService {
  client = generateClient();

  async getBookmarkedRentals(userID: string): Promise<Rental[]> {
    return this.client
      .graphql({
        query: listBookmarkedRentalsWithDetails,
        variables: {
          filter: {
            userID: {eq: userID},
          },
        },
      })
      .then(response => {
        return response.data.listBookmarkedRentals.items.map(br => br.rental);
      })
      .catch(e => {
        throw e;
      });
    // const exploreService = new ExploreService();
    // // Reference to the collection
    // const collectionRef = firestore()
    //   .collection('users')
    //   .doc(auth().currentUser?.email as string)
    //   .collection('bookmarkedPosts');
    //
    // // Query the collection to retrieve all documents
    // collectionRef
    //   .get()
    //   .then(async querySnapshot => {
    //     const documentIds: string[] = [];
    //
    //     querySnapshot.forEach(documentSnapshot => {
    //       // Get the document ID and add it to the list
    //       const documentId = documentSnapshot.id;
    //       documentIds.push(documentId);
    //     });
    //
    //     // Now you have an array of document IDs
    //
    //     const databaseRef = firestore().collection('posts');
    //
    //     try {
    //       const rentalsQuerySnapshot = await databaseRef.get();
    //
    //       const rentalObjects: Rental[] = [];
    //       rentalsQuerySnapshot.forEach(doc => {
    //         if (!documentIds.includes(doc.id)) {
    //           return;
    //         }
    //         const data: FirebaseFirestoreTypes.DocumentData = doc.data();
    //
    //         rentalObjects.push({
    //           user: undefined,
    //           userEmail: data.userEmail,
    //           id: doc.id,
    //           reviews: [],
    //           title: data.title,
    //           prices: data.prices,
    //           priceItems: Util.getPriceItems(data.prices),
    //           rating: data.rating,
    //           address: data.address,
    //           location: data.location,
    //           description: data.description,
    //           isAvailable: data.isAvailable,
    //           picturePaths: [],
    //           category: data.category,
    //           deliveryOption: data.deliveryOption,
    //         });
    //       });
    //
    //       rentalObjects.forEach(rental => {
    //         exploreService.getAllPicturePaths(rental.id).then(paths => {
    //           rental.picturePaths = paths;
    //         });
    //
    //         exploreService
    //           .getAllReviews(rental.id)
    //           .then(_reviews => (rental.reviews = _reviews));
    //
    //         exploreService
    //           .getUserFromUserEmail(rental.userEmail)
    //           .then(_user => {
    //             rental.user = _user;
    //           });
    //       });
    //
    //       setBookmarkedPosts(rentalObjects);
    //     } catch (error) {
    //       console.error('Error fetching rental objects:', error);
    //       setBookmarkedPosts([]);
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error getting documents:', error);
    //   });
  }
}
