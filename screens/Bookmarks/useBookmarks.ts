import React, {useEffect, useState} from 'react';
import BookmarksService from './Bookmarks.service';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {useMyContext} from '../../MyContext';
import {useIsFocused} from '@react-navigation/native';

const useBookmarks = () => {
  const {bookmarkedPosts, setBookmarkedPosts} = useMyContext();
  const [position, setPosition] = useState<GeolocationResponse>();
  const bookmarksService = new BookmarksService();
  const [refreshing, setRefreshing] = React.useState(false);

  const isScreenFocused = useIsFocused();

  useEffect(() => {
    if (isScreenFocused) {
      refreshScreen();
    }
  }, [isScreenFocused]);

  const onRefresh = React.useCallback(() => {
    refreshScreen();
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

  const refreshScreen = () => {
    setRefreshing(true);
    ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
    bookmarksService
      .setBookmarkedPosts(setBookmarkedPosts)
      .then(() => setRefreshing(false));
  };

  useEffect(() => {
    void setCurrentPosition();
    void bookmarksService.setBookmarkedPosts(setBookmarkedPosts);
  }, []);

  return {bookmarkedPosts, position, refreshing, onRefresh};
};

export default useBookmarks;
