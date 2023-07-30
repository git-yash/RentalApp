import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const customMapMarkerStyles = StyleSheet.create({
  selectedView: {
    backgroundColor: Colors.green,
    padding: 5,
    borderRadius: 50,
    paddingRight: 10,
    paddingLeft: 10,
  },
  selectedText: {fontFamily: 'Poppins-SemiBold', color: 'white'},
  unSelectedView: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 3,
    borderColor: Colors.green,
  },
  unSelectedText: {fontFamily: 'Poppins-SemiBold', color: Colors.green},
});

export default customMapMarkerStyles;
