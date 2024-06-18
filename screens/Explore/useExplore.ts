import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, AppState} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Rental} from '../../modals/Rental';
import firestore from '@react-native-firebase/firestore';
import ExploreService from './Explore.service';
import {useMyContext} from '../../MyContext';
import {useIsFocused} from '@react-navigation/native';
import Util from '../../Util';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import BottomSheet from '@gorhom/bottom-sheet';
import {DateRange} from '../../modals/DateRange';
import useUserStore from '../../store/userStore';
import {Hub} from 'aws-amplify/utils';

const useExplore = (navigation: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [canShowMap, setCanShowMap] = useState(false);
  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');
  const [rentals, setRentals] = useState<Rental[]>([]);
  const exploreService = new ExploreService();
  const flatListRef = useRef();
  const mapRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const {bookmarkedPosts} = useMyContext();
  const [isListView, setIsListView] = useState(false);
  const appState = useRef(AppState.currentState);
  const [refreshing, setRefreshing] = React.useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {user} = useUserStore();
  const snapPoints = useMemo(
    () => ['10%', showSearchResults ? '95%' : '85%'],
    [],
  );
  const handleSheetChanges = useCallback(() => {
    setIsListView(prevState => !prevState);
  }, []);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const categoryItems = [
    {
      iconName: 'grass',
      name: 'Lawn Equipment',
    },
    {
      iconName: 'construction',
      name: 'Power Tools',
    },
    {
      iconName: 'devices',
      name: 'Electronics',
    },
    {
      iconName: 'pool',
      name: 'Pool Equipment',
    },
    {
      iconName: 'sports-basketball',
      name: 'Sports',
    },
    {
      iconName: 'hiking',
      name: 'Outdoors',
    },
    {
      iconName: 'home',
      name: 'Home',
    },
    {
      iconName: 'outdoor-grill',
      name: 'Cooking',
    },
    {
      iconName: 'group-work',
      name: 'Other',
    },
  ];

  const [whichCategorySelected, setWhichCategorySelected] = useState(
    categoryItems[0].name,
  );

  const setAllRentals = (searchText?: string, dateRange?: DateRange) => {
    if (!position) {
      return;
    }

    exploreService
      .getAllRentals(
        {
          lat: position.coords.latitude as number,
          lng: position.coords.longitude as number,
        },
        5,
        whichCategorySelected,
        searchText,
        dateRange,
      )
      .then(r => {
        setRentals(r);
      });
  };

  const refreshScreen = () => {
    setRefreshing(true);
    ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
    setAllRentals();
    setRefreshing(false);
  };
  const onRefresh = React.useCallback(() => {
    refreshScreen();
  }, []);

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
    if (!whichCategorySelected) {
      return;
    }
    setAllRentals();
  }, [whichCategorySelected]);

  // TODO: fix bookmark update issue

  useEffect(() => {
    if (user) {
      setModalVisible(false);
      void setCurrentGeoPosition();
    }
  }, [user]);

  useEffect(() => {
    if (!position) {
      return;
    }
    setCanShowMap(true);
    setAllRentals();
  }, [position, bookmarkedPosts]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        firestore().collection('users').doc(user?.id).update({isOnline: true});
      } else if (nextAppState === 'inactive') {
        firestore().collection('users').doc(user?.id).update({isOnline: false});
      }

      appState.current = nextAppState;
    });

    // const authListener = (data: {payload: {event: any}}) => {
    //   console.log('authListener', data.payload.event);
    //   switch (data.payload.event) {
    //     case 'signIn':
    //       console.log('user signed in');
    //       // navigation.navigate('LogInOrSignUpScreens');
    //       break;
    //     case 'signOut':
    //       console.log('user signed out');
    //       break;
    //     case 'signUp':
    //       console.log('user signed up');
    //       break;
    //     case 'signIn_failure':
    //       console.log('user sign in failed');
    //       break;
    //     case 'configured':
    //       console.log('the Auth module is configured');
    //       break;
    //     default:
    //       console.log('Unhandled event: ', data.payload.event);
    //       break;
    //   }
    // };
    const userListener = (data: {payload: {event: any}}) => {
      console.log('userListener: ', data.payload.event);
      if (data.payload.event === 'UserRetrievedError') {
        navigation.navigate('LogInOrSignUpScreens');
      }
    };

    // const authListenerCancel = Hub.listen('auth', authListener);
    const userListenerCancel = Hub.listen('user', userListener);
    console.log('listeners registered. useExplore, load');

    // Cleanup on unmount
    return () => {
      subscription.remove();
      // authListenerCancel();
      userListenerCancel();
    };
  }, []);

  const setCurrentGeoPosition = async () => {
    Geolocation.getCurrentPosition(
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
    whichCategorySelected,
    setWhichCategorySelected,
    bottomSheetRef,
    rentals,
    setAllRentals,
    categoryItems,
    currentItemIndex,
    onViewableItemsChanged,
    isSearchFocused,
    showSearchResults,
    setShowSearchResults,
    setIsSearchFocused,
    refreshing,
    onRefresh,
    snapPoints,
    handleSheetChanges,
    isListView,
    canShowMap,
    mapStyle,
    mapRef,
    flatListRef,
  };
};

export default useExplore;
