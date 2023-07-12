import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import exploreStyles from '../Explore/Explore.style';
import logInOrSignUpStyles from '../LogInOrSignUp/LogInOrSignUp.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomSecurePasswordCheckerTextInput from '../../components/CustomSecureTextInput/CustomSecurePasswordCheckerTextInput';
import Util from '../../Util';
import Colors from '../../assets/Colors';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import customTextInputStyles from '../../components/CustomTextInput/CustomTextInput.style';
import CustomDateTimePicker from '../../components/CustomDateTimePicker/CustomDateTimePicker';

const FinishSigningUp = (props: {email: string; setFinishSigningUp: any}) => {
  const [firstNameText, setFirstNameText] = useState('');
  const [lastNameText, setLastNameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordBorderColor, setPasswordBorderColor] = useState(Colors.green);
  const [birthdate, setDate] = useState(new Date());

  const setBirthDate = (event: DateTimePickerEvent, date: Date) => {
    const {
      type,
      nativeEvent: {timestamp},
    } = event;

    setDate(date);
  };

  const handlePasswordTextChange = (text: string) => {
    setIsPasswordValid(Util.isPasswordValid(text));
    setPasswordText(text);
    setPasswordBorderColor(
      Util.getPasswordStrengthBorderColor(Util.getPasswordStrength(text)),
    );
  };

  return (
    <View style={exploreStyles.modalView}>
      <View style={logInOrSignUpStyles.headerContainer}>
        <View style={logInOrSignUpStyles.iconContainer}>
          <Pressable
            style={logInOrSignUpStyles.dismissPressable}
            onPress={() => {
              props.setFinishSigningUp(false);
            }}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} />
          </Pressable>
        </View>
        <View style={logInOrSignUpStyles.textContainer}>
          <Text style={logInOrSignUpStyles.text}>Finish signing up</Text>
        </View>
      </View>
      <ScrollView style={{paddingTop: 15}}>
        <CustomTextInput
          inputTitle={'First Name'}
          placeholderText={'Enter first name...'}
          isValidInput={true}
          value={firstNameText}
          onChange={setFirstNameText}
          errorMessage={'Please enter valid first name!'}
          autoCapitalize={'words'}
          keyboardType={'default'}
          maxCharacterLength={30}
          textContentType={'name'}
        />
        <CustomTextInput
          inputTitle={'Last Name'}
          placeholderText={'Enter last name...'}
          isValidInput={true}
          value={lastNameText}
          onChange={setLastNameText}
          errorMessage={'Please enter valid last name!'}
          autoCapitalize={'words'}
          keyboardType={'default'}
          maxCharacterLength={30}
          textContentType={'name'}
        />
        <CustomDateTimePicker
          mode={'date'}
          onChange={setBirthDate}
          value={birthdate}
        />
        <CustomSecurePasswordCheckerTextInput
          inputTitle={'Password'}
          placeholderText={'Enter password...'}
          value={passwordText}
          onChange={handlePasswordTextChange}
          errorMessage={'Password is required and cannot be weak!'}
          isValid={isPasswordValid}
          borderColor={passwordBorderColor}
        />
        <Pressable
          disabled={false}
          style={logInOrSignUpStyles.continuePressableEnabled}>
          <Text style={logInOrSignUpStyles.continueText}>
            Agree and Continue
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default FinishSigningUp;
