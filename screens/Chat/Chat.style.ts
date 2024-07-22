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
  dateString: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    paddingVertical: 5,
    color: Colors.gray700,
  },
  messageViewFromUser: {
    backgroundColor: Colors.darkGreen,
    padding: 10,
    margin: 10,
    maxWidth: '75%',
    borderRadius: 10,
    marginVertical: 3,
    alignSelf: 'flex-end',
  },
  messageViewFromSender: {
    backgroundColor: Colors.gray300,
    padding: 10,
    margin: 10,
    marginVertical: 3,
    maxWidth: '75%',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  messageTextFromUser: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  messageTextFromSender: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default chatStyles;
