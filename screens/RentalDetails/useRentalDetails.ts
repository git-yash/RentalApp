import {Linking, Platform} from 'react-native';
import {createMapLink} from 'react-native-open-maps';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {Rental} from '../../modals/Rental';
import {useEffect} from 'react';

const useRentalDetails = (navigation: any, rental: Rental) => {
  const {showActionSheetWithOptions} = useActionSheet();

  useEffect(() => {
    navigation.setOptions({
      title: rental.title,
    });
  }, []);
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
  };
};

export default useRentalDetails;
