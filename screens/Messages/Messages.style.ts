import {StyleSheet} from 'react-native';

const messagesStyle = StyleSheet.create({
  container: {flex: 1, marginTop: 15},
  scrollView: {paddingTop: 20},
  titleContainer: {paddingLeft: 15},
  topDivider: {marginTop: 10},
  noChatsText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  noChatsContainer: {flex: 1, justifyContent: 'center'},
});

export default messagesStyle;
