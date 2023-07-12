import {StyleSheet} from 'react-native';
import Util from '../../Util';
import Colors from '../../assets/Colors';

const customSecurePasswordCheckerTextInputStyles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
  },
  eyePressable: {width: '20%', alignItems: 'flex-end', paddingRight: 5},
  checkerContainer: {
    borderRadius: 5,
    width: '100%',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkerText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 5,
  },
  infoPressable: {width: 30, height: 30},
  infoIcon: {alignContent: 'center', marginTop: 3},
  modalView: {
    backgroundColor: 'white',
    width: 300,
    height: 400,
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: Colors.green,
  },
  infoModalHeaderContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderGrey,
    marginBottom: 15,
  },
  dismissPressable: {width: 50, height: 30, margin: 10},
  infoTitle: {
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
  infoSubtitle: {
    marginLeft: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: '500',
  },
  infoText: {
    marginLeft: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default customSecurePasswordCheckerTextInputStyles;
