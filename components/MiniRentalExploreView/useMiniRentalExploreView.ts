import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import {Rental} from '../../modals/Rental';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';

const useMiniRentalExploreView = (
  currentLatitude: number,
  currentLongitude: number,
  address: string,
  rental: Rental,
  miniRentalExploreViewService: MiniRentalExploreViewService,
) => {
  const [distance, setDistance] = useState<string | undefined>();
  const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);

  useEffect(() => {
    async function setIsInBookmarks() {
      setIsBookmarked(
        await miniRentalExploreViewService.isInBookmarkedPosts(rental.id),
      );
    }

    setIsInBookmarks().then(() => console.log('set'));
  }, []);

  useEffect(() => {
    miniRentalExploreViewService
      .getDistanceAndTimeFromAddresses(
        currentLatitude,
        currentLongitude,
        address,
      )
      .then(result => setDistance(result ? result : 'N/A'));
  }, []);

  useEffect(() => {
    if (isBookmarked === null) {
      return;
    }
    if (isBookmarked) {
      void miniRentalExploreViewService.addBookmarkToBookMarks(rental.id);
    } else {
      void miniRentalExploreViewService.removeBookmarkFromBookmarks(rental.id);
    }
  }, [isBookmarked]);

  const handleRentalPress = (
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
