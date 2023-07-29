import React, {useEffect, useRef, useState} from 'react';
import {Alert, AppState, SafeAreaView, View} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import auth from '@react-native-firebase/auth';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import MapView, {MapMarker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Spinner} from 'native-base';
import Colors from '../../assets/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import firestore from '@react-native-firebase/firestore';
import Util from '../../Util';
import CustomMapMarker from '../../components/CustomMapMarker/CustomMapMarker';

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [canShowMap, setCanShowMap] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');
  const [rentals, setRentals] = useState();

  useEffect(() => {
    if (!auth().currentUser) {
      setModalVisible(true);
    } else {
      console.log(auth().currentUser?.email);
    }

    getCurrentPosition().then(() => {
      setCanShowMap(true);
      Util.getAllRentals(
        {
          lat: position?.coords.latitude as number,
          lng: position?.coords.longitude as number,
        },
        5,
      ).then(r => setRentals(r));
    });
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        firestore()
          .collection('users')
          .doc(auth().currentUser?.email as string)
          .update({isOnline: true})
          .then(() => {
            console.log('is online');
          });
      } else if (nextAppState === 'inactive') {
        firestore()
          .collection('users')
          .doc(auth().currentUser?.email as string)
          .update({isOnline: false})
          .then(() => {
            console.log('is offline');
          });
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const getCurrentPosition = async () => {
    await Geolocation.getCurrentPosition(
      pos => {
        setPosition(pos);
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LogInOrSignUp
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
      />
      <View style={{flex: 0.4}}>
        <SearchBar />
      </View>
      {canShowMap && (
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: position?.coords.latitude as number,
            longitude: position?.coords.longitude as number,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
          style={{flex: 2}}>
          {/*<MapCircle*/}
          {/*  center={{*/}
          {/*    latitude: position?.coords.latitude as number,*/}
          {/*    longitude: position?.coords.longitude as number,*/}
          {/*  }}*/}
          {/*  radius={8046.72} // 5 miles*/}
          {/*  strokeColor={Colors.green}*/}
          {/*  strokeWidth={2}*/}
          {/*/>*/}
          {rentals?.map(r => (
            <MapMarker
              coordinate={{
                latitude: position?.coords.latitude as number,
                longitude: position?.coords.longitude as number,
              }}>
              <CustomMapMarker price={r.pricePerHour} isSelected={true} />
            </MapMarker>
          ))}
        </MapView>
      )}
      {!canShowMap && <Spinner color={Colors.green} />}
    </SafeAreaView>
  );
};

export default Explore;
