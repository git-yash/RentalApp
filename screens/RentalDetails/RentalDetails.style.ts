import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const rentalDetailsStyle = StyleSheet.create({
  cityText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.gray500,
  },
  mainContainer: {paddingLeft: 10, paddingTop: 10, paddingRight: 10},
  titleText: {fontFamily: 'Poppins-SemiBold', fontSize: 27},
  reviewContainer: {flexDirection: 'row', paddingTop: 5},
  starIcon: {marginTop: 1},
  ratingText: {
    paddingLeft: 5,
    fontFamily: 'Poppins-SemiBold',
    paddingRight: 3,
  },
  reviewLengthText: {fontFamily: 'Poppins-SemiBold', color: Colors.gray500},
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
