import {AuthUser, type FetchUserAttributesOutput} from 'aws-amplify/auth';
import {create} from 'zustand';
import {type User} from '../src/API';

interface UserState {
  authUser?: AuthUser;
  user?: User;
  userAttributes: FetchUserAttributesOutput | undefined;
  setAuthUser: (authUser?: AuthUser) => void;
  setUser: (user?: User) => void;
  setUserAttributes: (userAttributes?: FetchUserAttributesOutput) => void;
}

const useUserStore = create<UserState>(set => ({
  authUser: undefined,
  user: undefined,
  userAttributes: undefined,
  setAuthUser: authUser => set({authUser}),
  setUser: user => set({user}),
  setUserAttributes: userAttributes => set({userAttributes}),
}));

export default useUserStore;
