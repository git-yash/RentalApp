import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const searchBarStyles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 100,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    textAlign: 'left',
    margin: 10,
    borderColor: Colors.green,
    borderWidth: 2,
  },
  searchBarIcon: {
    position: 'relative',
    margin: 10,
    marginRight: 5,
  },
  searchBarInput: {
    borderWidth: 0,
    borderColor: 'white',
    padding: 8,
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
});

export default searchBarStyles;