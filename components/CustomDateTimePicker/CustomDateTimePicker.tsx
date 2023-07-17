import React from 'react';
import {Text, View} from 'react-native';
import customTextInputStyles from '../CustomTextInput/CustomTextInput.style';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../assets/Colors';
import customDateTimePickerStyles from './CustomDateTimePicker.style';

const CustomDateTimePicker = (props: {
  mode: any;
  onChange: any;
  value: Date;
  isValid: boolean;
  bottomMessage: string | undefined;
}) => {
  return (
    <View>
      <Text style={customDateTimePickerStyles.inputTitleText}>Birthdate</Text>
      <RNDateTimePicker
        value={props.value}
        mode={props.mode}
        accentColor={Colors.green}
        maximumDate={new Date()}
        minimumDate={new Date(1900, 0, 1)}
        style={customDateTimePickerStyles.dateTimePicker}
        onChange={props.onChange}
      />
      {props.bottomMessage && (
        <Text
          style={
            props.isValid
              ? customDateTimePickerStyles.bottomMessage
              : customDateTimePickerStyles.invalidBottomMessage
          }>
          {props.bottomMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomDateTimePicker;