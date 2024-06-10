import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, AppState} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Rental} from '../../modals/Rental';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ExploreService from './Explore.service';
import {useMyContext} from '../../MyContext';
import {useIsFocused} from '@react-navigation/native';
import Util from '../../Util';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import BottomSheet from '@gorhom/bottom-sheet';
import {DateRange} from '../../modals/DateRange';

const useExplore = () => {
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
  const snapPoints = useMemo(
    () => ['10%', showSearchResults ? '95%' : '85%'],
    [],
  );
  const handleSheetChanges = useCallback((index: number) => {
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
    if (!auth().currentUser) {
      setModalVisible(true);
    }

    void setCurrentPosition();
  }, []);

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
        firestore()
          .collection('users')
          .doc(auth().currentUser?.email as string)
          .update({isOnline: true});
      } else if (nextAppState === 'inactive') {
        firestore()
          .collection('users')
          .doc(auth().currentUser?.email as string)
          .update({isOnline: false});
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setCurrentPosition = async () => {
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
