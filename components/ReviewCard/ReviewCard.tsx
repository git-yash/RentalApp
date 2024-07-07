import React from 'react';
import {Text, View} from 'react-native';
import rentalDetailsStyle from '../../screens/RentalDetails/RentalDetails.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import {Review} from '../../src/API';

const ReviewCard = (props: {
  review: Review;
  shouldMinimizeDescription: boolean;
}) => {
  return (
    <View style={rentalDetailsStyle.reviewConatiner} key={props.review.id}>
      <View style={rentalDetailsStyle.topReviewContainer}>
        <View>
          <Text style={rentalDetailsStyle.reviewTitle}>
            {props.review?.title}
          </Text>
          <View style={rentalDetailsStyle.starContainer}>
            {[1, 2, 3, 4, 5].map((starNumber, index) => (
              <FontAwesomeIcon
                icon={faStar}
                style={rentalDetailsStyle.ratingStarIcon}
                size={14}
                key={index}
                color={
                  starNumber <= props.review.rating!
                    ? Colors.green
                    : Colors.gray300
                }
              />
            ))}
          </View>
        </View>
        <View>
          <Text style={rentalDetailsStyle.reviewDateText}>
            {Util.formatCustomDate(new Date(props.review?.datePublished || ''))}
          </Text>
          <Text style={rentalDetailsStyle.reviewUserNameText}>
            {props.review?.user?.name}
          </Text>
        </View>
      </View>
      <Text
        style={rentalDetailsStyle.reviewDescriptionText}
        numberOfLines={props.shouldMinimizeDescription ? 3 : undefined}>
        {props.review?.description}
      </Text>
    </View>
  );
};

export default ReviewCard;
