import {signIn, type SignInInput} from 'aws-amplify/auth';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import {generateClient} from 'aws-amplify/api';
import {getUser} from '../../src/graphql/queries';
import {type User} from '../../src/API';

export default class EnterPasswordService {
  async handleSignIn(
    {username, password}: SignInInput,
    setCanHideModal: any,
    setIsModalVisible: any,
    setIsLoading: any,
    setErrorMessage: any,
  ) {
    setIsLoading(true);
    const client = generateClient();

    return signIn({username, password})
      .then(async ({isSignedIn, nextStep}) => {
        ReactNativeHapticFeedback.trigger('notificationSuccess', Util.options);
        console.log('is signed in: ', isSignedIn);

        const user = await client
          .graphql({query: getUser, variables: {id: username}})
          .then(response => {
            return response.data.getUser as User;
          });

        setCanHideModal(isSignedIn);
        setIsModalVisible(isSignedIn);
        return Promise.resolve(isSignedIn ? user : undefined);
      })
      .finally(() => setIsLoading(false))
      .catch(error => {
        console.error('EnterPassword.service.signIn: error signing in', error);
        ReactNativeHapticFeedback.trigger('notificationError', Util.options);
        setErrorMessage('Sign-in error');
        return Promise.resolve(undefined);
      });
  }
}
