import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import {Rental} from '../../modals/Rental';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {useMyContext} from '../../MyContext';

const useMiniRentalExploreView = (
  currentLatitude: number,
  currentLongitude: number,
  address: string,
  rental: Rental,
  miniRentalExploreViewService: MiniRentalExploreViewService,
) => {
  const [distance, setDistance] = useState<string | undefined>();
  const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);
  const {bookmarkedPosts, setBookmarkedPosts} = useMyContext();

  useEffect(() => {
    async function setIsInBookmarks() {
      setIsBookmarked(
        await miniRentalExploreViewService.isInBookmarkedPosts(rental.id),
      );
    }

    void setIsInBookmarks();
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
    navigation.navigate('Details', {
      rental: rental,
      currentLatitude: userLatitude,
      currentLongitude: userLongitude,
    });
  };

  const handleHeartPress = () => {
    rental.isBookmarked = !isBookmarked;
    setIsBookmarked(rental.isBookmarked);
    ReactNativeHapticFeedback.trigger('effectDoubleClick', Util.options);

    const bookmarks = [...bookmarkedPosts];
    const newRental = rental;
    newRental.isBookmarked = rental.isBookmarked as boolean;
    bookmarks[Util.getIndexFromRentalID(bookmarks, rental.id)] = newRental;
    setBookmarkedPosts(bookmarks);
  };

  return {
    distance,
    isBookmarked,
    handleHeartPress,
    handleRentalPress,
  };
};

export default useMiniRentalExploreView;
