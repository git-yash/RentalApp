import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const logInOrSignUpStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    borderBottomColor: Colors.borderGrey,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  textContainer: {
    flex: 1,
    paddingRight: 30,
  },
});

export default logInOrSignUpStyles;
