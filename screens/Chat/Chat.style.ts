import {StyleSheet} from 'react-native';
import Colors from '../../assets/Colors';

const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  dismissKeyboardView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  flatListContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10, // Adjust padding if needed
  },
  stickyView: {
    width: '100%',
    backgroundColor: Colors.gray100,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.gray300,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: Colors.gray300,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flex: 7,
    marginRight: 10,
  },
  pressableCanSend: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 50,
  },
  pressableCannotSend: {
    backgroundColor: Colors.gray400,
    padding: 10,
    borderRadius: 50,
  },
});

export default chatStyles;
