import {FlatList, Pressable, Text, View} from 'react-native';
import React from 'react';
import useSeeAllReviews from './useSeeAllReviews';
import {Bounceable} from 'rn-bounceable';
import ScreenNameConstants from '../ScreenNameConstants';
import {Review} from '../../src/API';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RatingsAndReviewsSummary from '../../components/RatingsAndReviewsSummary/RatingsAndReviewsSummary';
import {Spinner} from 'native-base';
import Colors from '../../assets/Colors';

const SeeAllReviews = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {rental, reviewRatingPercentages} = route.params;
  const {reviews, onEndReached, nextToken} = useSeeAllReviews(rental.id);

  const renderFooter = () => {
    return nextToken ? (
      <View
        style={{
          padding: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
          }}>
          ...Loading more items
        </Text>
      </View>
    ) : null;
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {reviews.length === 0 && (
        <Spinner style={{marginTop: 15}} color={Colors.gray800} />
      )}
      {reviews.length > 0 && (
        <FlatList
          data={reviews}
          keyExtractor={item => item?.id!}
          onEndReached={onEndReached}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={() => (
            <View style={{marginLeft: 10, marginRight: 10}}>
              <RatingsAndReviewsSummary
                shouldShowButton={false}
                rental={rental}
                navigation={navigation}
                reviewRatingPercentages={reviewRatingPercentages}
              />
            </View>
          )}
          renderItem={({item, index}) => (
            <View>
              <Bounceable>
                <Pressable
                  onPress={() => {
                    navigation.navigate(ScreenNameConstants.FullReview, {
                      review: item as Review,
                    });
                  }}>
                  <ReviewCard
                    review={item as Review}
                    key={item?.id}
                    shouldMinimizeDescription
                  />
                </Pressable>
              </Bounceable>
            </View>
          )}
        />
      )}
    </GestureHandlerRootView>
  );
};

export default SeeAllReviews;
