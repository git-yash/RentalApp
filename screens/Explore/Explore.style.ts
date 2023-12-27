import {StyleSheet} from 'react-native';

const exploreStyles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modal: {
    margin: 0,
    marginTop: 50,
    justifyContent: 'flex-end',
  },
  grayLine: {
    backgroundColor: '#d5d7db',
    height: 4,
    width: 40,
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  flatListView: {
    position: 'absolute',
    zIndex: 0,
    bottom: '10%',
  },
  categoryAndSearchView: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  searchResultsView: {
    position: 'absolute',
    top: '14%',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'red',
  },
  mapView: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  listModalContainer: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  listModalContentContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default exploreStyles;
