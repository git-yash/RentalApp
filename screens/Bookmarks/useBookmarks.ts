import React, {useEffect, useState} from 'react';
import BookmarksService from './Bookmarks.service';
import {useIsFocused} from '@react-navigation/native';
import useUserStore from '../../store/userStore';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {Rental} from '../../src/API';

const useBookmarks = () => {
  const [bookmarkedRentals, setBookmarkedRentals] = useState<Rental[]>([]);
  const bookmarksService = new BookmarksService();
  const [refreshing, setRefreshing] = React.useState(false);
  const {user} = useUserStore();
  const isScreenFocused = useIsFocused();

  const fetchBookmarkedRentals = () => {
    if (!user?.id) {
      return;
    }
    if (!isScreenFocused) {
      return;
    }

    bookmarksService.getBookmarkedRentals(user.id).then(response => {
      setBookmarkedRentals(response);
    });
  };

  useEffect(() => {
    fetchBookmarkedRentals();
  }, [isScreenFocused]);

  const onRefresh = React.useCallback(() => {
    refreshScreen();
  }, []);

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

  return {bookmarkedRentals, refreshing, onRefresh};
};

export default useBookmarks;
