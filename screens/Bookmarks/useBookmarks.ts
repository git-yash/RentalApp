import {useEffect, useState} from 'react';
import {Rental} from '../../modals/Rental';
import BookmarksService from './Bookmarks.service';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Alert} from 'react-native';

const useBookmarks = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Rental[]>([]);
  const [position, setPosition] = useState<GeolocationResponse>();
  const bookmarksService = new BookmarksService();

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

  return {bookmarkedPosts, position};
};

export default useBookmarks;
