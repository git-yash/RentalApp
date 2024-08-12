import {AuthUser, type FetchUserAttributesOutput} from 'aws-amplify/auth';
import {type User} from '../src/API';
import {createWithEqualityFn} from 'zustand/traditional';
import {shallow} from 'zustand/shallow';

interface UserState {
  authUser?: AuthUser | null;
  user?: User | null;
  userAttributes: FetchUserAttributesOutput | undefined | null;
  setAuthUser: (authUser?: AuthUser | null) => void;
  setUser: (user?: User | null) => void;
  setUserAttributes: (
    userAttributes?: FetchUserAttributesOutput | null,
  ) => void;
}

const useUserStore = createWithEqualityFn<UserState>(
  set => ({
    authUser: undefined,
    user: undefined,
    userAttributes: undefined,
    setAuthUser: authUser => set(() => ({authUser})),
    setUser: user => set(() => ({user})),
    setUserAttributes: userAttributes => set(() => ({userAttributes})),
  }),
  shallow,
);

export default useUserStore;
