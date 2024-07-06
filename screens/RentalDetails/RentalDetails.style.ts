import {Platform, StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const rentalDetailsStyle = StyleSheet.create({
  cityText: {
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
    marginLeft: 10,
    color: Colors.gray600,
  },
  mainContainer: {paddingLeft: 10, paddingTop: 10, paddingRight: 10},
  titleText: {fontFamily: 'Poppins-SemiBold', fontSize: 27, paddingLeft: 10},
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 10,
  },
  cityReviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  starIcon: {marginTop: 1},
  ratingText: {
    paddingLeft: 5,
    fontFamily: 'Poppins-SemiBold',
    paddingRight: 3,
  },
  reviewLengthText: {fontFamily: 'Poppins-SemiBold', color: Colors.gray600},
  descriptionText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  subtitleText: {
    paddingTop: 15,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
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
    fontSize: 17,
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
    fontSize: 34,
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
    marginBottom: '20%',
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
    fontSize: 13,
    color: Colors.gray600,
    alignSelf: 'flex-end',
  },
  reviewUserNameText: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
    fontSize: 13,
    color: Colors.gray600,
  },
  reviewDescriptionText: {marginTop: 10, fontFamily: 'Poppins-Regular'},
  stickyFooter: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: Colors.gray300,
    backgroundColor: 'white',
    padding: 10,
  },
  perHourText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginTop: 3,
  },
  messagePressable: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 10,
  },
  messageText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    margin: 5,
    alignSelf: 'center',
  },
  chooseDatesPressable: {
    flex: 1,
    backgroundColor: Colors.green,
    padding: 5,
    marginLeft: 10,
    borderRadius: 10,
  },
  chooseDatesText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    margin: 5,
    alignSelf: 'center',
  },
  priceContainer: {flexDirection: 'row', alignItems: 'center', flex: 1},
  smallPriceText: {fontFamily: 'Poppins-SemiBold', fontSize: 23},
  priceText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});

export default rentalDetailsStyle;
