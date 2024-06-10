import React, {useState} from 'react';
import {Box, Input, Text} from 'native-base';
import customTextInputStyles from './CustomTextInput.style';
import Colors from '../../assets/Colors';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

const CustomTextInput = (props: {
  inputTitle: string;
  placeholderText: string;
  value: string;
  onChange: any;
  errorMessage: string | undefined;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  onKeyPress?:
    | ((e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void)
    | undefined;
  maxCharacterLength: number;
  textContentType:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined;
}) => {
  const [inputTextColor, setInputTextColor] = useState(Colors.gray800);

  function onBlurInput() {
    setInputTextColor(Colors.gray800);
  }

  function onFocusInput() {
    setInputTextColor(Colors.green);
  }

  return (
    <Box style={customTextInputStyles.mainContainer}>
      <Box style={{flexDirection: 'row'}}>
        <Text style={customTextInputStyles.inputTitleText}>
          {props.inputTitle}
        </Text>
      </Box>
      <Box
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: props.errorMessage ? 0 : 10,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Input
          placeholderTextColor={Colors.gray800}
          invalidOutlineColor={Colors.invalidRed}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          color={inputTextColor}
          onChangeText={props.onChange}
          value={props.value}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
          textContentType={props.textContentType}
          focusOutlineColor={Colors.green}
          borderRadius={10}
          borderWidth={2}
          borderColor={Colors.gray400}
          bgColor={'white'}
          size="md"
          placeholder={props.placeholderText}
          maxLength={props.maxCharacterLength}
          style={customTextInputStyles.input}
          isInvalid={props.errorMessage !== undefined}
          onKeyPress={props.onKeyPress}
        />
      </Box>
      {props.errorMessage && (
        <Text style={customTextInputStyles.errorMessage}>
          {props.errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default CustomTextInput;
