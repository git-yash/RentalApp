import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const rentalDetailsStyle = StyleSheet.create({
  cityText: {
    fontFamily: 'Poppins-Regular',
    paddingTop: 10,
    color: Colors.gray500,
    paddingLeft: 10,
  },
  mainContainer: {paddingLeft: 10, paddingTop: 10, paddingRight: 10},
  titleText: {fontFamily: 'Poppins-SemiBold', fontSize: 27, paddingLeft: 10},
  reviewContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  starIcon: {marginTop: 1},
  ratingText: {
    paddingLeft: 5,
    fontFamily: 'Poppins-SemiBold',
    paddingRight: 3,
  },
  reviewLengthText: {fontFamily: 'Poppins-SemiBold', color: Colors.gray500},
  descriptionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  subtitleText: {
    paddingTop: 15,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  subtitleDescriptionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.gray600,
  },
  readMoreText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.green,
  },
  deliveryText: {
    paddingTop: 15,
    paddingBottom: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  addressText: {
    color: Colors.green,
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
  mapPressable: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: 'black',
  },
  mapView: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default rentalDetailsStyle;
