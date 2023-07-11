import {Box, Input, Text, Pressable} from 'native-base';
import React, {useState} from 'react';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import Util from '../../Util';

const CustomSecureTextInput = (props: {
  inputTitle: string;
  placeholderText: string;
  value: string;
  onChange: any;
  errorMessage: string;
  isValid: boolean;
  borderColor: string;
}) => {
  const [inputTextColor, setInputTextColor] = useState(Colors.gray800);
  const [show, setShow] = useState(false);

  function onBlurInput() {
    setInputTextColor(Colors.gray800);
  }

  function onFocusInput() {
    setInputTextColor(Colors.green);
  }

  return (
    <Box>
      <Text style={customTextInputStyles.inputTitleText}>
        {props.inputTitle}
      </Text>
      <Box
        style={{
          backgroundColor: Util.getPasswordStrengthBorderColor(
            Util.getPasswordStrength(props.value),
          ),
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 10,
        }}>
        <Input
          w={{
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable
              style={{paddingRight: 10}}
              onPress={() => setShow(!show)}>
              <FontAwesomeIcon
                style={{color: Colors.green}}
                icon={show ? faEye : faEyeSlash}
              />
            </Pressable>
          }
          placeholder="Enter your password"
          placeholderTextColor={Colors.gray800}
          invalidOutlineColor={Colors.invalidRed}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          color={inputTextColor}
          onChangeText={props.onChange}
          value={props.value}
          autoCapitalize={'none'}
          keyboardType={'default'}
          textContentType={'password'}
          focusOutlineColor={props.borderColor}
          borderRadius={10}
          borderWidth={3}
          borderColor={Colors.gray400}
          bgColor={'white'}
          size="md"
          style={customTextInputStyles.input}
        />
        <Box
          style={{
            backgroundColor: Util.getPasswordStrengthBorderColor(
              Util.getPasswordStrength(props.value),
            ),
            alignSelf: 'flex-start',
            borderRadius: 5,
            marginLeft: 5,
            marginBottom: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 10,
              fontWeight: '600',
            }}>
            Password Strength: {Util.getPasswordStrength(props.value)}
          </Text>
        </Box>
      </Box>
      {props.isValid && (
        <Text style={customTextInputStyles.errorMessage}>
          {props.errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default CustomSecureTextInput;
