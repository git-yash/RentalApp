import React, {useState} from 'react';
import Colors from '../../assets/Colors';
import {Box, Text, TextArea} from 'native-base';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';

const CustomTextArea = (props: {
  inputTitle: string;
  placeholderText: string;
  value: string;
  onChange: any;
  errorMessage: string | undefined;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  maxCharacterLength: number;
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
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 10,
            fontSize: 12,
            color: Colors.gray700,
          }}>
          ({props.value.length}/{props.maxCharacterLength} characters)
        </Text>
      </Box>
      <Box
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 10,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <TextArea
          placeholderTextColor={Colors.gray800}
          invalidOutlineColor={Colors.invalidRed}
          onBlur={onBlurInput}
          h={20}
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
          autoCompleteType={undefined}
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

export default CustomTextArea;
