import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const customDateTimePickerStyles = StyleSheet.create({
  inputTitleText: {
    color: Colors.gray700,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 15,
    paddingLeft: 20,
  },
  dateTimePicker: {alignSelf: 'flex-start', margin: 5, marginBottom: 10},
});

export default customDateTimePickerStyles;
