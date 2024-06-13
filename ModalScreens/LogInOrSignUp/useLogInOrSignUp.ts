import {useEffect, useState} from 'react';
import Util from '../../Util';
import LogInOrSignUpService from './LogInOrSignUp.service';
import useUserStore from '../../store/userStore';

const useLogInOrSignUp = () => {
  const [emailText, setEmailText] = useState('yash1@gmail.com');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [modalScreenName, setModalScreenName] = useState<
    'LogInOrSignUp' | 'FinishSigningUp' | 'EnterPassword'
  >('LogInOrSignUp');
  const [canHideModal, setCanHideModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const logInOrSignUpService = new LogInOrSignUpService();
  const {user} = useUserStore();

  const isDisabled: boolean =
    emailText.length === 0 || emailError !== undefined;

  useEffect(() => {
    if (!user) {
      return;
    }

    setModalScreenName('LogInOrSignUp');
    setEmailText('yash1@gmail.com');
    setCanHideModal(true);
  }, [user]);

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

  const handleContinuePress = async (email: string) => {
    setIsLoading(true);
    try {
      await logInOrSignUpService.handleDocumentExists(
        email,
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
    user,
    setModalScreenName,
    handleContinuePress,
  };
};

export default useLogInOrSignUp;
