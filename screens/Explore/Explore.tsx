import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import LogInOrSignUp from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp';
import auth from '@react-native-firebase/auth';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Spinner} from 'native-base';
import Colors from '../../assets/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [canShowMap, setCanShowMap] = useState(false);

  useEffect(() => {
    if (!auth().currentUser) {
      setModalVisible(true);
    } else {
      console.log(auth().currentUser?.email);
    }

    getCurrentPosition().then(() => setCanShowMap(true));
  }, []);

  const getCurrentPosition = async () => {
    await Geolocation.getCurrentPosition(
      pos => {
        // setPosition(JSON.stringify(pos));
        setPosition(pos);
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');

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
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{flex: 2}}
        />
      )}
      {!canShowMap && <Spinner color={Colors.green} />}
    </SafeAreaView>
  );
};

export default Explore;
