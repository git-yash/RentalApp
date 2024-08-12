import {BookmarkedRental} from '../src/API';
import {createWithEqualityFn} from 'zustand/traditional';
import {shallow} from 'zustand/shallow';

export interface BookmarksState {
  bookmarkedRentals: (BookmarkedRental | null)[];
  addBookmark: (bookmarkedRental: BookmarkedRental) => void;
  addBookmarks: (bookmarkedRentals: (BookmarkedRental | null)[]) => void;
  removeBookmark: (bookmarkedRentalID: string) => void;
}

const useBookmarksStore = createWithEqualityFn<BookmarksState>(
  set => ({
    bookmarkedRentals: [],
    addBookmark: (bookmarkedRental: BookmarkedRental) =>
      set(state => ({
        bookmarkedRentals: [...state.bookmarkedRentals, bookmarkedRental],
      })),
    addBookmarks: (bookmarkedRentals: (BookmarkedRental | null)[]) =>
      set(() => ({
        bookmarkedRentals: bookmarkedRentals,
      })),
    removeBookmark: (bookmarkedRentalID: string) =>
      set(state => ({
        bookmarkedRentals: state.bookmarkedRentals.filter(
          bookmarkedRental => bookmarkedRental?.id !== bookmarkedRentalID,
        ),
      })),
  }),
  shallow,
);

export default useBookmarksStore;
