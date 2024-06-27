import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Colors from '../../assets/Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import useMiniRentalExploreView from './useMiniRentalExploreView';
import {library} from '@fortawesome/fontawesome-svg-core';
import miniRentalExploreViewStyle from './MiniRentalExploreView.style';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Bounceable} from 'rn-bounceable';
import {Rental} from '../../src/API';

const MiniRentalExploreView = (props: {
  rental: Rental;
  currentLatitude: number | undefined;
  currentLongitude: number | undefined;
  navigation: any;
}) => {
  const {distance, handleRentalPress, rentalPostPictures} =
    useMiniRentalExploreView(
      props.currentLatitude,
      props.currentLongitude,
      props.rental.address,
      props.rental,
    );
  library.add(solidHeart, regularHeart);
  return (
    <GestureHandlerRootView>
      <Bounceable>
        <Pressable
          onPress={() =>
            handleRentalPress(
              props.navigation,
              props.currentLatitude,
              props.currentLongitude,
            )
          }>
          <View style={miniRentalExploreViewStyle.mainContainer}>
            <Image
              source={{uri: rentalPostPictures[0]}}
              style={miniRentalExploreViewStyle.image}
            />
            <View style={miniRentalExploreViewStyle.rightContainer}>
              <View style={miniRentalExploreViewStyle.titlePriceContainer}>
                <View>
                  <Text style={miniRentalExploreViewStyle.titleText}>
                    {props.rental.title}
                  </Text>
                  <Text style={miniRentalExploreViewStyle.distanceText}>
                    {distance}
                  </Text>
                </View>
                <View style={miniRentalExploreViewStyle.pricePerHourContainer}>
                  <Text style={miniRentalExploreViewStyle.priceText}>
                    ${props.rental.prices[0].amount}
                  </Text>
                  <Text style={miniRentalExploreViewStyle.hourText}>
                    / {props.rental.prices[0].timeIncrement}
                  </Text>
                </View>
              </View>
              <View style={miniRentalExploreViewStyle.ratingLikeContainer}>
                <View style={miniRentalExploreViewStyle.ratingContainer}>
                  <FontAwesomeIcon
                    style={miniRentalExploreViewStyle.starIcon}
                    icon={faStar}
                    color={Colors.green}
                  />
                  <Text style={miniRentalExploreViewStyle.ratingText}>
                    {props.rental.rating}
                  </Text>
                </View>
                <BookmarkButton
                  rental={props.rental}
                  iconSize={20}
                  currentLongitude={props.currentLongitude}
                  currentLatitude={props.currentLatitude}
                />
              </View>
            </View>
          </View>
        </Pressable>
      </Bounceable>
    </GestureHandlerRootView>
  );
};

export default MiniRentalExploreView;
