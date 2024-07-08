import React, {SetStateAction, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Bounceable} from 'rn-bounceable';
import rentalDetailsStyle from './RentalDetails.style';
import useRentalDetails from './useRentalDetails';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import RentalDetailsImagesSlider from '../../components/RentalDetailsImagesSlider/RentalDetailsImagesSlider';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Colors from '../../assets/Colors';
import {library} from '@fortawesome/fontawesome-svg-core';
import {Review} from '../../src/API';
import ScreenNameConstants from '../ScreenNameConstants';
import RatingsAndReviewsSummary from '../../components/RatingsAndReviewsSummary/RatingsAndReviewsSummary';

const RentalDetails = (props: {navigation: any; route: any}) => {
  const rentalID: string = props.route.params.rentalID;
  const {rentalPostPictures} = props.route.params;
  const noReviews: string = 'No reviews';
  const readMoreMaxCharLength: number = 113;

  const {getReviewRatingPercentages, distance, reviews, rental} =
    useRentalDetails(props.navigation, rentalID);
  const [rating, setRating] = useState(0);
  const reviewRatingPercentages: number[] = getReviewRatingPercentages();
  const shouldShowReadMore: boolean =
    !!rental && rental.description.length >= readMoreMaxCharLength;

  const handleStarPress = (starNumber: SetStateAction<number>) => {
    setRating(starNumber);
  };

  library.add(solidHeart, regularHeart);

  useEffect(() => {
    if (!rental) {
      return;
    }

    props.navigation.setOptions({
      headerRight: () => <BookmarkButton rental={rental} iconSize={23} />,
    });
  }, [rental]);

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView nestedScrollEnabled={true} overScrollMode={'never'}>
          <Text style={rentalDetailsStyle.titleText}>{rental?.title}</Text>
          <View style={{marginLeft: 10}}>
            <Text style={rentalDetailsStyle.reviewLengthText}>
              in {rental?.categoryName}
            </Text>
            <Text
              style={{fontFamily: 'Poppins-Regular', color: Colors.gray600}}>
              Rented {rental?.numberOfTimesRented} times
            </Text>
          </View>
          <View style={rentalDetailsStyle.cityReviewContainer}>
            <Text style={rentalDetailsStyle.cityText}>
              {rental?.address.city}, {rental?.address.state} ({distance})
            </Text>
            <View style={rentalDetailsStyle.reviewContainer}>
              <FontAwesomeIcon
                style={rentalDetailsStyle.starIcon}
                icon={faStar}
                color={rental?.averageRating ? Colors.green : Colors.gray500}
              />
              <Text style={rentalDetailsStyle.ratingText}>
                {rental?.averageRating || 'No Reviews'}
              </Text>
              {rental?.numberOfReviews && (
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Colors.gray700,
                    paddingLeft: 5,
                  }}>
                  ({rental?.numberOfReviews})
                </Text>
              )}
            </View>
          </View>
          <RentalDetailsImagesSlider picturePaths={rentalPostPictures} />
          <View style={rentalDetailsStyle.mainContainer}>
            <Text style={rentalDetailsStyle.descriptionText}>Description</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental?.description}
            </Text>
            <Text style={rentalDetailsStyle.deliveryText}>Price</Text>
            {rental?.amountHourly && (
              <Text style={rentalDetailsStyle.priceText}>
                ${rental?.amountHourly} / Hour
              </Text>
            )}
            {rental?.amountDaily && (
              <Text style={rentalDetailsStyle.priceText}>
                ${rental?.amountDaily} / Day
              </Text>
            )}
            {rental?.amountWeekly && (
              <Text style={rentalDetailsStyle.priceText}>
                ${rental?.amountWeekly} / Week
              </Text>
            )}
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text style={rentalDetailsStyle.readMoreText}>Read more</Text>
              </TouchableOpacity>
            )}
            <Text style={rentalDetailsStyle.subtitleText}>Inclusions</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental?.description}
            </Text>
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text style={rentalDetailsStyle.readMoreText}>Read more</Text>
              </TouchableOpacity>
            )}
            <RatingsAndReviewsSummary
              shouldShowButton={true}
              rental={rental}
              navigation={props.navigation}
              reviewRatingPercentages={reviewRatingPercentages}
            />
          </View>
          <View style={{marginBottom: 60}}>
            <FlatList
              data={reviews}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              snapToInterval={Dimensions.get('window').width * 0.9}
              decelerationRate={0}
              snapToAlignment={'center'}
              keyExtractor={item => item?.id!}
              viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
              renderItem={({item, index}) => (
                <View style={{marginLeft: index === 0 ? 10 : 0}}>
                  <Bounceable>
                    <Pressable
                      onPress={() => {
                        props.navigation.navigate(
                          ScreenNameConstants.FullReview,
                          {review: item as Review},
                        );
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
          </View>
        </ScrollView>
        <View style={rentalDetailsStyle.stickyFooter}>
          <Pressable style={rentalDetailsStyle.messagePressable}>
            <Text style={rentalDetailsStyle.messageText}>Message</Text>
          </Pressable>
          <Pressable style={rentalDetailsStyle.chooseDatesPressable}>
            <Text style={rentalDetailsStyle.chooseDatesText}>Choose Dates</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default RentalDetails;
