import React, {useEffect, useState} from 'react';
import {Dimensions, Pressable, Text, View} from 'react-native';
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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const LogInOrSignUp = (props: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const [emailText, setEmailText] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [modalScreenName, setModalScreenName] = useState<
    'LogInOrSignUp' | 'FinishSigningUp' | 'EnterPassword'
  >('LogInOrSignUp');
  const [canHideModal, setCanHideModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled: boolean =
    emailText.length === 0 || emailError !== undefined;

  useEffect(() => {
    setModalScreenName('LogInOrSignUp');
    setEmailText('');
    setCanHideModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth().currentUser]);

  useEffect(() => {
    if (modalScreenName === 'LogInOrSignUp') {
      setCanHideModal(true);
    } else {
      setCanHideModal(false);
    }
  }, [modalScreenName]);

  const handleEmailOnChange = (text: string): void => {
    setEmailText(text);
    setEmailError(
      Util.isValidEmail(emailText.trim())
        ? undefined
        : 'Please enter a valid email!',
    );
  };

  const handleContinuePress = async (documentId: string) => {
    setIsLoading(true);
    try {
      const documentRef = firestore().collection('users').doc(documentId);
      const documentSnapshot = await documentRef.get();

      if (documentSnapshot.exists) {
        setModalScreenName('EnterPassword');
      } else {
        setModalScreenName('FinishSigningUp');
      }
      setIsLoading(false);
      setCanHideModal(false);
    } catch (error) {
      console.error('Error checking document existence:', error);
      setIsLoading(false);
    }
  };

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
              onPress={() => handleContinuePress(emailText)}
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
