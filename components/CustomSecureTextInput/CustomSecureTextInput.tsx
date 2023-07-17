import {Box, Input, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';

const CustomSecureTextInput = (props: {
  inputTitle: string;
  placeholderText: string;
  value: string;
  onChange: any;
  error: string | undefined;
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
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 10,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Input
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable
              style={{paddingRight: 10}}
              onPress={() => setShow(!show)}>
              <FontAwesomeIcon
                style={{color: Colors.green}}
                icon={show ? faEye : faEyeSlash}
                size={25}
              />
            </Pressable>
          }
          placeholder="Enter your password..."
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
          focusOutlineColor={Colors.green}
          borderRadius={10}
          borderWidth={2}
          borderColor={Colors.gray400}
          bgColor={'white'}
          size="md"
          style={customTextInputStyles.input}
          isInvalid={props.error !== undefined}
        />
      </Box>
      {props.error && (
        <Box style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <Text style={customTextInputStyles.errorMessage}>{props.error}</Text>
        </Box>
      )}
    </Box>
  );
};

export default CustomSecureTextInput;
