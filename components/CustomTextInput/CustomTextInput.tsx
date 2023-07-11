import React, {useState} from 'react';
import {Box, Input, Text} from 'native-base';
import customTextInputStyles from './CustomTextInput.style';
import Colors from '../../assets/Colors';
import {KeyboardTypeOptions} from 'react-native';

const CustomTextInput = (props: {
  inputTitle: string;
  placeholderText: string;
  isValidInput: boolean;
  value: string;
  onChange: any;
  errorMessage: string;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
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
      <Text style={customTextInputStyles.inputTitleText}>
        {props.inputTitle}
      </Text>
      <Box
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 10,
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
          w="90%"
          maxLength={props.maxCharacterLength}
          style={customTextInputStyles.input}
          isInvalid={!props.isValidInput}
        />
      </Box>
      {!props.isValidInput && (
        <Text style={customTextInputStyles.errorMessage}>
          {props.errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default CustomTextInput;
