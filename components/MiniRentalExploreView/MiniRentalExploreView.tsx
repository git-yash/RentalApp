import React, {useEffect, useState} from 'react';
import {Rental} from '../../modals/Rental';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faHeart as solidHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import useMiniRentalExploreView from './useMiniRentalExploreView';
import {library} from '@fortawesome/fontawesome-svg-core';

const MiniRentalExploreView = (props: {
  rental: Rental;
  currentLatitude: number;
  currentLongitude: number;
}) => {
  const miniRentalExploreViewService = new MiniRentalExploreViewService();
  const {distance, isBookmarked, setIsBookmarked} = useMiniRentalExploreView(
    props.currentLatitude,
    props.currentLongitude,
    props.rental.address,
    miniRentalExploreViewService,
  );
  library.add(solidHeart, regularHeart);
  return (
    <TouchableOpacity
      onPress={() => console.log(props.rental.picturePaths.length)}>
      <View
        style={{
          backgroundColor: 'white',
          shadowRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 0.1,
          margin: 10,
          borderRadius: 15,
          flexDirection: 'row',
          padding: 5,
          width: Dimensions.get('window').width * 0.8,
        }}>
        <Image
          source={{uri: props.rental.picturePaths[0]}}
          style={{height: 100, width: 100, borderRadius: 15, margin: 5}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            marginLeft: 5,
          }}>
          <View style={{justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  marginTop: 5,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 17,
                }}>
                {props.rental.title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 15,
                  color: Colors.gray500,
                }}>
                {distance}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 25,
                }}>
                ${props.rental.pricePerHour}
              </Text>
              <Text style={{marginLeft: 3, fontFamily: 'Poppins-Regular'}}>
                / hour
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginRight: 5,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon
                style={{marginTop: 1, marginRight: 3}}
                icon={faStar}
                color={Colors.green}
              />
              <Text style={{fontFamily: 'Poppins-Regular'}}>
                {props.rental.rating}
              </Text>
            </View>
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => setIsBookmarked(!isBookmarked)}>
              <FontAwesomeIcon
                icon={isBookmarked ? solidHeart : regularHeart}
                color={Colors.green}
                size={20}
                style={{
                  alignSelf: 'flex-end',
                  marginBottom: 5,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniRentalExploreView;
