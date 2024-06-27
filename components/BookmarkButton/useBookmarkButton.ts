import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import useUserStore from '../../store/userStore';
import {BookmarkedRental, Rental} from '../../src/API';
import {Alert} from 'react-native';
import {useEffect, useState} from 'react';
import BookmarkButtonService from './BookmarkButton.service';

const useBookmarkButton = (rental: Rental) => {
  const {user} = useUserStore();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [bookmarkedRental, setBookmarkedRental] = useState<
    BookmarkedRental | undefined
  >(undefined);
  const service = new BookmarkButtonService();

  const handleHeartPress = () => {
    if (!user?.id || !rental.id) {
      Alert.alert('Please log in to bookmark rentals.');
      return;
    }

    if (!isBookmarked) {
      service
        .createBookmark(user.id, rental)
        .then(() => {
          setIsBookmarked(!isBookmarked);
          ReactNativeHapticFeedback.trigger('effectDoubleClick', Util.options);
        })
        .catch(() => {
          Alert.alert('Unable to set bookmark');
        });
    } else {
      service
        .deleteBookmark(bookmarkedRental?.id as string)
        .then(() => {
          setIsBookmarked(!isBookmarked);
        })
        .catch(() => {
          Alert.alert('Unable to set bookmark');
        });
    }
  };

  const fetchBookmark = async () => {
    if (!user?.id || !rental.id) {
      return;
    }
    service
      .getBookmark(user.id, rental.id)
      .then(response => {
        if (response.data.bookmarkedRentalsByUserID.items.length > 0) {
          setIsBookmarked(true);
          setBookmarkedRental(response.data.bookmarkedRentalsByUserID.items[0]);
        } else {
          setIsBookmarked(false);
          setBookmarkedRental(undefined);
        }
      })
      .catch(e => {
        console.error(e);
      });
  };

  useEffect(() => {
    void fetchBookmark();
  }, []);

  return {
    isBookmarked,
    handleHeartPress,
  };
};
export default useBookmarkButton;
