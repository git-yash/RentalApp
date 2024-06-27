import {fetchUserAttributes, getCurrentUser} from 'aws-amplify/auth';
import useUserStore from '../store/userStore';
import ProfileService from '../screens/Profile/Profile.service';
import UserService from '../services/User.service';

const useUser = () => {
  const {setAuthUser, setUserAttributes, setUser} = useUserStore();
  const profileService = new ProfileService();
  const userService = new UserService();

  const initializeUser = async () => {
    try {
      const au = await getCurrentUser();
      setAuthUser(au);

      if (!au.signInDetails?.loginId) {
        return;
      }
      const user = await userService.getUser(au.signInDetails.loginId);
      setUser(user);

      const attributes = await fetchUserAttributes();
      setUserAttributes(attributes);

      return true;
    } catch (e) {
      console.error('useUser: ', e);
      throw e;
    }
  };

  const signOutUser = async () => {
    await profileService.handleSignOut();
    setUserAttributes(null);
    setUser(null);
    setAuthUser(null);
  };

  return {
    initializeUser,
    signOutUser,
  };
};

export default useUser;
