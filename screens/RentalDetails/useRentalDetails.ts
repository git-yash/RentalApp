import {Linking, Platform} from 'react-native';
import {createMapLink} from 'react-native-open-maps';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {Rental} from '../../models/Rental';
import {useEffect} from 'react';
import {Review} from '../../models/Review';

const useRentalDetails = (navigation: any, rental: Rental) => {
  const {showActionSheetWithOptions} = useActionSheet();

  useEffect(() => {
    navigation.setOptions({
      title: rental.title,
    });
  }, []);

  const getReviewRatingPercentages = () => {
    const reviews: Review[] = rental.reviews;
    const reviewRatings: number[] = [0, 0, 0, 0, 0];
    const reviewRatingPercentages: number[] = [0, 0, 0, 0, 0];
    for (const review of reviews) {
      reviewRatings[review.rating - 1]++;
    }
    for (let i = 0; i < reviewRatings.length; i++) {
      reviewRatingPercentages[i] = (reviewRatings[i] / reviews.length) * 100;
    }

    return reviewRatingPercentages.reverse();
  };

  const getAverageRating = () => {
    const reviews: Review[] = rental.reviews;
    let total: number = 0;
    for (const review of reviews) {
      total += review.rating;
    }
    return (total / reviews.length).toFixed(1);
  };

  const handleMapViewPressablePress = () => {
    if (Platform.OS === 'ios') {
      const options = ['Open In Maps', 'Open In Google Maps', 'Cancel'];
      const cancelButtonIndex = 2;

      showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
        },
        (selectedIndex: number) => {
          switch (selectedIndex) {
            case 0:
              void Linking.openURL(
                createMapLink({
                  provider: 'apple',
                  end: rental.address,
                }),
              );
              break;

            case 1:
              void Linking.openURL(
                createMapLink({
                  provider: 'google',
                  end: rental.address,
                }),
              );
              break;

            case cancelButtonIndex:
            // Canceled
          }
        },
      );
    } else {
      void Linking.openURL(
        createMapLink({
          provider: 'google',
          end: rental.address,
        }),
      );
    }
  };

  return {
    handleMapViewPressablePress,
    getReviewRatingPercentages,
    getAverageRating,
  };
};

export default useRentalDetails;
