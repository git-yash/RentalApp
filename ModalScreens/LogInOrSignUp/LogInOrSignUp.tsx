import React, {useState} from 'react';
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

const LogInOrSignUp = (props: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const [emailText, setEmailText] = useState('yash@great.com');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [modalScreenName, setModalScreenName] = useState<
    'LogInOrSignUp' | 'FinishSigningUp' | 'EnterPassword'
  >('EnterPassword');
  const [canHideModal, setCanHideModal] = useState(false);

  const isDisabled: boolean = emailText.length === 0 || !isValidEmail;

  const handleEmailOnChange = (text: string): void => {
    setEmailText(text);
    setIsValidEmail(Util.isValidEmail(text.trim()));
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
        if (modalScreenName === 'FinishSigningUp' && !canHideModal) {
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
              isValidInput={isValidEmail}
              placeholderText={'Enter email...'}
              errorMessage={'Please enter a valid email!'}
              value={emailText}
              onChange={handleEmailOnChange}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              maxCharacterLength={320}
              textContentType={'emailAddress'}
            />
            <ContinuePressable
              onPress={() => setModalScreenName('FinishSigningUp')}
              isDisabled={isDisabled}
              text={'Continue'}
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
            setModalScreenName={setModalScreenName}
            setIsModalVisible={props.setIsModalVisible}
          />
        </View>
      )}
    </Modal>
  );
};

export default LogInOrSignUp;
