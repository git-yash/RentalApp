import React from 'react';
import CustomDateTimePicker from '../CustomDateTimePicker/CustomDateTimePicker';
import {View} from 'react-native';

const CustomDateAndTimeInput = (props: {
  minuteInterval: number;
  setDateTime: (date?: Date) => void;
  dateTime?: Date;
  dateTitle: string;
  timeTitle: string;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <CustomDateTimePicker
        mode={'date'}
        onChange={(event, date) => props.setDateTime(date)}
        minDate={new Date()}
        value={props.dateTime}
        title={props.dateTitle}
      />
      <CustomDateTimePicker
        mode={'time'}
        onChange={(event, date) => {
          props.setDateTime(date);
        }}
        value={props.dateTime}
        title={props.timeTitle}
      />
    </View>
  );
};

export default CustomDateAndTimeInput;
