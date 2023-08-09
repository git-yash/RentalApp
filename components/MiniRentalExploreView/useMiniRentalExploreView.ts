import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import {Rental} from '../../modals/Rental';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';

const useMiniRentalExploreView = (
  currentLatitude: number,
  currentLongitude: number,
  address: string,
  miniRentalExploreViewService: MiniRentalExploreViewService,
) => {
  const [distance, setDistance] = useState<string | undefined>();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    miniRentalExploreViewService
      .getDistanceAndTimeFromAddresses(
        currentLatitude,
        currentLongitude,
        address,
      )
      .then(result => setDistance(result ? result : 'N/A'));
  }, []);

  const handleRentalPress = (
    rental: Rental,
    navigation: any,
    userLatitude: number,
    userLongitude: number,
  ) => {
    console.log(rental.picturePaths.length);
    navigation.navigate('Details', {
      rental: rental,
      currentLatitude: userLatitude,
      currentLongitude: userLongitude,
    });
  };

  const handleHeartPress = () => {
    setIsBookmarked(!isBookmarked);
    ReactNativeHapticFeedback.trigger('effectDoubleClick', Util.options);
  };

  return {
    distance,
    isBookmarked,
    handleHeartPress,
    handleRentalPress,
  };
};

export default useMiniRentalExploreView;
