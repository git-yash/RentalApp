import {AuthUser, type FetchUserAttributesOutput} from 'aws-amplify/auth';
import {create} from 'zustand';
import {type User} from '../src/API';

interface UserState {
  authUser?: AuthUser | null;
  user?: User | null;
  userAttributes: FetchUserAttributesOutput | undefined | null;
  // bookmarkedRentals: BookmarkedRental[] | undefined;
  setAuthUser: (authUser?: AuthUser | null) => void;
  setUser: (user?: User | null) => void;
  setUserAttributes: (
    userAttributes?: FetchUserAttributesOutput | null,
  ) => void;
  // setBookmarkedRentals: (bookmarkedRentals?: BookmarkedRental[] | null) => void;
}

const useUserStore = create<UserState>(set => ({
  authUser: undefined,
  user: undefined,
  userAttributes: undefined,
  // bookmarkedRentals: undefined,
  setAuthUser: authUser => set({authUser}),
  setUser: user => set({user}),
  setUserAttributes: userAttributes => set({userAttributes}),
  // setBookmarkedRentals: bookmarkedRentals => set({bookmarkedRentals}),
}));

export default useUserStore;
