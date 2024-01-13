import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import logInOrSignUpStyles from './LogInOrSignUp.style';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import exploreStyles from '../../screens/Explore/Explore.style';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Util from '../../Util';
import OrDivider from '../../components/OrDivider/OrDivider';
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton';
import FinishSigningUp from '../FinishSigningUp/FinishSigningUp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EnterPassword from '../EnterPassword/EnterPassword';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import useLogInOrSignUp from './useLogInOrSignUp';

const LogInOrSignUp = (props: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const {
    emailText,
    emailError,
    canHideModal,
    setCanHideModal,
    isLoading,
    handleEmailOnChange,
    isDisabled,
    modalScreenName,
    setModalScreenName,
    handleContinuePress,
  } = useLogInOrSignUp();

  return (
    <Modal
      isVisible={props.isModalVisible}
      scrollOffset={Dimensions.get('window').height * 0.85} // 85% of screen height is scrollable
      onSwipeComplete={() => {
        props.setIsModalVisible(false);
        ReactNativeHapticFeedback.trigger('impactMedium', Util.options);
      }}
      onModalWillHide={() => {
        if (!canHideModal) {
          props.setIsModalVisible(true);
          ReactNativeHapticFeedback.trigger(
            'notificationWarning',
            Util.options,
          );
        }
      }}
      useNativeDriverForBackdrop
      swipeThreshold={300}
      swipeDirection={['down']}
      style={exploreStyles.modal}>
      {modalScreenName === 'LogInOrSignUp' && (
        <View style={exploreStyles.modalView}>
          <View style={logInOrSignUpStyles.headerContainer}>
            <View style={logInOrSignUpStyles.iconContainer}>
              <TouchableOpacity
                style={logInOrSignUpStyles.dismissPressable}
                onPress={() => props.setIsModalVisible(false)}>
                <FontAwesomeIcon icon={faXmark} size={20} />
              </TouchableOpacity>
            </View>
            <View style={logInOrSignUpStyles.textContainer}>
              <Text style={logInOrSignUpStyles.text}>Log in or Sign up</Text>
            </View>
          </View>
          <KeyboardAwareScrollView style={{paddingTop: 15}}>
            <CustomTextInput
              inputTitle={'Email'}
              placeholderText={'Enter email...'}
              errorMessage={emailError}
              value={emailText}
              onChange={handleEmailOnChange}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              maxCharacterLength={320}
              textContentType={'emailAddress'}
            />
            <ContinuePressable
              onPress={() => {
                void handleContinuePress(emailText);
              }}
              isDisabled={isDisabled}
              text={'Continue'}
              isLoading={isLoading}
            />
            <OrDivider />
            <SocialLoginButton socialName={'Apple'} />
            <SocialLoginButton socialName={'Google'} />
            <SocialLoginButton socialName={'Facebook'} />
          </KeyboardAwareScrollView>
        </View>
      )}

      {modalScreenName === 'FinishSigningUp' && (
        <View style={exploreStyles.modalView}>
          <FinishSigningUp
            email={emailText}
            setModalScreenName={setModalScreenName}
            setIsModalVisible={props.setIsModalVisible}
            setCanHideModal={setCanHideModal}
            emailText={emailText}
          />
        </View>
      )}

      {modalScreenName === 'EnterPassword' && (
        <View style={exploreStyles.modalView}>
          <EnterPassword
            emailText={emailText}
            setModalScreenName={setModalScreenName}
            setIsModalVisible={props.setIsModalVisible}
            setCanHideModal={setCanHideModal}
          />
        </View>
      )}
    </Modal>
  );
};

export default LogInOrSignUp;
