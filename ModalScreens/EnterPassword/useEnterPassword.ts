import {useState} from 'react';
import EnterPasswordService from './EnterPassword.service';
import useUserStore from '../../store/userStore';
import {getCurrentUser} from 'aws-amplify/auth';

const useEnterPassword = (
  emailText: string,
  setIsModalVisible: any,
  setCanHideModal: any,
) => {
  const [passwordText, setPasswordText] = useState('Yoshi@05');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const enterPasswordService = new EnterPasswordService();
  const userStore = useUserStore();

  const signIn = async () => {
    await enterPasswordService
      .handleSignIn(
        {username: emailText, password: passwordText},
        setCanHideModal,
        setIsModalVisible,
        setIsLoading,
        setErrorMessage,
      )
      .then(async user => {
        userStore.setUser(user);
        if (user) {
          await getCurrentUser()
            .then(authUser => {
              return userStore.setAuthUser(authUser);
            })
            .catch(e => {
              console.error(e);
            });
        }
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
