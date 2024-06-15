import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import OTPTextView from 'react-native-otp-textinput';
import Colors from '../../assets/Colors';
import {Spinner} from 'native-base';
import useEnterVerificationCode from './useEnterVerificationCode';

const EnterVerificationCode = (props: {
  setModalScreenName: React.Dispatch<
    React.SetStateAction<
      | 'LogInOrSignUp'
      | 'FinishSigningUp'
      | 'EnterPassword'
      | 'EnterVerificationCode'
    >
  >;
  setIsModalVisible: any;
  emailText: string;
  setCanHideModal: any;
}) => {
  const {setCode, isLoading} = useEnterVerificationCode(
    props.emailText,
    props.setCanHideModal,
    props.setIsModalVisible,
  );
  return (
    <View style={exploreStyles.modalView}>
      <View style={logInOrSignUpStyles.headerContainer}>
        <View style={logInOrSignUpStyles.iconContainer}>
          <TouchableOpacity
            style={logInOrSignUpStyles.dismissPressable}
            onPress={() => {
              props.setModalScreenName('FinishSigningUp');
              props.setCanHideModal(true);
            }}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} />
          </TouchableOpacity>
        </View>
        <View style={logInOrSignUpStyles.textContainer}>
          <Text style={logInOrSignUpStyles.text}>Verification Code</Text>
        </View>
      </View>
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
        <Text
          style={{
            textAlign: 'center',
            marginTop: 15,
            fontFamily: 'Poppins-Regular',
          }}>
          A verification code was just sent to your email. Make sure to also
          check your spam folder!
        </Text>
        {isLoading && <Spinner />}
      </View>
    </View>
  );
};

export default EnterVerificationCode;
