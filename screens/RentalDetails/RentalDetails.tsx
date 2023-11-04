import {
  Platform,
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
import RentalDetailsImagesSlider from '../../components/RentalDetailsImagesSlider/RentalDetailsImagesSlider';
import {useEffect, useState} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import {Progress} from 'native-base';

const RentalDetails = (props: {navigation: any; route: any}) => {
  const {rental, currentLatitude, currentLongitude} = props.route.params;
  const noReviews: string = 'No reviews';
  const readMoreMaxCharLength: number = 113;
  const shouldShowReadMore: boolean =
    rental.description >= readMoreMaxCharLength;
  const mapStyle = require('../../assets/MapStyle.json');
  const {
    handleMapViewPressablePress,
    getReviewRatingPercentages,
    getAverageRating,
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
          <Text style={rentalDetailsStyle.cityText}>
            {Util.getCityAndState(rental.address)}
          </Text>
          <Text style={rentalDetailsStyle.titleText}>{rental.title}</Text>
          <View style={rentalDetailsStyle.reviewContainer}>
            <FontAwesomeIcon
              icon={faStar}
              color={Colors.green}
              style={rentalDetailsStyle.starIcon}
            />
            <Text style={rentalDetailsStyle.ratingText}>
              {rental.reviews.length === 0 ? noReviews : rental.rating}
            </Text>
            <Text style={rentalDetailsStyle.reviewLengthText}>
              ({rental.reviews.length})
            </Text>
          </View>
          <RentalDetailsImagesSlider picturePaths={rental.picturePaths} />
          <View style={rentalDetailsStyle.mainContainer}>
            <Text style={rentalDetailsStyle.descriptionText}>Description</Text>
            <Text style={rentalDetailsStyle.subtitleDescriptionText}>
              {rental.description}
            </Text>
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
            <Text style={rentalDetailsStyle.deliveryText}>Delivery</Text>

            <Pressable onPress={() => handleMapViewPressablePress()}>
              <Text style={rentalDetailsStyle.addressText}>
                {rental.address}
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text style={rentalDetailsStyle.subtitleText}>
                Ratings & Reviews
              </Text>
              <Pressable>
                <Text
                  style={{
                    paddingTop: 20,
                    alignContent: 'flex-end',
                    textDecorationLine: 'underline',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  See All
                </Text>
              </Pressable>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 40,
                    textAlign: 'center',
                  }}>
                  {averageRating}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    textAlign: 'center',
                  }}>
                  Out of 5
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  flex: 3,
                  marginTop: 5,
                }}>
                {reviewRatingPercentages.map((percentage, index) => (
                  <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>
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
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Text style={{fontFamily: 'Poppins-Regular'}}>
                {Util.getFormattedNumberText(rental.reviews.length, 'Review')}
              </Text>
            </View>
            <View
              style={{
                ...Platform.select({
                  ios: {
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 1,
                    shadowRadius: 2,
                  },
                  android: {
                    elevation: 3,
                  },
                }),
                borderRadius: 15,
                padding: 10,
                marginTop: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                width: '95%',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 15}}>
                    {rental.reviews[0].title}
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 2}}>
                    {[1, 2, 3, 4, 5].map(starNumber => (
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{marginRight: 3}}
                        size={14}
                        color={
                          starNumber <= rental.reviews[0].rating
                            ? Colors.green
                            : Colors.gray300
                        }
                      />
                    ))}
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      alignSelf: 'center',
                      fontSize: 13,
                      color: Colors.gray600,
                    }}>
                    {Util.formatCustomDate(rental.reviews[0].date)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      alignSelf: 'flex-end',
                      fontSize: 13,
                      color: Colors.gray600,
                    }}>
                    {rental.reviews[0].user.name}
                  </Text>
                </View>
              </View>
              <Text style={{marginTop: 10, fontFamily: 'Poppins-Regular'}}>
                {rental.reviews[0].description}
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
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default RentalDetails;
