import {useState} from 'react';
import Util from '../../Util';
import LogInOrSignUpService from './LogInOrSignUp.service';
import useUserStore from '../../store/userStore';
import ScreenNameConstants from '../ScreenNameConstants';

const useLogInOrSignUp = () => {
  const [emailText, setEmailText] = useState('yashmittalshah@gmail.com');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const logInOrSignUpService = new LogInOrSignUpService();
  const {user} = useUserStore();

  const isDisabled: boolean =
    emailText.length === 0 || emailError !== undefined;

  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //
  //   // setModalScreenName('LogInOrSignUp');
  //   setEmailText('yashmittalshah');
  //   // setCanHideModal(true);
  // }, [user]);

  const handleEmailOnChange = (text: string): void => {
    setEmailText(text);
    setEmailError(
      Util.isValidEmail(text.trim())
        ? undefined
        : 'Please enter a valid email!',
    );
  };

  const handleContinuePress = async (email: string, navigation: any) => {
    setIsLoading(true);
    try {
      logInOrSignUpService
        .handleDocumentExists(email)
        .then(doesDocumentExist => {
          navigation.navigate(
            doesDocumentExist
              ? ScreenNameConstants.EnterPassword
              : ScreenNameConstants.FinishSigningUp,
            {email},
          );
          setIsLoading(false);
        });
      // setCanHideModal(false);
    } catch (error) {
      console.error('Error checking document existence:', error);
      setIsLoading(false);
    }
  };

  return {
    emailText,
    emailError,
    isLoading,
    setIsLoading,
    handleEmailOnChange,
    isDisabled,
    user,
    handleContinuePress,
  };
};

export default useLogInOrSignUp;
