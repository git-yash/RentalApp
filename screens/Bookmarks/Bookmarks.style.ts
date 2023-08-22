import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const bookmarksStyle = StyleSheet.create({
  mainContainer: {
    padding: 15,
    height: '100%',
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
  },
  noBookmarksText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingTop: '50%',
  },
});

export default bookmarksStyle;
