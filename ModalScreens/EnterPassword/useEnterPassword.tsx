import React, {useState} from 'react';

const useEnterPassword = () => {
  const [passwordText, setPasswordText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  return {
    passwordText,
    setPasswordText,
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
  };
};

export default useEnterPassword;
