import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';

export default class FinishSigningUpService {
  signUp(
    emailText: string,
    passwordText: string,
    firstNameText: string,
    lastNameText: string,
    birthdate: Date,
    setCanHideModal: any,
    setIsModalVisible: any,
    setIsLoading: any,
    setEmailError: any,
  ) {
    auth()
      .createUserWithEmailAndPassword(emailText, passwordText)
      .then(() => {
        auth()
          .currentUser?.updateProfile({
            displayName: firstNameText + ' ' + lastNameText,
          })
          .then(() => {
            firestore()
              .collection('users')
              .doc(emailText)
              .set({
                birthdate: birthdate,
                dateJoined: Date.now(),
                isOnline: true,
              })
              .then(() => {
                setCanHideModal(true);
                setIsModalVisible(false);
                ReactNativeHapticFeedback.trigger(
                  'notificationSuccess',
                  Util.options,
                );
                setIsLoading(false);
              });
          });
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setIsLoading(false);
        }
        if (error.code === 'auth/email-already-in-use') {
          setEmailError('This email is already in use, try logging in.');
        }
        console.error(error);
        setIsLoading(false);
      });
  }
}
