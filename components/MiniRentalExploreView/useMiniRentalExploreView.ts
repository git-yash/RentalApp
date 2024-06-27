import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import ScreenNameConstants from '../../screens/ScreenNameConstants';
import {Address, Rental} from '../../src/API';
import {getUrl} from 'aws-amplify/storage';

const useMiniRentalExploreView = (
  currentLatitude: number | undefined,
  currentLongitude: number | undefined,
  address: Address,
  rental: Rental,
) => {
  const [distance, setDistance] = useState<string | undefined>();
  const [rentalPostPictures, setRentalPostPictures] = useState<string[]>([]);
  const miniRentalExploreViewService = new MiniRentalExploreViewService();

  useEffect(() => {
    miniRentalExploreViewService.getRentalImages(rental.id).then(async r => {
      const items = r.items;
      let pictures: string[] = [];
      for (let i = 1; i < items.length; i++) {
        getUrl({path: items[i].path}).then(r_2 => {
          pictures.push(r_2.url.href);
          setRentalPostPictures(pictures);
        });
      }

      // This is called multiple times because of BookmarkButton

      if (currentLatitude !== undefined && currentLongitude !== undefined) {
        miniRentalExploreViewService
          .getDistanceAndTimeFromAddresses(
            currentLatitude,
            currentLongitude,
            address,
          )
          .then(result => setDistance(result ? result : 'N/A'));
      }
    });
  }, []);

  const handleRentalPress = (
    navigation: any,
    userLatitude: number,
    userLongitude: number,
  ) => {
    navigation.navigate(ScreenNameConstants.RentalDetails, {
      rental: rental,
      currentLatitude: userLatitude,
      currentLongitude: userLongitude,
      distance: distance,
      rentalPostPictures: rentalPostPictures,
    });
  };

  return {
    distance,
    handleRentalPress,
    rentalPostPictures,
  };
};

export default useMiniRentalExploreView;
