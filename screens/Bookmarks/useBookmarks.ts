import React, {useEffect, useState} from 'react';
import BookmarksService from './Bookmarks.service';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Alert} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {useMyContext} from '../../MyContext';

const useBookmarks = (navigation: any) => {
  const {bookmarkedPosts, setBookmarkedPosts} = useMyContext();
  const [position, setPosition] = useState<GeolocationResponse>();
  const bookmarksService = new BookmarksService();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    return navigation.addListener('tabPress', e => {
      ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
      bookmarksService
        .setBookmarkedPosts(setBookmarkedPosts)
        .then(() => console.log('refreseh'));
    });
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
    bookmarksService
      .setBookmarkedPosts(setBookmarkedPosts)
      .then(() => setRefreshing(false));
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

  useEffect(() => {
    void setCurrentPosition();
    void bookmarksService.setBookmarkedPosts(setBookmarkedPosts);
  }, []);

  return {bookmarkedPosts, position, refreshing, onRefresh};
};

export default useBookmarks;
