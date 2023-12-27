import React from 'react';
import {Text, View} from 'react-native';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Colors from '../../assets/Colors';
import customDateTimePickerStyles from './CustomDateTimePicker.style';

const CustomDateTimePicker = (props: {
  mode: any;
  onChange?: (event: DateTimePickerEvent, date?: Date) => void;
  value?: Date;
  title?: string;
  minDate?: Date;
  maxDate?: Date;
  isValid?: boolean;
  bottomMessage?: string | undefined;
}) => {
  return (
    <View>
      <Text style={customDateTimePickerStyles.inputTitleText}>
        {props.title ? props.title : 'Birthdate'}
      </Text>
      <RNDateTimePicker
        value={props.value || new Date()}
        mode={props.mode}
        minuteInterval={15}
        accentColor={Colors.green}
        maximumDate={props.maxDate}
        minimumDate={props.minDate ?? new Date(1900, 0, 1)}
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
