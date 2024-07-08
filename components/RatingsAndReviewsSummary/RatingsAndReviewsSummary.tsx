import React from 'react';
import {Pressable, Text, View} from 'react-native';
import rentalDetailsStyle from '../../screens/RentalDetails/RentalDetails.style';
import ScreenNameConstants from '../../screens/ScreenNameConstants';
import {Progress} from 'native-base';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import {Rental} from '../../src/API';

const RatingsAndReviewsSummary = (props: {
  shouldShowButton: boolean;
  rental: Rental | undefined;
  navigation: any;
  reviewRatingPercentages: number[];
}) => {
  return (
    <View>
      <View style={rentalDetailsStyle.topRatingAndReviewsContainer}>
        <Text style={rentalDetailsStyle.subtitleText}>Ratings & Reviews</Text>
        {props.shouldShowButton && (
          <Pressable
            onPress={() =>
              props.navigation.navigate(ScreenNameConstants.SeeAllReviews, {
                rental: props.rental,
                reviewRatingPercentages: props.reviewRatingPercentages,
              })
            }>
            <Text style={rentalDetailsStyle.seeAllPressable}>
              See All Reviews
            </Text>
          </Pressable>
        )}
      </View>
      <View style={rentalDetailsStyle.ratingsContainer}>
        <View style={rentalDetailsStyle.averageRatingTextContainer}>
          <Text style={rentalDetailsStyle.averageRatingText}>
            {props.rental?.averageRating}
          </Text>
          <Text style={rentalDetailsStyle.outOfFiveText}>Out of 5</Text>
        </View>
        <View style={rentalDetailsStyle.ratingsChartContainer}>
          {props.reviewRatingPercentages?.map((percentage, index) => (
            <View key={index} style={rentalDetailsStyle.ratingProgressBar}>
              <Text style={rentalDetailsStyle.ratingProgressBarText}>
                {props.reviewRatingPercentages.length - index}
              </Text>
              <Progress
                value={percentage}
                size={'xs'}
                w={'90%'}
                style={{margin: 4}}
                _filledTrack={{bg: Colors.green}}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={rentalDetailsStyle.reviewsContainer}>
        <Text style={rentalDetailsStyle.reviewText}>
          {Util.getFormattedNumberText(
            props.rental?.numberOfReviews!,
            'Review',
          )}
        </Text>
      </View>
    </View>
  );
};

export default RatingsAndReviewsSummary;
