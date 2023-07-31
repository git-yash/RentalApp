import {useEffect, useRef, useState} from 'react';
import {Alert, AppState} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Rental} from '../../modals/Rental';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ExploreService from './Explore.service';

const useExplore = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [canShowMap, setCanShowMap] = useState(false);
  const appState = useRef(AppState.currentState);
  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [selectedRental, setSelectedRental] = useState<Rental | undefined>(
    undefined,
  );
  const exploreService = new ExploreService();

  useEffect(() => {
    if (!auth().currentUser) {
      setModalVisible(true);
    } else {
      console.log(auth().currentUser?.email);
    }

    void setCurrentPosition();
  }, []);

  useEffect(() => {
    if (!position) {
      return;
    }
    console.log(`coords: ${position?.coords}`);
    setCanShowMap(true);
    exploreService
      .getAllRentals(
        {
          lat: position?.coords.latitude as number,
          lng: position?.coords.longitude as number,
        },
        5,
      )
      .then(r => {
        setRentals(r);
        console.log(selectedRental?.picturePaths.length);
      });
  }, [position]);

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
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setCurrentPosition = async () => {
    await Geolocation.getCurrentPosition(
      pos => {
        setPosition(pos);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return {
    isModalVisible,
    setModalVisible,
    position,
    rentals,
    selectedRental,
    setSelectedRental,
    canShowMap,
    mapStyle,
  };
};

export default useExplore;
