import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const searchBarStyles = StyleSheet.create({
  searchBarContainer: {
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    height: '37%',
    borderRadius: 100,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    textAlign: 'left',
    margin: 10,
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    marginTop: 15,
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
  filterPressable: {
    borderRadius: 100,
    padding: 9,
    marginRight: 4,
    backgroundColor: Colors.gray300,
  },
});

export default searchBarStyles;
