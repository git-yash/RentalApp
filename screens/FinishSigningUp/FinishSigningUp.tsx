import React from 'react';
import {Text, View} from 'react-native';
import exploreStyles from '../Explore/Explore.style';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomSecurePasswordCheckerTextInput from '../../components/CustomSecurePasswordCheckerTextInput/CustomSecurePasswordCheckerTextInput';
import CustomDateTimePicker from '../../components/CustomDateTimePicker/CustomDateTimePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import useFinishSigningUp from './useFinishSigningUp';
import finishSigningUpStyle from './FinishSigningUp.style';
import {useNavigation, useRoute} from '@react-navigation/native';

const FinishSigningUp = (props: {
  // email: string;
  // setModalScreenName: React.Dispatch<
  //   React.SetStateAction<
  //     | 'LogInOrSignUp'
  //     | 'FinishSigningUp'
  //     | 'EnterPassword'
  //     | 'EnterVerificationCode'
  //   >
  // >;
  // setIsModalVisible: any;
  // setCanHideModal: any;
  // emailText: string;
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params;

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
  } = useFinishSigningUp(email, navigation);

  return (
    <View style={exploreStyles.modalView}>
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
          maxDate={new Date()}
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
