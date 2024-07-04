import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, AppState} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import ExploreService from './Explore.service';
import {useMyContext} from '../../MyContext';
import Util from '../../Util';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import BottomSheet from '@gorhom/bottom-sheet';
import useUserStore from '../../store/userStore';
import {Hub} from 'aws-amplify/utils';
import ScreenNameConstants from '../ScreenNameConstants';
import {Rental} from '../../src/API';
import {useIsFocused} from '@react-navigation/native';

const useExplore = (navigation: any) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [canShowMap, setCanShowMap] = useState<boolean>(false);
  const [mapInitiallyVisible, setMapInitiallyVisible] =
    useState<boolean>(false);
  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');
  const [rentals, setRentals] = useState<Rental[]>([]);
  const exploreService = new ExploreService();
  const flatListRef = useRef();
  const mapRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const {bookmarkedPosts} = useMyContext();
  const [isListView, setIsListView] = useState<boolean | undefined>(undefined);
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
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );
  useEffect(() => {
    if (isListView === false) {
      setMapInitiallyVisible(true);
    }
  }, [isListView]);

  const showMapButtonPress = () => {
    bottomSheetRef.current?.snapToIndex(0);
    if (!mapInitiallyVisible) {
      setMapInitiallyVisible(true);
    }
  };

  const setAllRentals = (
    searchText?: string,
    startDate?: Date,
    endDate?: Date,
  ) => {
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
        selectedCategory,
        searchText,
        startDate,
        endDate,
      )
      .then(r => {
        return setRentals(r);
      })
      .catch(() => {
        setRentals([]);
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
    mapRef?.current?.animateToRegion(
      {
        latitude: rentals[currentItemIndex].latitude,
        longitude: rentals[currentItemIndex].longitude,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      },
      300,
    );
  }, [currentItemIndex, rentals]);

  const isScreenFocused = useIsFocused();

  const onSearchBarPress = () => {
    navigation.navigate(ScreenNameConstants.Search, {
      setRentals,
      setShowSearchResults,
    });
  };

  useEffect(() => {
    setAllRentals();
  }, [selectedCategory]);

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
    const userListener = (data: {payload: {event: any}}) => {
      if (data.payload.event === 'UserRetrievedError') {
        navigation.navigate(ScreenNameConstants.LogInOrSignUpScreens);
      }
    };

    const userListenerCancel = Hub.listen('user', userListener);

    // Cleanup on unmount
    return () => {
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
    bottomSheetRef,
    selectedCategory,
    setSelectedCategory,
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
    mapInitiallyVisible,
    showMapButtonPress,
    onSearchBarPress,
  };
};

export default useExplore;
