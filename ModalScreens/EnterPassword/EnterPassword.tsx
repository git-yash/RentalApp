import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomSecureTextInput from '../../components/CustomSecureTextInput/CustomSecureTextInput';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import enterPasswordStyles from './EnterPassword.style';
import useEnterPassword from './useEnterPassword';
import EnterPasswordService from './EnterPassword.service';

const EnterPassword = (props: {
  setModalScreenName: any;
  setIsModalVisible: any;
  emailText: string;
  setCanHideModal: any;
}) => {
  const {
    passwordText,
    setPasswordText,
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
  } = useEnterPassword();
  const enterPasswordService = new EnterPasswordService();

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
          onPress={() => {
            void enterPasswordService.handleSignIn(
              props.emailText,
              passwordText,
              props.setCanHideModal,
              props.setIsModalVisible,
              setIsLoading,
              setErrorMessage,
            );
          }}
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
