import React, {useRef, useState} from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import logInOrSignUpStyles from './LogInOrSignUp.style';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import exploreStyles from '../Explore/Explore.style';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Util from '../../Util';
import OrDivider from '../../components/OrDivider/OrDivider';
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton';
import FinishSigningUp from '../FinishSigningUp/FinishSigningUp';

const LogInOrSignUp = (props: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const [emailText, setEmailText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [finishSigningUp, setFinishSigningUp] = useState(false);

  const isDisabled: boolean = emailText.length === 0 || !isValidEmail;

  const handleEmailOnChange = (text: string): void => {
    setEmailText(text);
    setIsValidEmail(Util.isValidEmail(text.trim()));
  };

  return (
    <Modal
      isVisible={props.isModalVisible}
      onSwipeComplete={() => {
        props.setIsModalVisible(false);
        ReactNativeHapticFeedback.trigger('impactMedium', options);
      }}
      onModalWillHide={() => {
        if (finishSigningUp) {
          props.setIsModalVisible(true);
          ReactNativeHapticFeedback.trigger('notificationWarning', options);
        }
      }}
      useNativeDriverForBackdrop
      swipeThreshold={300}
      swipeDirection={['down']}
      style={exploreStyles.modal}>
      {!finishSigningUp && (
        <View style={exploreStyles.modalView}>
          <View style={logInOrSignUpStyles.headerContainer}>
            <View style={logInOrSignUpStyles.iconContainer}>
              <Pressable
                style={logInOrSignUpStyles.dismissPressable}
                onPress={() => props.setIsModalVisible(false)}>
                <FontAwesomeIcon icon={faXmark} size={20} />
              </Pressable>
            </View>
            <View style={logInOrSignUpStyles.textContainer}>
              <Text style={logInOrSignUpStyles.text}>Log in or Sign up</Text>
            </View>
          </View>
          <ScrollView>
            <CustomTextInput
              inputTitle={'Email'}
              isValidInput={isValidEmail}
              placeholderText={'Enter email...'}
              errorMessage={'Please enter valid email!'}
              value={emailText}
              onChange={handleEmailOnChange}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              maxCharacterLength={320}
              textContentType={'emailAddress'}
            />
            <Pressable
              onPress={() => {
                setFinishSigningUp(true);
              }}
              disabled={isDisabled}
              style={
                isDisabled
                  ? logInOrSignUpStyles.continuePressableDisabled
                  : logInOrSignUpStyles.continuePressableEnabled
              }>
              <Text style={logInOrSignUpStyles.continueText}>Continue</Text>
            </Pressable>
            <OrDivider />
            <SocialLoginButton socialName={'Apple'} />
            <SocialLoginButton socialName={'Google'} />
            <SocialLoginButton socialName={'Facebook'} />
          </ScrollView>
        </View>
      )}

      {finishSigningUp && (
        <View style={exploreStyles.modalView}>
          <FinishSigningUp
            email={emailText}
            setFinishSigningUp={setFinishSigningUp}
          />
        </View>
      )}
    </Modal>
  );
};

export default LogInOrSignUp;
