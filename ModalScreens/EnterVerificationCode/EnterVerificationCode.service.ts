import {confirmSignUp, ConfirmSignUpInput} from 'aws-amplify/auth';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';

export default class EnterVerificationCodeService {
  async handleSignUpConfirmation(
    setIsLoading: any,
    {username, confirmationCode}: ConfirmSignUpInput,
  ) {
    return confirmSignUp({username, confirmationCode}).catch(error => {
      console.error('EnterPassword.service.signIn: error signing in', error);
      ReactNativeHapticFeedback.trigger('notificationError', Util.options);
      throw error;
    });
  }
}
