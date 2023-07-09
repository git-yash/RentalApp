import React, {useState} from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import logInOrSignUpStyles from './LogInOrSignUp.style';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import exploreStyles from '../Explore/Explore.style';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Util from '../../Util';
import Colors from '../../assets/Colors';
import {Spinner} from 'native-base';

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

  const handleEmailOnChange = (text: string) => {
    setEmailText(text);
    setIsValidEmail(Util.isValidEmail(text));
  };

  return (
    <Modal
      isVisible={props.isModalVisible}
      onSwipeComplete={() => {
        props.setIsModalVisible(false);
        ReactNativeHapticFeedback.trigger('impactMedium', options);
      }}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      style={exploreStyles.modal}>
      <View style={exploreStyles.modalView}>
        <View style={logInOrSignUpStyles.headerContainer}>
          <View style={logInOrSignUpStyles.iconContainer}>
            <Pressable onPress={() => props.setIsModalVisible(false)}>
              <FontAwesomeIcon icon={faXmark} size={20} />
            </Pressable>
          </View>
          <View style={logInOrSignUpStyles.textContainer}>
            <Text style={logInOrSignUpStyles.text}>Log in or Sign up</Text>
          </View>
        </View>
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
        <View style={logInOrSignUpStyles.continueButtonContainer}>
          <Pressable style={logInOrSignUpStyles.continuePressable}>
            <Text style={logInOrSignUpStyles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default LogInOrSignUp;
