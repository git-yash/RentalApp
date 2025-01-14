import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import ExploreService from './Explore.service';
import Util from '../../Util';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import BottomSheet from '@gorhom/bottom-sheet';
import {Hub} from 'aws-amplify/utils';
import ScreenNameConstants from '../ScreenNameConstants';
import {Rental} from '../../src/API';

const useExplore = (navigation: any) => {
  const [canShowMap, setCanShowMap] = useState<boolean>(false);
  const [mapInitiallyVisible, setMapInitiallyVisible] =
    useState<boolean>(false);
  const [position, setPosition] = useState<GeolocationResponse>();
  const mapStyle = require('../../assets/MapStyle.json');
  const [rentals, setRentals] = useState<Rental[]>([]);
  const exploreService = new ExploreService();
  const flatListRef = useRef<FlatList>(null);
  const mapRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isListView, setIsListView] = useState<boolean | undefined>(undefined);
  const [refreshing, setRefreshing] = React.useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
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
    setSelectedCategory('Lawn Equipment');
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

  const onSearchBarPress = () => {
    navigation.navigate(ScreenNameConstants.Search, {
      setRentals,
      setShowSearchResults,
    });
  };

  useEffect(() => {
    if (!position) {
      return;
    }

    setAllRentals();
  }, [selectedCategory, position]);

  // TODO: fix bookmark update issue
  useEffect(() => {
    getCurrentGeoPosition()
      .then(pos => {
        setPosition(pos);
        setCanShowMap(true);
      })
      .catch(e => {
        console.error(e);
        Alert.alert('GetCurrentPosition Error');
      });

    const userListener = (data: {payload: {event: any; data: any}}) => {
      if (data.payload.event === 'UserRetrievedError') {
        navigation.navigate(ScreenNameConstants.LogInOrSignUpScreens);
      }
      // else if (data.payload.event === 'UserRetrieved') {
      //   getCurrentGeoPosition()
      //     .then(pos => {
      //       console.log('setting position');
      //       setPosition(pos);
      //       setCanShowMap(true);
      //     })
      //     .catch(e => {
      //       console.error(e);
      //       Alert.alert('GetCurrentPosition Error');
      //     });
      // }
    };

    const userListenerCancel = Hub.listen('user', userListener);

    // Cleanup on unmount
    return () => {
      userListenerCancel();
    };
  }, []);

  const getCurrentGeoPosition = async () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        pos => {
          resolve(pos as GeolocationResponse);
        },
        error => {
          reject(error);
        },
        {enableHighAccuracy: true},
      );
    });
  };

  return {
    position,
    bottomSheetRef,
    selectedCategory,
    setSelectedCategory,
    rentals,
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
