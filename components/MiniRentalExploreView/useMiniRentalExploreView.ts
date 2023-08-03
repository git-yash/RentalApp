import {useEffect, useState} from 'react';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';

const useMiniRentalExploreView = (
  currentLatitude: number,
  currentLongitude: number,
  address: string,
  miniRentalExploreViewService: MiniRentalExploreViewService,
) => {
  const [distance, setDistance] = useState<string | undefined>();

  useEffect(() => {
    miniRentalExploreViewService
      .getDistanceAndTimeFromAddresses(
        currentLatitude,
        currentLongitude,
        address,
      )
      .then(result => setDistance(result ? result : 'N/A'));
  }, []);

  return {distance};
};

export default useMiniRentalExploreView;
