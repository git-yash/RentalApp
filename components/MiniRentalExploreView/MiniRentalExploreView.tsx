import React, {useEffect, useState} from 'react';
import {Rental} from '../../modals/Rental';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import MiniRentalExploreViewService from './MiniRentalExploreView.service';
import useMiniRentalExploreView from './useMiniRentalExploreView';

const MiniRentalExploreView = (props: {
  rental: Rental;
  currentLatitude: number;
  currentLongitude: number;
}) => {
  const miniRentalExploreViewService = new MiniRentalExploreViewService();
  const {distance} = useMiniRentalExploreView(
    props.currentLatitude,
    props.currentLongitude,
    props.rental.address,
    miniRentalExploreViewService,
  );
  return (
    <TouchableOpacity
      onPress={() => console.log(props.rental.picturePaths.length)}>
      <View
        style={{
          backgroundColor: 'white',
          shadowRadius: 10,
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
                  fontSize: 15,
                }}>
                {props.rental.title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
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
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <FontAwesomeIcon
              style={{marginTop: 1, marginRight: 3}}
              icon={faStar}
              color={Colors.green}
            />
            <Text style={{fontFamily: 'Poppins-Regular'}}>
              {props.rental.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniRentalExploreView;
