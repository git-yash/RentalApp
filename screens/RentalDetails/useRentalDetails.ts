import {Linking, Platform} from 'react-native';
import {createMapLink} from 'react-native-open-maps';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {useEffect, useState} from 'react';
import {Rental} from '../../src/API';
import RentalDetailsService from './RentalDetails.service';
import Util from '../../Util';
import useRentalDetailsStore from '../../store/rentalDetailsStore';
import {RentalDetails} from './models/RentalDetails';

const useRentalDetails = (navigation: any, rentalID: string) => {
  const {showActionSheetWithOptions} = useActionSheet();
  const rentalDetailsService = new RentalDetailsService();
  const [distance, setDistance] = useState<string | undefined>('');
  const [rental, setRental] = useState<Rental | undefined>(undefined);
  const {rentalDetails, setRentalDetails} = useRentalDetailsStore();

  useEffect(() => {
    navigation.setOptions({
      title: rental?.title,
    });
  }, []);

  const getRentalDetailFromStore = () => {
    return rentalDetails?.find(r => r.rental.id === rentalID);
  };

  useEffect(() => {
    if (!rentalID) {
      return;
    }

    const rentalStore = getRentalDetailFromStore();
    if (rentalStore) {
      setRental(rentalStore.rental);
      setDistance(rentalStore.distance);
    } else {
      rentalDetailsService
        .getRentalDetails(rentalID)
        .then(responseRental => {
          if (!responseRental) {
            return;
          }

          setRental(responseRental);

          rentalDetailsService
            .getDistanceAndTimeFromAddresses(
              responseRental.latitude,
              responseRental.longitude,
              responseRental.address,
            )
            .then(response => {
              setDistance(response);
              const rentalDetails1: RentalDetails = {
                rental: responseRental,
                distance: response || '',
              };
              const tempRentalDetails = !rentalDetails ? [] : rentalDetails;
              tempRentalDetails?.push(rentalDetails1);
              setRentalDetails(tempRentalDetails);
            });
        })
        .catch(e => console.error(e));
    }
  }, []);

  const getReviewRatingPercentages = (): number[] => {
    if (!rental?.reviews?.items) {
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
    if (!rental?.reviews || !rental.reviews.items) {
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
    if (!rental) {
      return;
    }

    const addressString: string = Util.addressToString(rental?.address);
    if (Platform.OS === 'ios') {
      const options = ['Open In Maps', 'Open In Google Maps', 'Cancel'];
      const cancelButtonIndex = 2;

      showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
        },
        (selectedIndex: number | undefined) => {
          switch (selectedIndex) {
            case 0:
              void Linking.openURL(
                createMapLink({
                  provider: 'apple',
                  end: addressString,
                }),
              );
              break;

            case 1:
              void Linking.openURL(
                createMapLink({
                  provider: 'google',
                  end: addressString,
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
    distance,
    rental,
  };
};

export default useRentalDetails;
