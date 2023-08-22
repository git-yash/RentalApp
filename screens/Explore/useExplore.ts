import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, AppState} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Rental} from '../../modals/Rental';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ExploreService from './Explore.service';
import useBookmarks from '../Bookmarks/useBookmarks';
import {useMyContext} from '../../MyContext';
import {useIsFocused} from '@react-navigation/native';

const useExplore = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [canShowMap, setCanShowMap] = useState(false);
  const appState = useRef(AppState.currentState);
  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');
  const [rentals, setRentals] = useState<Rental[]>([]);
  const exploreService = new ExploreService();
  const flatListRef = useRef();
  const mapRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const {bookmarkedPosts} = useMyContext();

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentItemIndex(viewableItems[0].index);
    }
  }).current;

  useEffect(() => {
    if (!rentals?.length) {
      return;
    }
    const currentRentalLocation = rentals[currentItemIndex].location;
    mapRef?.current?.animateToRegion(
      {
        latitude: currentRentalLocation.latitude,
        longitude: currentRentalLocation.longitude,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      },
      300,
    );
  }, [currentItemIndex, rentals]);

  const isScreenFocused = useIsFocused();

  useEffect(() => {
    if (isScreenFocused) {
      console.log('explore focused');
    }
  }, [isScreenFocused]);

  useEffect(() => {
    console.log('made it');
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
        console.log(`${bookmarkedPosts.length}: bookmarks`);
      });
  }, [position, bookmarkedPosts]);

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
    currentItemIndex,
    onViewableItemsChanged,
    canShowMap,
    mapStyle,
    mapRef,
    flatListRef,
  };
};

export default useExplore;
