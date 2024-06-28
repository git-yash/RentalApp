import {list} from 'aws-amplify/storage';

export default class MiniRentalExploreViewService {
  async getRentalImages(rentalID: string) {
    try {
      return await list({path: `public/rentalPostPictures/${rentalID}/`});
    } catch (e) {
      throw e;
    }
  }
}
