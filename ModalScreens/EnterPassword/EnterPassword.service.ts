import auth from '@react-native-firebase/auth';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import firestore from '@react-native-firebase/firestore';

export default class EnterPasswordService {
  async handleSignIn(
    emailText: string,
    passwordText: string,
    setCanHideModal: any,
    setIsModalVisible: any,
    setIsLoading: any,
    setErrorMessage: any,
  ) {
    setIsLoading(true);
    try {
      await auth()
        .signInWithEmailAndPassword(emailText, passwordText)
        .then(() => {
          ReactNativeHapticFeedback.trigger(
            'notificationSuccess',
            Util.options,
          );
          setCanHideModal(true);
          setIsModalVisible(false);
          console.log('logged in ' + auth().currentUser?.email);
          firestore()
            .collection('users')
            .doc(emailText)
            .update({isOnline: true});
          setIsLoading(false);
        });
      // Handle successful sign-in
    } catch (error) {
      // Handle sign-in error
      ReactNativeHapticFeedback.trigger('notificationError', Util.options);
      console.error('Sign-in error:', error);
      setIsLoading(false);
      setErrorMessage('Incorrect Password');
    }
  }
}
