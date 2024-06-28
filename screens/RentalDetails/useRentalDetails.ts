import {Linking, Platform} from 'react-native';
import {createMapLink} from 'react-native-open-maps';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useEffect, useState} from 'react';
import {Rental} from '../../src/API';
import Util from '../../Util';
import RentalDetailsService from './RentalDetails.service';

const useRentalDetails = (navigation: any, rental: Rental) => {
  const {showActionSheetWithOptions} = useActionSheet();
  const addressString: string = Util.addressToString(rental.address);
  const rentalDetailsService = new RentalDetailsService();
  const [distance, setDistance] = useState<string>('');

  useEffect(() => {
    navigation.setOptions({
      title: rental.title,
    });
  }, []);

  const getReviewRatingPercentages = (): number[] => {
    if (!rental.reviews?.items) {
      return [];
    }

    const reviews = rental.reviews.items;
    const reviewRatings: number[] = [0, 0, 0, 0, 0];
    const reviewRatingPercentages: number[] = [0, 0, 0, 0, 0];
    for (const review of reviews) {
      reviewRatings[review?.rating || 0 - 1]++;
    }
    for (let i = 0; i < reviewRatings.length; i++) {
      reviewRatingPercentages[i] = (reviewRatings[i] / reviews.length) * 100;
    }

    return reviewRatingPercentages.reverse();
  };

  const getAverageRating = (): number => {
    if (!rental.reviews || !rental.reviews.items) {
      return 0;
    }

    const reviews = rental.reviews.items;
    let total: number = 0;
    for (const review of reviews) {
      total += review?.rating || 0;
    }
    return Number((total / reviews?.length).toFixed(1));
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
          end: addressString,
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
