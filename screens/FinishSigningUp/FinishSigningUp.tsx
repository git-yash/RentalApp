import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import exploreStyles from '../Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomSecurePasswordCheckerTextInput from '../../components/CustomSecureTextInput/CustomSecurePasswordCheckerTextInput';
import Util from '../../Util';
import Colors from '../../assets/Colors';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import CustomDateTimePicker from '../../components/CustomDateTimePicker/CustomDateTimePicker';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FinishSigningUp = (props: {
  email: string;
  setFinishSigningUp: any;
  setIsModalVisible: any;
  setCanHideModal: any;
  emailText: string;
}) => {
  const [firstNameText, setFirstNameText] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [lastNameText, setLastNameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordBorderColor, setPasswordBorderColor] = useState(Colors.green);
  const [birthdate, setDate] = useState(new Date());
  const [isBirthdateValid, setIsDateValid] = useState(true);
  const [emailText, setEmailText] = useState(props.emailText);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailOnChange = (text: string): void => {
    setEmailText(text);
    setIsValidEmail(Util.isValidEmail(text.trim()));
  };

  const setFirstNameTextWithValidation = (newFirstNameText: string) => {
    setFirstNameText(newFirstNameText);
    setNameValidity(newFirstNameText, setIsFirstNameValid);
  };

  const setLastNameTextWithValidation = (newLastNameText: string) => {
    setLastNameText(newLastNameText);
    setNameValidity(newLastNameText, setIsLastNameValid);
  };

  const setBirthDate = (event: DateTimePickerEvent, date: Date) => {
    const {
      nativeEvent: {},
    } = event;

    setDate(date);

    setAgeValidity();
  };

  const handlePasswordTextChange = (text: string) => {
    setIsPasswordValid(Util.isPasswordInvalid(text));
    setPasswordText(text);
    setPasswordBorderColor(
      Util.getPasswordStrengthBorderColor(Util.getPasswordStrength(text)),
    );
  };

  const setNameValidity = (nameText: string, setNameValid: any) => {
    setNameValid(!(nameText.length <= 1));
  };

  const setAgeValidity = () => {
    setIsDateValid(Util.getAge(birthdate) >= 18);
  };

  const setInputValidity = () => {
    setNameValidity(firstNameText, setIsFirstNameValid);
    setNameValidity(lastNameText, setIsLastNameValid);
    setIsValidEmail(Util.isValidEmail(emailText));
    setAgeValidity();
    setIsPasswordValid(Util.isPasswordInvalid(passwordText));
  };

  const handleAgreeAndContinue = () => {
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isBirthdateValid &&
      isPasswordValid
    ) {
      props.setCanHideModal(true);
      props.setIsModalVisible(false);
      ReactNativeHapticFeedback.trigger('notificationSuccess', Util.options);
    } else {
      setInputValidity();
      ReactNativeHapticFeedback.trigger('notificationError', Util.options);
    }
  };

  return (
    <View style={exploreStyles.modalView}>
      <View style={logInOrSignUpStyles.headerContainer}>
        <View style={logInOrSignUpStyles.iconContainer}>
          <Pressable
            style={logInOrSignUpStyles.dismissPressable}
            onPress={() => {
              props.setFinishSigningUp(false);
            }}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} />
          </Pressable>
        </View>
        <View style={logInOrSignUpStyles.textContainer}>
          <Text style={logInOrSignUpStyles.text}>Finish Signing Up</Text>
        </View>
      </View>
      <KeyboardAwareScrollView style={{paddingTop: 15}} extraScrollHeight={60}>
        <CustomTextInput
          inputTitle={'First Name'}
          placeholderText={'Enter first name...'}
          isValidInput={isFirstNameValid}
          value={firstNameText}
          onChange={setFirstNameTextWithValidation}
          errorMessage={'Please enter valid first name!'}
          autoCapitalize={'words'}
          keyboardType={'default'}
          maxCharacterLength={30}
          textContentType={'name'}
        />
        <CustomTextInput
          inputTitle={'Last Name'}
          placeholderText={'Enter last name...'}
          isValidInput={isLastNameValid}
          value={lastNameText}
          onChange={setLastNameTextWithValidation}
          errorMessage={'Please enter valid last name!'}
          autoCapitalize={'words'}
          keyboardType={'default'}
          maxCharacterLength={30}
          textContentType={'name'}
        />
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
        <CustomDateTimePicker
          mode={'date'}
          onChange={setBirthDate}
          value={birthdate}
          bottomMessage={'You must be 18 years or older to sign up.'}
          isValid={isBirthdateValid}
        />
        <CustomSecurePasswordCheckerTextInput
          inputTitle={'Password'}
          placeholderText={'Enter password...'}
          value={passwordText}
          onChange={handlePasswordTextChange}
          errorMessage={'Password is required and cannot be weak!'}
          isValid={isPasswordValid}
          borderColor={passwordBorderColor}
        />
        <View>
          <Text
            style={{fontFamily: 'Poppins-Regular', margin: 15, fontSize: 12}}>
            By pressing Agree and Continue, you agree to Rental App's Terms and
            Conditions and acknowledge the Privacy Policy.
          </Text>
        </View>
        <Pressable
          onPress={handleAgreeAndContinue}
          disabled={false}
          style={logInOrSignUpStyles.continuePressableEnabled}>
          <Text style={logInOrSignUpStyles.continueText}>
            Agree and Continue
          </Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FinishSigningUp;
