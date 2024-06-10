import {StyleSheet} from 'react-native';
import Colors from '../../../assets/Colors';

const pricesStyle = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollViewContainer: {paddingLeft: 15, paddingTop: 15, paddingBottom: 10},
  rentalRatesTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  suggestedRatesDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 5,
    color: Colors.gray500,
  },
  applySuggestedRatesText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 5,
    color: Colors.green,
    textDecorationLine: 'underline',
  },
  checkboxWithMoneyTextInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moneyTextInput: {width: 150},
  deliveryTitleView: {flexDirection: 'row', paddingLeft: 15, paddingTop: 15},
  deliveryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.gray800,
  },
  bothText: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 12,
    color: Colors.gray700,
  },
  inputDistanceText: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    paddingRight: 10,
    color: Colors.gray700,
  },
});

export default pricesStyle;
