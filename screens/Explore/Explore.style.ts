import {StyleSheet} from 'react-native';

const exploreStyles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '95%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

  },
  modal: {
    margin: 0,
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
});

export default exploreStyles;
