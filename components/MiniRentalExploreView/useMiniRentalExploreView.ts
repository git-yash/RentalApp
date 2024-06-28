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
      rentalPostPictures: rentalPostPictures,
    });
  };

  return {
    handleRentalPress,
    rentalPostPictures,
  };
};

export default useMiniRentalExploreView;
