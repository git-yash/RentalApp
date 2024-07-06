import {useEffect, useState} from 'react';
import ScreenNameConstants from '../../screens/ScreenNameConstants';
import {Rental} from '../../src/API';
import {getUrl} from 'aws-amplify/storage';
import RentalCardService from './RentalCard.service';

const useRentalCard = (rental: Rental) => {
  const [rentalPostPictures, setRentalPostPictures] = useState<string[]>([]);
  const rentalCardService = new RentalCardService();

  useEffect(() => {
    // TODO: Do not fetch images in card, fetch in detail screen instead. Also only fetch cover-photo.jps for card.
    // TODO: store images to store and try to fetch from store first.
    rentalCardService.getRentalImages(rental.id).then(async r => {
      const items = r.items;
      let pictures: string[] = [];
      for (let i = 1; i < items.length; i++) {
        getUrl({path: items[i].path}).then(r_2 => {
          pictures.push(r_2.url.href);
          setRentalPostPictures(pictures);
        });
      }
    });
  }, []);

  const handleRentalPress = (navigation: any) => {
    navigation.navigate(ScreenNameConstants.RentalDetails, {
      rentalID: rental.id,
      rentalPostPictures: rentalPostPictures,
    });
  };

  return {
    handleRentalPress,
    rentalPostPictures,
  };
};

export default useRentalCard;
