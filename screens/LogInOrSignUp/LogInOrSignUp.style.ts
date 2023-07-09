import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const logInOrSignUpStyles = StyleSheet.create({
  headerContainer: {
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
  phoneInfoText: {
    color: Colors.gray700,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingLeft: 20,
  },
  continueButtonContainer: {
    backgroundColor: Colors.green,
    borderRadius: 10,
    margin: 15,
  },
  continuePressable: {
    margin: 12,
  },
  continueText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
});

export default logInOrSignUpStyles;
