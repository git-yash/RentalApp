import {Box, Input, Text} from 'native-base';
import React, {useState} from 'react';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDollarSign} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';
import {ViewStyle} from 'react-native';

const MoneyTextInput = (props: {
  inputTitle?: string;
  placeholderText?: string;
  value: string;
  onChange: any;
  maxLength: number;
  error?: string | undefined;
  style?: ViewStyle;
  inputRightElement?: JSX.Element | JSX.Element[] | undefined;
}) => {
  const [inputTextColor, setInputTextColor] = useState(Colors.gray800);

  return (
    <Box style={props.style}>
      {props.inputTitle && (
        <Text style={customTextInputStyles.inputTitleText}>
          {props.inputTitle}
        </Text>
      )}
      <Box
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: props.error ? 0 : 10,
          marginLeft: 15,
          marginRight: 10,
        }}>
        <Input
          InputLeftElement={
            <FontAwesomeIcon
              icon={faDollarSign}
              size={17}
              style={{marginLeft: 10}}
              color={Colors.gray600}
            />
          }
          InputRightElement={props.inputRightElement}
          placeholder={props.placeholderText}
          placeholderTextColor={Colors.gray600}
          invalidOutlineColor={Colors.invalidRed}
          color={inputTextColor}
          onChangeText={props.onChange}
          value={props.value}
          autoCapitalize={'none'}
          keyboardType={'number-pad'}
          textContentType={'none'}
          maxLength={props.maxLength}
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

export default MoneyTextInput;
