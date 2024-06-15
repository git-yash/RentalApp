import EnterVerificationCodeService from './EnterVerificationCode.service';
import {useEffect, useState} from 'react';
import useUser from '../../hooks/useUser';
import {autoSignIn, fetchAuthSession} from 'aws-amplify/auth';

const useEnterVerificationCode = (
  emailText: string,
  setCanHideModal: any,
  setIsModalVisible: any,
) => {
  const enterVerificationCodeService = new EnterVerificationCodeService();
  const [code, setCode] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {initializeUser} = useUser();

  useEffect(() => {
    void completeSignUpWithVerificationCode();
  }, [code]);

  const completeSignUpWithVerificationCode = async () => {
    const verificationCodeLength = 6;
    if (code?.length === verificationCodeLength) {
      await enterVerificationCodeService
        .handleSignUpConfirmation(setIsLoading, {
          username: emailText,
          confirmationCode: code,
        })
        .then(async response => {
          if (response.nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN') {
            await autoSignIn()
              .then(async () => {
                await initializeUser();
              })
              .catch(error => console.log('auto:', error));
            await fetchAuthSession({forceRefresh: true}).then(() => {
              setIsLoading(false);
              setCanHideModal(true);
              setIsModalVisible(true);
            });
          }
        });
    }
  };

  return {
    setCode,
    isLoading,
  };
};

export default useEnterVerificationCode;
