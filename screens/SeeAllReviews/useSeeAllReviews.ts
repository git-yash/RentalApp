import {useEffect, useState} from 'react';
import {ModelReviewConnection, Review} from '../../src/API';
import RentalDetailsService from '../RentalDetails/RentalDetails.service';

const useSeeAllReviews = (rentalID: string) => {
  const [reviews, setReviews] = useState<Array<Review | null>>([]);
  const [nextToken, setNextToken] = useState<string | undefined>(undefined);
  const rentalDetailsService = new RentalDetailsService();

  const onEndReached = () => {
    if (!nextToken || !reviews?.length) {
      return;
    }
    rentalDetailsService
      .getReviews(rentalID, 5, nextToken)
      .then((response: ModelReviewConnection | void) => {
        if (!response?.items.length) {
          return;
        }

        setReviews([...reviews, ...response.items]);
        setNextToken(response?.nextToken);
      });
  };

  useEffect(() => {
    rentalDetailsService.getReviews(rentalID, 10).then(response => {
      setReviews(response.items);
      setNextToken(response.nextToken);
    });
  }, []);

  return {
    reviews,
    onEndReached,
    nextToken,
  };
};

export default useSeeAllReviews;
