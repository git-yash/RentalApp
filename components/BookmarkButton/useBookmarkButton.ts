import useUserStore from '../../store/userStore';
import {BookmarkedRental, Rental} from '../../src/API';
import {Alert} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import BookmarkButtonService from './BookmarkButton.service';
import Util from '../../Util';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import useBookmarksStore from '../../store/bookmarksStore';

const useBookmarkButton = (rental: Rental) => {
  const {user, setUser} = useUserStore();

  const {bookmarkedRentals, addBookmark, removeBookmark} = useBookmarksStore(
    state => ({
      bookmarkedRentals: state.bookmarkedRentals,
      removeBookmark: state.removeBookmark,
      addBookmark: state.addBookmark,
    }),
  );

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [bookmarkedRental, setBookmarkedRental] = useState<
    BookmarkedRental | null | undefined
  >(undefined);
  const service = new BookmarkButtonService();

  const handleHeartPress = useCallback(() => {
    if (!user?.id || !rental.id) {
      Alert.alert('Please log in to bookmark rentals.');
      return;
    }

    if (!isBookmarked) {
      service
        .createBookmark(user.id, rental)
        .then(b => {
          ReactNativeHapticFeedback.trigger('effectDoubleClick', Util.options);

          const br = b.data.createBookmarkedRental as BookmarkedRental;
          addBookmark(br);

          if (user.bookmarks) {
            user.bookmarks.items = bookmarkedRentals;
          }
          setBookmarkedRental(br);
          setIsBookmarked(true);
          setUser(user);
        })
        .catch(() => {
          Alert.alert('Unable to set bookmark');
        });
    } else {
      if (!bookmarkedRental?.id) {
        return;
      }
      service
        .deleteBookmark(bookmarkedRental?.id)
        .then(() => {
          removeBookmark(bookmarkedRental.id);

          if (user.bookmarks) {
            user.bookmarks.items = bookmarkedRentals;
          }
          setBookmarkedRental(null);
          setIsBookmarked(false);
          setUser(user);
        })
        .catch(() => {
          Alert.alert('Unable to set bookmark');
        });
    }
  }, [isBookmarked]);

  useEffect(() => {
    setIsBookmarked(!isBookmarked);
  }, [bookmarkedRentals]);

  useEffect(() => {
    let bookmark = user?.bookmarks?.items.find(
      b => b?.bookmarkedRentalRentalId === rental.id,
    );
    setBookmarkedRental(bookmark);
    setIsBookmarked(!!bookmark);
  }, [user?.bookmarks?.items.length]);

  return {
    isBookmarked,
    handleHeartPress,
  };
};
export default useBookmarkButton;
