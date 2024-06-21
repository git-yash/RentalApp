import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {useMyContext} from '../../MyContext';
import ScreenNameConstants from '../../screens/ScreenNameConstants';
import {Address, Rental} from '../../src/API';
import {getUrl} from 'aws-amplify/storage';

const useMiniRentalExploreView = (
  currentLatitude: number,
  currentLongitude: number,
  address: Address,
  rental: Rental,
) => {
  const [distance, setDistance] = useState<string | undefined>();
  const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);
  const {bookmarkedPosts, setBookmarkedPosts} = useMyContext();
  const [rentalPostPictures, setRentalPostPictures] = useState<string[]>([]);
  const miniRentalExploreViewService = new MiniRentalExploreViewService();

  useEffect(() => {
    miniRentalExploreViewService.getRentalImages(rental.id).then(async r => {
      const items = r.items;
      let pictures: string[] = [];
      for (let i = 1; i < items.length; i++) {
        getUrl({path: items[i].path}).then(r => {
          pictures.push(r.url.href);
          setRentalPostPictures(pictures);
        });
      }

      // This is called multiple times because of BookmarkButton

      async function setIsInBookmarks() {
        // setIsBookmarked(
        //   await miniRentalExploreViewService.isInBookmarkedPosts(rental.id),
        // );
      }

      void setIsInBookmarks();

      miniRentalExploreViewService
        .getDistanceAndTimeFromAddresses(
          currentLatitude,
          currentLongitude,
          address,
        )
        .then(result => setDistance(result ? result : 'N/A'));
    });
  }, []);

  useEffect(() => {
    if (isBookmarked === null) {
      return;
    }
    // if (isBookmarked) {
    //   void miniRentalExploreViewService.addBookmarkToBookMarks(rental.id);
    // } else {
    //   void miniRentalExploreViewService.removeBookmarkFromBookmarks(rental.id);
    // }
  }, [isBookmarked]);

  const handleRentalPress = (
    navigation: any,
    userLatitude: number,
    userLongitude: number,
  ) => {
    console.log(rentalPostPictures.length);
    navigation.navigate(ScreenNameConstants.RentalDetails, {
      rental: rental,
      currentLatitude: userLatitude,
      currentLongitude: userLongitude,
      distance: distance,
      rentalPostPictures: rentalPostPictures,
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
    rentalPostPictures,
  };
};

export default useMiniRentalExploreView;
