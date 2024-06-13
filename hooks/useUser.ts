import {fetchUserAttributes, getCurrentUser} from 'aws-amplify/auth';
import type {User} from '../src/API';
import {getUser} from '../src/graphql/queries';
import useUserStore from '../store/userStore';
import {generateClient} from 'aws-amplify/api';
import ProfileService from '../screens/Profile/Profile.service';

const useUser = () => {
  const {setAuthUser, setUserAttributes, setUser} = useUserStore();
  const client = generateClient();
  const profileService = new ProfileService();

  const initializeUser = async () => {
    try {
      const au = await getCurrentUser();
      // console.log(au, 'App:getUser');
      setAuthUser(au);

      client
        .graphql({
          query: getUser,
          variables: {id: au.signInDetails?.loginId},
        })
        .then(response => {
          setUser(response.data.getUser as User);
        })
        .catch(e => {
          console.error(e);
          return false;
        });

      fetchUserAttributes()
        .then(attributes => {
          // console.log(attributes, 'App:attributes');
          setUserAttributes(attributes);
        })
        .catch(e_1 => {
          console.error(e_1);
          return false;
        });

      return true;
    } catch (e_2) {
      console.error('useUser: ', e_2);
      throw e_2;
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
