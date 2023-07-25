import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomSecureTextInput from '../../components/CustomSecureTextInput/CustomSecureTextInput';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import enterPasswordStyles from './EnterPassword.style';
import auth from '@react-native-firebase/auth';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';
import firestore from '@react-native-firebase/firestore';

const EnterPassword = (props: {
  setModalScreenName: any;
  setIsModalVisible: any;
  emailText: string;
  setCanHideModal: any;
}) => {
  const [passwordText, setPasswordText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const handleContinue = async () => {
    setIsLoading(true);
    try {
      await auth()
        .signInWithEmailAndPassword(props.emailText, passwordText)
        .then(() => {
          ReactNativeHapticFeedback.trigger(
            'notificationSuccess',
            Util.options,
          );
          props.setCanHideModal(true);
          props.setIsModalVisible(false);
          console.log('logged in ' + auth().currentUser?.email);
          firestore()
            .collection('users')
            .doc(props.emailText)
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
  };

  return (
    <View style={exploreStyles.modalView}>
      <View style={logInOrSignUpStyles.headerContainer}>
        <View style={logInOrSignUpStyles.iconContainer}>
          <TouchableOpacity
            style={logInOrSignUpStyles.dismissPressable}
            onPress={() => {
              props.setModalScreenName('LogInOrSignUp');
              props.setCanHideModal(true);
            }}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} />
          </TouchableOpacity>
        </View>
        <View style={logInOrSignUpStyles.textContainer}>
          <Text style={logInOrSignUpStyles.text}>Log in</Text>
        </View>
      </View>
      <View style={{paddingTop: 15}}>
        <View style={enterPasswordStyles.forgotPasswordContainer}>
          <Text style={enterPasswordStyles.titleText}>
            Welcome to Rentality
          </Text>
        </View>
        <CustomSecureTextInput
          inputTitle={'Password'}
          placeholderText={'Enter password...'}
          value={passwordText}
          onChange={setPasswordText}
          error={errorMessage}
        />
        <ContinuePressable
          onPress={handleContinue}
          isDisabled={passwordText.length < 1}
          text={'Continue'}
          isLoading={isLoading}
        />
        <View style={enterPasswordStyles.forgotPasswordContainer}>
          <Text style={enterPasswordStyles.forgotPasswordText}>
            Forgot Password
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EnterPassword;
