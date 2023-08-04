import {StyleSheet} from 'react-native';

const searchBarStyles = StyleSheet.create({
  searchBarContainer: {
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    height: '40%',
    borderRadius: 100,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    textAlign: 'left',
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchBarIcon: {
    position: 'relative',
    margin: 10,
    marginRight: 5,
  },
  searchBarInput: {
    borderWidth: 0,
    padding: 8,
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
});

export default searchBarStyles;
