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
  bottomMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: Colors.gray700,
    marginLeft: 20,
    marginBottom: 15,
  },
  invalidBottomMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: Colors.invalidRed,
    marginLeft: 20,
    marginBottom: 15,
  },
});

export default customDateTimePickerStyles;
