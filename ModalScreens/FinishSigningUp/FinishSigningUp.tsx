import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomSecurePasswordCheckerTextInput from '../../components/CustomSecurePasswordCheckerTextInput/CustomSecurePasswordCheckerTextInput';
import CustomDateTimePicker from '../../components/CustomDateTimePicker/CustomDateTimePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import useFinishSigningUp from './useFinishSigningUp';
import finishSigningUpStyle from './FinishSigningUp.style';

const FinishSigningUp = (props: {
  email: string;
  setModalScreenName: any;
  setIsModalVisible: any;
  setCanHideModal: any;
  emailText: string;
}) => {
  const {
    firstNameText,
    firstNameError,
    lastNameText,
    lastNameError,
    passwordText,
    passwordError,
    passwordBorderColor,
    birthdate,
    birthdateError,
    emailText,
    emailError,
    isLoading,
    handleEmailOnChange,
    handlePasswordTextChange,
    setFirstNameTextWithValidation,
    setLastNameTextWithValidation,
    setBirthDate,
    handleAgreeAndContinue,
  } = useFinishSigningUp(
    props.emailText,
    props.setCanHideModal,
    props.setIsModalVisible,
  );

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
          <Text style={logInOrSignUpStyles.text}>Finish Signing Up</Text>
        </View>
      </View>
      <KeyboardAwareScrollView style={{paddingTop: 15}} extraScrollHeight={60}>
        <CustomTextInput
          inputTitle={'First Name'}
          placeholderText={'Enter first name...'}
          value={firstNameText}
          onChange={setFirstNameTextWithValidation}
          errorMessage={firstNameError}
          autoCapitalize={'words'}
          keyboardType={'default'}
          maxCharacterLength={30}
          textContentType={'name'}
        />
        <CustomTextInput
          inputTitle={'Last Name'}
          placeholderText={'Enter last name...'}
          value={lastNameText}
          onChange={setLastNameTextWithValidation}
          errorMessage={lastNameError}
          autoCapitalize={'words'}
          keyboardType={'default'}
          maxCharacterLength={30}
          textContentType={'name'}
        />
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
        <CustomDateTimePicker
          mode={'date'}
          onChange={setBirthDate}
          value={birthdate}
          isValid={birthdateError === undefined}
          bottomMessage={'You must be 18 years or older to sign up.'}
        />
        <CustomSecurePasswordCheckerTextInput
          inputTitle={'Password'}
          placeholderText={'Enter password...'}
          value={passwordText}
          onChange={handlePasswordTextChange}
          errorMessage={passwordError}
          borderColor={passwordBorderColor}
        />
        <View>
          <Text style={finishSigningUpStyle.termsAndConditionTextStyle}>
            By pressing Agree and Continue, you agree to Rental App's Terms and
            Conditions and acknowledge the Privacy Policy.
          </Text>
        </View>
        <ContinuePressable
          onPress={handleAgreeAndContinue}
          isDisabled={false}
          text={'Agree and Continue'}
          isLoading={isLoading}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FinishSigningUp;
