import React from 'react';
import {Text, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import CustomSecureTextInput from '../../components/CustomSecureTextInput/CustomSecureTextInput';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import enterPasswordStyles from './EnterPassword.style';
import useEnterPassword from './useEnterPassword';
import {useNavigation, useRoute} from '@react-navigation/native';

const EnterPassword = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params;
  const {passwordText, setPasswordText, isLoading, errorMessage, signIn} =
    useEnterPassword(email);

  return (
    <View style={exploreStyles.modalView}>
      <View style={{paddingTop: 15}}>
        <View style={enterPasswordStyles.forgotPasswordContainer}>
          <Text style={enterPasswordStyles.titleText}>
            Welcome to Rentality
          </Text>
        </View>
        <CustomSecureTextInput
          inputTitle={'Password'}
          placeholderText={'Enter password...'}
          value={passwordText}
          onChange={setPasswordText}
          error={errorMessage}
        />
        <ContinuePressable
          onPress={async () => {
            await signIn(navigation);
          }}
          isDisabled={passwordText.length < 1}
          text={'Continue'}
          isLoading={isLoading}
        />
        <View style={enterPasswordStyles.forgotPasswordContainer}>
          <Text style={enterPasswordStyles.forgotPasswordText}>
            Forgot Password
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EnterPassword;
