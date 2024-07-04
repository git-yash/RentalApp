import {Rental} from '../../src/API';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart as solidHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import rentalCardStyle from './RentalCard.style';
import miniRentalExploreViewStyle from '../MiniRentalExploreView/MiniRentalExploreView.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../../assets/Colors';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import {Bounceable} from 'rn-bounceable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import useRentalCard from './useRentalCard';
import Util from '../../Util';

const RentalCard = (props: {
  rental: Rental;
  currentLatitude: number | undefined;
  currentLongitude: number | undefined;
  navigation: any;
}) => {
  const {handleRentalPress, rentalPostPictures} = useRentalCard(
    props.currentLatitude,
    props.currentLongitude,
    props.rental.address,
    props.rental,
  );
  library.add(solidHeart, regularHeart);
  return (
    <GestureHandlerRootView style={{padding: 10}}>
      <Bounceable>
        <Pressable
          onPress={() =>
            handleRentalPress(
              props.navigation,
              props.currentLatitude,
              props.currentLongitude,
            )
          }>
          <View style={rentalCardStyle.mainContainer}>
            <Image
              source={{uri: rentalPostPictures[0]}}
              style={{
                flex: 1,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              }}
            />
            <View
              style={{
                flex: 1.5,
                margin: 5,
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 15,
                      marginBottom: 5,
                    }}>
                    {props.rental.title}
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <View>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <View style={miniRentalExploreViewStyle.ratingContainer}>
                        <FontAwesomeIcon
                          style={miniRentalExploreViewStyle.starIcon}
                          icon={faStar}
                          color={
                            props.rental.averageRating
                              ? Colors.green
                              : Colors.gray500
                          }
                        />
                        <Text style={miniRentalExploreViewStyle.ratingText}>
                          {props.rental.averageRating || 'No Reviews'}
                        </Text>
                      </View>
                      {props.rental.numberOfReviews && (
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            color: Colors.gray700,
                            paddingLeft: 5,
                          }}>
                          ({props.rental.numberOfReviews})
                        </Text>
                      )}
                    </View>
                    {props.rental.numberOfTimesRented && (
                      <Text style={miniRentalExploreViewStyle.ratingText}>
                        Rented {props.rental.numberOfTimesRented} times
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 15,
                  }}>
                  {Util.getPriceString(
                    props.rental.amountHourly,
                    props.rental.amountDaily,
                    props.rental.amountWeekly,
                  )}
                </Text>
                <BookmarkButton rental={props.rental} iconSize={20} />
              </View>
            </View>
          </View>
        </Pressable>
      </Bounceable>
    </GestureHandlerRootView>
  );
};

export default RentalCard;
