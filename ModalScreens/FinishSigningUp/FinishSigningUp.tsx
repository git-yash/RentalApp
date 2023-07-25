import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
  const [firstNameError, setFirstNameError] = useState<string | undefined>(
    undefined,
  );
  const [lastNameText, setLastNameText] = useState('');
  const [lastNameError, setLastNameError] = useState<string | undefined>(
    undefined,
  );
  const [passwordText, setPasswordText] = useState('');
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined,
  );
  const [passwordBorderColor, setPasswordBorderColor] = useState(Colors.green);
  const [birthdate, setDate] = useState(new Date());
  const [birthdateError, setBirthdateError] = useState<string | undefined>(
    undefined,
  );
  const [emailText, setEmailText] = useState(props.emailText);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(false);

  const handleEmailOnChange = (text: string): void => {
    setEmailText(text);
    setEmailError(
      Util.isValidEmail(emailText.trim())
        ? undefined
        : 'Please enter a valid email!',
    );
  };

  const setFirstNameTextWithValidation = (newFirstNameText: string) => {
    setFirstNameText(newFirstNameText);
    setNameValidity(newFirstNameText, setFirstNameError);
  };

  const setLastNameTextWithValidation = (newLastNameText: string) => {
    setLastNameText(newLastNameText);
    setNameValidity(newLastNameText, setLastNameError);
  };

  const setBirthDate = (event: DateTimePickerEvent, date: Date) => {
    const {
      nativeEvent: {},
    } = event;

    setDate(date);

    setAgeValidity();
  };

  const handlePasswordTextChange = (text: string) => {
    setPasswordError(
      !Util.isPasswordInvalid(text)
        ? undefined
        : 'Password is required and cannot be weak!',
    );
    setPasswordText(text);
    setPasswordBorderColor(
      Util.getPasswordStrengthBorderColor(Util.getPasswordStrength(text)),
    );
  };

  const setNameValidity = (nameText: string, setNameError: any): boolean => {
    const isValid = nameText.length > 1;
    setNameError(isValid ? undefined : 'Please enter a valid name!');
    return isValid;
  };

  const setAgeValidity = (): boolean => {
    const isValidAge = Util.getAge(birthdate) >= 18;
    setBirthdateError(
      isValidAge ? undefined : 'You must be 18 years or older to sign up',
    );
    return isValidAge;
  };

  const setValidity = () => {
    const isValidEmail = Util.isValidEmail(emailText);
    setEmailError(isValidEmail ? undefined : 'Please enter a valid email!');
    const isValidPassword = !Util.isPasswordInvalid(passwordText);
    setPasswordError(
      isValidPassword ? undefined : 'Password is required and cannot be weak!',
    );

    const isValidFirstName = setNameValidity(firstNameText, setFirstNameError);
    const isValidLastName = setNameValidity(lastNameText, setLastNameError);
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
          auth()
            .currentUser?.updateProfile({
              displayName: firstNameText + ' ' + lastNameText,
            })
            .then(() => {
              firestore()
                .collection('users')
                .doc(emailText)
                .set({
                  birthdate: birthdate,
                  dateJoined: Date.now(),
                })
                .then(() => {
                  props.setCanHideModal(true);
                  props.setIsModalVisible(false);
                  ReactNativeHapticFeedback.trigger(
                    'notificationSuccess',
                    Util.options,
                  );
                  setIsLoading(false);
                });
            });
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            setIsLoading(false);
          }
          if (error.code === 'auth/email-already-in-use') {
            setEmailError('This email is already in use, try logging in.');
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
