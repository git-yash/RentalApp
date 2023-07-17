import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import exploreStyles from '../../screens/Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomSecureTextInput from '../../components/CustomSecureTextInput/CustomSecureTextInput';
import ContinuePressable from '../../components/ContinuePressable/ContinuePressable';
import enterPasswordStyles from './EnterPassword.style';

const EnterPassword = (props: {setModalScreenName: any}) => {
  const [passwordText, setPasswordText] = useState('');

  return (
    <View style={exploreStyles.modalView}>
      <View style={logInOrSignUpStyles.headerContainer}>
        <View style={logInOrSignUpStyles.iconContainer}>
          <Pressable
            style={logInOrSignUpStyles.dismissPressable}
            onPress={() => props.setModalScreenName('LogInOrSignUp')}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} />
          </Pressable>
        </View>
        <View style={logInOrSignUpStyles.textContainer}>
          <Text style={logInOrSignUpStyles.text}>Log in</Text>
        </View>
      </View>
      <View style={{paddingTop: 15}}>
        <CustomSecureTextInput
          inputTitle={'Password'}
          placeholderText={'Enter password...'}
          value={passwordText}
          onChange={setPasswordText}
        />
        <ContinuePressable
          onPress={() => {}}
          isDisabled={passwordText.length < 1}
          text={'Continue'}
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
