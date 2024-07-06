import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const FullReview = () => {
  const route = useRoute();
  const {review} = route.params;
  return (
    <ScrollView>
      <ReviewCard review={review} shouldMinimizeDescription={false} />
    </ScrollView>
  );
};

export default FullReview;
