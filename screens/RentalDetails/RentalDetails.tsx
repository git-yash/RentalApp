import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Util from '../../Util';
import rentalDetailsStyle from './RentalDetails.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import Colors from '../../assets/Colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import useRentalDetails from './useRentalDetails';
import {useEffect, useState} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import {Progress} from 'native-base';
import {Price, Rental} from '../../src/API';
import RentalDetailsImagesSlider from '../../components/RentalDetailsImagesSlider/RentalDetailsImagesSlider';

const RentalDetails = (props: {navigation: any; route: any}) => {
  const rental: Rental = props.route.params.rental;
  const {currentLatitude, currentLongitude, rentalPostPictures} =
    props.route.params;
  const noReviews: string = 'No reviews';
  const readMoreMaxCharLength: number = 113;
  const shouldShowReadMore: boolean =
    rental.description >= readMoreMaxCharLength;
  const mapStyle = require('../../assets/MapStyle.json');
  const {
    handleMapViewPressablePress,
    getReviewRatingPercentages,
    getAverageRating,
    distance,
  } = useRentalDetails(props.navigation, rental);
  const [rating, setRating] = useState(0);
  const averageRating: number = getAverageRating();
  const reviewRatingPercentages: number[] = getReviewRatingPercentages();

  const handleStarPress = starNumber => {
    setRating(starNumber);
  };
  library.add(solidHeart, regularHeart);
  // max is 33
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <BookmarkButton
          rental={rental}
          iconSize={23}
          currentLatitude={currentLatitude}
          currentLongitude={currentLongitude}
        />
      ),
    });
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <Text style={rentalDetailsStyle.titleText}>{rental.title}</Text>
          <View style={{marginLeft: 10}}>
            <Text style={rentalDetailsStyle.reviewLengthText}>
              in {Util.getCategoryTextFromIndex(rental.category)}
            </Text>
          </View>
          <View style={rentalDetailsStyle.cityReviewContainer}>
            <Text style={rentalDetailsStyle.cityText}>
              {rental.address.city}, {rental.address.state} ({distance})
            </Text>
            <View style={rentalDetailsStyle.reviewContainer}>
              <FontAwesomeIcon
                icon={faStar}
                color={Colors.green}
                style={rentalDetailsStyle.starIcon}
              />
              <Text style={rentalDetailsStyle.ratingText}>
                {rental.reviews?.items?.length === 0
                  ? noReviews
                  : rental.rating}
              </Text>
              <Text style={rentalDetailsStyle.reviewLengthText}>
                ({rental.reviews?.items?.length})
              </Text>
            </View>
          </View>
          <RentalDetailsImagesSlider picturePaths={rentalPostPictures} />
          <View style={rentalDetailsStyle.mainContainer}>
            <Text style={rentalDetailsStyle.descriptionText}>Description</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental.description}
            </Text>
            <Text style={rentalDetailsStyle.deliveryText}>Price</Text>
            {rental.prices.map((p: Price, index) => (
              <Text key={index} style={rentalDetailsStyle.priceText}>
                ${p.amount} / {p.timeIncrement}
              </Text>
            ))}
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text style={rentalDetailsStyle.readMoreText}>Read more</Text>
              </TouchableOpacity>
            )}
            <Text style={rentalDetailsStyle.subtitleText}>Inclusions</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental.description}
            </Text>
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text style={rentalDetailsStyle.readMoreText}>Read more</Text>
              </TouchableOpacity>
            )}

            {/*<Pressable onPress={() => handleMapViewPressablePress()}>*/}
            {/*  <Text style={rentalDetailsStyle.addressText}>*/}
            {/*    {rental.address}*/}
            {/*  </Text>*/}
            {/*</Pressable>*/}

            <View style={rentalDetailsStyle.topRatingAndReviewsContainer}>
              <Text style={rentalDetailsStyle.subtitleText}>
                Ratings & Reviews
              </Text>
              <Pressable>
                <Text style={rentalDetailsStyle.seeAllPressable}>See All</Text>
              </Pressable>
            </View>
            <View style={rentalDetailsStyle.ratingsContainer}>
              <View style={rentalDetailsStyle.averageRatingTextContainer}>
                <Text style={rentalDetailsStyle.averageRatingText}>
                  {averageRating}
                </Text>
                <Text style={rentalDetailsStyle.outOfFiveText}>Out of 5</Text>
              </View>
              <View style={rentalDetailsStyle.ratingsChartContainer}>
                {reviewRatingPercentages?.map((percentage, index) => (
                  <View style={rentalDetailsStyle.ratingProgressBar}>
                    <Text style={rentalDetailsStyle.ratingProgressBarText}>
                      {reviewRatingPercentages.length - index}
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
                  rental.reviews?.items?.length,
                  'Review',
                )}
              </Text>
            </View>
            <View style={rentalDetailsStyle.reviewConatiner}>
              <View style={rentalDetailsStyle.topReviewContainer}>
                <View>
                  <Text style={rentalDetailsStyle.reviewTitle}>
                    {/*{rental.reviews?.items[0].title}*/}
                  </Text>
                  <View style={rentalDetailsStyle.starContainer}>
                    {[1, 2, 3, 4, 5].map((starNumber, index) => (
                      <FontAwesomeIcon
                        icon={faStar}
                        style={rentalDetailsStyle.ratingStarIcon}
                        size={14}
                        key={index}
                        // color={ starNumber <= rental.reviews[0].rating ? Colors.green : Colors.gray300 }
                      />
                    ))}
                  </View>
                </View>
                <View>
                  <Text style={rentalDetailsStyle.reviewDateText}>
                    {/*{Util.formatCustomDate(rental.reviews[0].date)}*/}
                  </Text>
                  <Text style={rentalDetailsStyle.reviewUserNameText}>
                    {/*{rental.reviews[0].user.name}*/}
                  </Text>
                </View>
              </View>
              <Text style={rentalDetailsStyle.reviewDescriptionText}>
                {/*{rental.reviews[0].description}*/}
              </Text>
            </View>

            {/*<View style={{flexDirection: 'row'}}>*/}
            {/*  {[1, 2, 3, 4, 5].map(starNumber => (*/}
            {/*    <Pressable*/}
            {/*      key={starNumber}*/}
            {/*      onPress={() => handleStarPress(starNumber)}>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon={faStar}*/}
            {/*        style={{marginRight: 3}}*/}
            {/*        size={30}*/}
            {/*        color={starNumber <= rating ? Colors.green : Colors.gray300}*/}
            {/*      />*/}
            {/*    </Pressable>*/}
            {/*  ))}*/}
            {/*</View>*/}
          </View>
        </ScrollView>
        <View style={rentalDetailsStyle.stickyFooter}>
          {/*<View style={rentalDetailsStyle.priceContainer}>*/}
          {/*  <Text style={rentalDetailsStyle.smallPriceText}>*/}
          {/*    ${rental.prices[0].price}*/}
          {/*  </Text>*/}
          {/*  <Text style={rentalDetailsStyle.perHourText}>*/}
          {/*    {' '}*/}
          {/*    / {Util.getTimeIncrementString(rental.prices[0].timeIncrement)}*/}
          {/*  </Text>*/}
          {/*</View>*/}
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
