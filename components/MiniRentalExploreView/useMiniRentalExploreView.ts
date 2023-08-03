import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';

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

  return {distance, isBookmarked, setIsBookmarked};
};

export default useMiniRentalExploreView;
