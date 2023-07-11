import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const customTextInputStyles = StyleSheet.create({
  input: {
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'none',
  },
  inputTitleText: {
    color: Colors.gray700,
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  mainContainer: {},
  errorMessage: {
    paddingLeft: 20,
    fontSize: 10,
    color: Colors.invalidRed,
  },
});

export default customTextInputStyles;
