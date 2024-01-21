import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const autoCompleteTextInputWithResultsStyle = StyleSheet.create({
  textInputContainer: {
    borderColor: Colors.gray400,
    borderBottomColor: Colors.gray300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
  description: {
    fontFamily: 'Poppins-Regular',
  },
  row: {},
  listView: {
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: Colors.gray400,
    borderRightColor: Colors.gray400,
    borderLeftColor: Colors.gray400,
    borderTopColor: 'white',
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    height: '100%',
  },
});
export default autoCompleteTextInputWithResultsStyle;
