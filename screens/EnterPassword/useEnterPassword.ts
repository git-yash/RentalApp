import {useState} from 'react';
import EnterPasswordService from './EnterPassword.service';
import useUser from '../../hooks/useUser';
import ScreenNameConstants from '../ScreenNameConstants';

const useEnterPassword = (emailText: string) => {
  const [passwordText, setPasswordText] = useState('Yoshi@05');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const enterPasswordService = new EnterPasswordService();
  const {initializeUser} = useUser();

  const signIn = async (navigation: any) => {
    await enterPasswordService
      .handleSignIn({username: emailText, password: passwordText}, setIsLoading)
      .then(async response => {
        if (response.isSignedIn) {
          await initializeUser();
          navigation.navigate(ScreenNameConstants.Tabs);
        }
      })
      .catch(() => {
        setErrorMessage('Sign-in error');
      });
  };

  return {
    passwordText,
    setPasswordText,
    isLoading,
    setIsLoading,
    signIn,
    errorMessage,
    setErrorMessage,
  };
};

export default useEnterPassword;
