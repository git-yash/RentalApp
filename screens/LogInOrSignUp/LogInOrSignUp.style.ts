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
    margin: 10,
  },
  dismissPressable: {
    width: 50,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 50,
  },
  phoneInfoText: {
    color: Colors.gray700,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingLeft: 20,
  },
  continuePressableEnabled: {
    backgroundColor: Colors.green,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    margin: 15,
  },
  continuePressableDisabled: {
    backgroundColor: Colors.gray400,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    margin: 15,
  },
  continueText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
});

export default logInOrSignUpStyles;
