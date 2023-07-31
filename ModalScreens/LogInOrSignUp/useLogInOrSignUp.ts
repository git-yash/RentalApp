import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Util from '../../Util';
import LogInOrSignUpService from './LogInOrSignUp.service';

const useLogInOrSignUp = () => {
  const [emailText, setEmailText] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [modalScreenName, setModalScreenName] = useState<
    'LogInOrSignUp' | 'FinishSigningUp' | 'EnterPassword'
  >('LogInOrSignUp');
  const [canHideModal, setCanHideModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const logInOrSignUpService = new LogInOrSignUpService();

  const isDisabled: boolean =
    emailText.length === 0 || emailError !== undefined;

  useEffect(() => {
    setModalScreenName('LogInOrSignUp');
    setEmailText('yash1@gmail.com');
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
      await logInOrSignUpService.handleDocumentExists(
        documentId,
        setModalScreenName,
      );
      setIsLoading(false);
      setCanHideModal(false);
    } catch (error) {
      console.error('Error checking document existence:', error);
      setIsLoading(false);
    }
  };

  return {
    emailText,
    emailError,
    canHideModal,
    setCanHideModal,
    isLoading,
    setIsLoading,
    handleEmailOnChange,
    isDisabled,
    modalScreenName,
    setModalScreenName,
    handleContinuePress,
  };
};

export default useLogInOrSignUp;
