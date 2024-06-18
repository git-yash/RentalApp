import React from 'react';
import {Text, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import OTPTextView from 'react-native-otp-textinput';
import Colors from '../../assets/Colors';
import {Spinner} from 'native-base';
import useEnterVerificationCode from './useEnterVerificationCode';
import enterVerificationCodeStyle from './EnterVerificationCode.style';
import {useNavigation, useRoute} from '@react-navigation/native';

const EnterVerificationCode = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {emailText} = route.params;
  const {setCode, isLoading, errorMessage} = useEnterVerificationCode(
    emailText,
    navigation,
  );
  return (
    <View style={exploreStyles.modalView}>
      <View style={{paddingTop: 15}}>
        <OTPTextView
          inputCellLength={1}
          inputCount={6}
          tintColor={Colors.green}
          keyboardType={'number-pad'}
          handleTextChange={text => setCode(text)}
          autoFocus={true}
          containerStyle={{
            justifyContent: 'center',
          }}
        />
        {errorMessage && (
          <Text style={enterVerificationCodeStyle.errorMessage}>
            Invalid Code
          </Text>
        )}
        <Text style={enterVerificationCodeStyle.message}>
          A verification code was just sent to your email. Make sure to also
          check your spam folder!
        </Text>
        {isLoading && <Spinner />}
      </View>
    </View>
  );
};

export default EnterVerificationCode;
