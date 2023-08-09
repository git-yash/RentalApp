import React, {useEffect, useState} from 'react';
import {Rental} from '../../modals/Rental';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart as solidHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import useMiniRentalExploreView from './useMiniRentalExploreView';
import {library} from '@fortawesome/fontawesome-svg-core';
import miniRentalExploreViewStyle from './MiniRentalExploreView.style';

const MiniRentalExploreView = (props: {
  rental: Rental;
  currentLatitude: number;
  currentLongitude: number;
  navigation: any;
}) => {
  const miniRentalExploreViewService = new MiniRentalExploreViewService();
  const {distance, isBookmarked, handleRentalPress, handleHeartPress} =
    useMiniRentalExploreView(
      props.currentLatitude,
      props.currentLongitude,
      props.rental.address,
      miniRentalExploreViewService,
    );
  library.add(solidHeart, regularHeart);
  return (
    <TouchableOpacity
      onPress={() =>
        handleRentalPress(
          props.rental,
          props.navigation,
          props.currentLatitude,
          props.currentLongitude,
        )
      }>
      <View style={miniRentalExploreViewStyle.mainContainer}>
        <Image
          source={{uri: props.rental.picturePaths[0]}}
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
                ${props.rental.pricePerHour}
              </Text>
              <Text style={miniRentalExploreViewStyle.hourText}>/ hour</Text>
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
            <TouchableOpacity
              style={miniRentalExploreViewStyle.heartButton}
              onPress={() => handleHeartPress()}>
              <FontAwesomeIcon
                icon={isBookmarked ? solidHeart : regularHeart}
                color={Colors.green}
                size={20}
                style={miniRentalExploreViewStyle.heartIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniRentalExploreView;
