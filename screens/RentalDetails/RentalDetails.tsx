import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Util from '../../Util';
import rentalDetailsStyle from './RentalDetails.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import {Divider} from 'native-base';
import OrDivider from '../../components/OrDivider/OrDivider';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import UserPositionCustomMapMarker from '../../components/UserPositionCustomMapMarker/UserPositionCustomMapMarker';
import CustomMapMarker from '../../components/CustomMapMarker/CustomMapMarker';
import {useActionSheet} from '@expo/react-native-action-sheet';
import openMap, {createMapLink} from 'react-native-open-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RentalDetails = (props: {navigation: any; route: any}) => {
  const {rental, currentLatitude, currentLongitude} = props.route.params;
  const noReviews: string = 'No reviews';
  const readMoreMaxCharLength: number = 113;
  const shouldShowReadMore: boolean =
    rental.description >= readMoreMaxCharLength;
  const mapStyle = require('../../assets/MapStyle.json');
  const {showActionSheetWithOptions} = useActionSheet();
  useEffect(() => {
    props.navigation.setOptions({
      title: rental.title,
    });
  }, []);
  // max is 33

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
          <View style={{paddingLeft: 10, paddingTop: 10, paddingRight: 10}}>
            <Text style={rentalDetailsStyle.cityText}>
              {Util.getCityAndState(rental.address)}
            </Text>
            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 27}}>
              {rental.title}
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <FontAwesomeIcon
                icon={faStar}
                color={Colors.green}
                style={{marginTop: 1}}
              />
              <Text
                style={{
                  paddingLeft: 5,
                  fontFamily: 'Poppins-SemiBold',
                  paddingRight: 3,
                }}>
                {rental.reviews.length === 0 ? noReviews : rental.rating}
              </Text>
              <Text
                style={{fontFamily: 'Poppins-SemiBold', color: Colors.gray500}}>
                ({rental.reviews.length})
              </Text>
            </View>
            <Text
              style={{
                paddingTop: 15,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
              }}>
              Description
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
                color: Colors.gray600,
              }}>
              {rental.description}
            </Text>
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 13,
                    color: Colors.green,
                  }}>
                  Read more
                </Text>
              </TouchableOpacity>
            )}
            <Text
              style={{
                paddingTop: 15,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
              }}>
              Inclusions
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
                color: Colors.gray600,
              }}>
              {rental.description}
            </Text>
            {shouldShowReadMore && (
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 13,
                    color: Colors.green,
                  }}>
                  Read more
                </Text>
              </TouchableOpacity>
            )}
            <Text
              style={{
                paddingTop: 15,
                paddingBottom: 10,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
              }}>
              Delivery
            </Text>

            <Pressable
              onPress={() => {
                if (Platform.OS === 'ios') {
                  const options = [
                    'Open In Maps',
                    'Open In Google Maps',
                    'Cancel',
                  ];
                  const cancelButtonIndex = 2;

                  showActionSheetWithOptions(
                    {
                      options,
                      cancelButtonIndex,
                    },
                    (selectedIndex: number) => {
                      switch (selectedIndex) {
                        case 0:
                          void Linking.openURL(
                            createMapLink({
                              provider: 'apple',
                              end: rental.address,
                            }),
                          );
                          break;

                        case 1:
                          void Linking.openURL(
                            createMapLink({
                              provider: 'google',
                              end: rental.address,
                            }),
                          );
                          break;

                        case cancelButtonIndex:
                        // Canceled
                      }
                    },
                  );
                } else {
                  void Linking.openURL(
                    createMapLink({
                      provider: 'google',
                      end: rental.address,
                    }),
                  );
                }
              }}
              style={{
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowColor: 'black',
              }}>
              <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: currentLatitude,
                  longitude: currentLongitude,
                  latitudeDelta: 0.15,
                  longitudeDelta: 0.15,
                }}
                style={{
                  width: '100%',
                  height: 150,
                  borderRadius: 15,
                  marginBottom: 10,
                }}>
                <MapMarker
                  coordinate={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                  }}>
                  <UserPositionCustomMapMarker />
                </MapMarker>
              </MapView>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default RentalDetails;
