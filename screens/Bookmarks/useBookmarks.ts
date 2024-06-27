import React, {useEffect, useState} from 'react';
import BookmarksService from './Bookmarks.service';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import useUserStore from '../../store/userStore';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {Rental} from '../../src/API';

const useBookmarks = () => {
  // const {bookmarkedPosts, setBookmarkedPosts} = useMyContext();
  const [bookmarkedRentals, setBookmarkedRentals] = useState<Rental[]>([]);
  const [position, setPosition] = useState<GeolocationResponse>();
  const bookmarksService = new BookmarksService();
  const [refreshing, setRefreshing] = React.useState(false);
  const {user} = useUserStore();
  // const doesHaveBookmarks: boolean = user?.bookmarkedRentalIDs
  //   ? user?.bookmarkedRentalIDs.length > 0
  //   : false;

  const isScreenFocused = useIsFocused();

  useEffect(() => {
    if (isScreenFocused) {
      // refreshScreen();
    }
  }, [isScreenFocused]);

  useEffect(() => {
    if (!user?.id) {
      return;
    }
    void setCurrentPosition();
    bookmarksService.getBookmarkedRentals(user.id).then(response => {
      setBookmarkedRentals(response);
    });
  }, []);

  const onRefresh = React.useCallback(() => {
    refreshScreen();
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

  const refreshScreen = () => {
    if (!user?.id) {
      return;
    }
    setRefreshing(true);
    ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
    bookmarksService.getBookmarkedRentals(user.id).then(response => {
      setBookmarkedRentals(response);
      setRefreshing(false);
    });
  };

  // useEffect(() => {
  //   void setCurrentPosition();
  //   void bookmarksService.getBookmarkedRentals(setBookmarkedPosts);
  // }, [user?.bookmarkedRentalIDs]);

  return {bookmarkedRentals, position, refreshing, onRefresh};
};

export default useBookmarks;
