import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomSecurePasswordCheckerTextInput from '../../components/CustomSecurePasswordCheckerTextInput/CustomSecurePasswordCheckerTextInput';
import Util from '../../Util';
import Colors from '../../assets/Colors';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import CustomDateTimePicker from '../../components/CustomDateTimePicker/CustomDateTimePicker';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const FinishSigningUp = (props: {
  email: string;
  setModalScreenName: any;
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

  const [isLoading, setIsLoading] = useState(false);

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

  const setNameValidity = (nameText: string, setNameValid: any): boolean => {
    const isValid = nameText.length > 1;
    setNameValid(isValid);
    return isValid;
  };

  const setAgeValidity = (): boolean => {
    const isValidAge = Util.getAge(birthdate) >= 1;
    setIsDateValid(isValidAge);
    return isValidAge;
  };

  const setValidity = () => {
    const isValidEmail = Util.isValidEmail(emailText);
    setIsValidEmail(isValidEmail);
    const isValidPassword = !Util.isPasswordInvalid(passwordText);
    setIsPasswordValid(!isValidPassword);

    const isValidFirstName = setNameValidity(
      firstNameText,
      setIsFirstNameValid,
    );
    const isValidLastName = setNameValidity(lastNameText, setIsLastNameValid);
    const isValidAge = setAgeValidity();

    return (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidAge &&
      isValidPassword
    );
  };

  const handleAgreeAndContinue = () => {
    const isFormValid = setValidity();
    setIsLoading(true);

    if (isFormValid) {
      // valid
      auth()
        .createUserWithEmailAndPassword(emailText, passwordText)
        .then(() => {
          props.setCanHideModal(true);
          props.setIsModalVisible(false);
          ReactNativeHapticFeedback.trigger(
            'notificationSuccess',
            Util.options,
          );
          firestore()
            .collection('users')
            .doc(emailText)
            .set({
              firstName: firstNameText,
              lastName: lastNameText,
              birthdate: birthdate,
            })
            .then(() => setIsLoading(false));
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            setIsLoading(false);
          }
          console.error(error);
          setIsLoading(false);
        });
    } else {
      ReactNativeHapticFeedback.trigger('notificationError', Util.options);
      setIsLoading(false);
      // invalid
    }
  };

  return (
    <View style={exploreStyles.modalView}>
      <View style={logInOrSignUpStyles.headerContainer}>
        <View style={logInOrSignUpStyles.iconContainer}>
          <Pressable
            style={logInOrSignUpStyles.dismissPressable}
            onPress={() => {
              props.setModalScreenName('LogInOrSignUp');
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
