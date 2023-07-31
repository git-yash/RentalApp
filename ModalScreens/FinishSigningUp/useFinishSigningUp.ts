import {useState} from 'react';
import Colors from '../../assets/Colors';
import Util from '../../Util';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import FinishSigningUpService from './FinishSigningUp.service';

const useFinishSigningUp = (
  initialEmailText: string,
  setCanHideModal: any,
  setIsModalVisible: any,
) => {
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
  const [emailText, setEmailText] = useState(initialEmailText);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const finishSigningUpService = new FinishSigningUpService();

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
      finishSigningUpService.signUp(
        emailText,
        passwordText,
        firstNameText,
        lastNameText,
        birthdate,
        setCanHideModal,
        setIsModalVisible,
        setIsLoading,
        setEmailError,
      );
    } else {
      ReactNativeHapticFeedback.trigger('notificationError', Util.options);
      setIsLoading(false);
    }
  };

  return {
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
  };
};

export default useFinishSigningUp;
