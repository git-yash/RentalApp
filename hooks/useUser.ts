import {fetchUserAttributes, getCurrentUser} from 'aws-amplify/auth';
import useUserStore from '../store/userStore';
import {generateClient} from 'aws-amplify/api';
import ProfileService from '../screens/Profile/Profile.service';
import {getUser} from '../src/graphql/queries';
import {User} from '../src/API';

const useUser = () => {
  const {setAuthUser, setUserAttributes, setUser} = useUserStore();
  const client = generateClient();
  const profileService = new ProfileService();

  const initializeUser = async () => {
    try {
      const au = await getCurrentUser();
      setAuthUser(au);

      const response = await client.graphql({
        query: getUser,
        variables: {id: au.signInDetails?.loginId},
      });
      setUser(response.data.getUser as User);

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
