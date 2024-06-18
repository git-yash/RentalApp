import {signIn, type SignInInput} from 'aws-amplify/auth';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';

export default class EnterPasswordService {
  async handleSignIn({username, password}: SignInInput, setIsLoading: any) {
    setIsLoading(true);

    return signIn({username, password})
      .finally(() => setIsLoading(false))
      .catch(error => {
        console.error('EnterPassword.service.signIn: error signing in', error);
        ReactNativeHapticFeedback.trigger('notificationError', Util.options);
        throw error;
      });
  }
}
