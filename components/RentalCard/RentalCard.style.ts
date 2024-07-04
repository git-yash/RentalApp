import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const rentalCardStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    margin: 5,
    borderRadius: 15,
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    minHeight: 125,
  },
  image: {
    borderRadius: 15,
    margin: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 5,
  },
  titlePriceContainer: {justifyContent: 'space-between'},
  titleText: {
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  distanceText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: Colors.gray500,
  },
  pricePerHourContainer: {flexDirection: 'row', alignItems: 'center'},
  priceText: {
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
  },
  hourText: {marginLeft: 3, fontFamily: 'Poppins-Regular'},
  ratingLikeContainer: {
    marginTop: 5,
    marginRight: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ratingContainer: {flexDirection: 'row'},
  starIcon: {marginTop: 1, marginRight: 3},
  ratingText: {fontFamily: 'Poppins-Regular'},
  heartButton: {padding: 5},
  heartIcon: {
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});

export default rentalCardStyle;
