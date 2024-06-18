import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const enterVerificationCodeStyle = StyleSheet.create({
  errorMessage: {
    fontFamily: 'Poppins-Regular',
    color: Colors.invalidRed,
    textAlign: 'center',
    marginTop: 10,
  },
  message: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    marginRight: 10,
  },
});

export default enterVerificationCodeStyle;
