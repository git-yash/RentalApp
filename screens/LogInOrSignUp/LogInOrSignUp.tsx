import React from 'react';
import {View} from 'react-native';
import exploreStyles from '../Explore/Explore.style';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import OrDivider from '../../components/OrDivider/OrDivider';
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import useLogInOrSignUp from './useLogInOrSignUp';
import {useNavigation} from '@react-navigation/native';

const LogInOrSignUp = () => {
  const navigation = useNavigation();
  const {
    emailText,
    emailError,
    isLoading,
    handleEmailOnChange,
    isDisabled,
    handleContinuePress,
    // setCanHideModal,
  } = useLogInOrSignUp();

  return (
    <View style={exploreStyles.modalView}>
      <KeyboardAwareScrollView style={{paddingTop: 15}}>
        <CustomTextInput
          inputTitle={'Email'}
          placeholderText={'Enter email...'}
          errorMessage={emailError}
          value={emailText}
          onChange={text => handleEmailOnChange(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          maxCharacterLength={320}
          textContentType={'emailAddress'}
        />
        <ContinuePressable
          onPress={() => {
            void handleContinuePress(emailText, navigation);
          }}
          isDisabled={isDisabled}
          text={'Continue'}
          isLoading={isLoading}
        />
        <OrDivider />
        <SocialLoginButton socialName={'Apple'} />
        <SocialLoginButton socialName={'Google'} />
        <SocialLoginButton socialName={'Facebook'} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LogInOrSignUp;
