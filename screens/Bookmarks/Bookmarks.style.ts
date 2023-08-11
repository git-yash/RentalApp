import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const bookmarksStyle = StyleSheet.create({
  mainContainer: {
    padding: 15,
  },
  bookmarksText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.green,
  },
  noBookmarksView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  noBookmarksText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});

export default bookmarksStyle;
