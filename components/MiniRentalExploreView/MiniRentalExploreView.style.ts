import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const miniRentalExploreViewStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    margin: 10,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 5,
    width: Dimensions.get('window').width * 0.8,
  },
  image: {
    height: 100,
    width: 100,
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

export default miniRentalExploreViewStyle;
