import {Platform, StyleSheet} from 'react-native';
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
  topRatingAndReviewsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  seeAllPressable: {
    paddingTop: 20,
    alignContent: 'flex-end',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
  ratingsContainer: {flexDirection: 'row'},
  averageRatingTextContainer: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  averageRatingText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
    textAlign: 'center',
  },
  outOfFiveText: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  ratingsChartContainer: {
    flexDirection: 'column',
    flex: 3,
    marginTop: 5,
  },
  ratingProgressBar: {flexDirection: 'row', alignSelf: 'flex-end'},
  ratingProgressBarText: {fontFamily: 'Poppins-Regular', fontSize: 10},
  reviewsContainer: {flexDirection: 'row', alignSelf: 'flex-end'},
  reviewText: {fontFamily: 'Poppins-Regular'},
  reviewConatiner: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '95%',
  },
  topReviewContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  reviewTitle: {fontFamily: 'Poppins-SemiBold', fontSize: 15},
  starContainer: {flexDirection: 'row', marginTop: 2},
  ratingStarIcon: {marginRight: 3},
  reviewDateText: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    fontSize: 13,
    color: Colors.gray600,
  },
  reviewUserNameText: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
    fontSize: 13,
    color: Colors.gray600,
  },
  reviewDescriptionText: {marginTop: 10, fontFamily: 'Poppins-Regular'},
});

export default rentalDetailsStyle;
