import {StyleSheet} from 'react-native';
import Colors from '../../../assets/Colors';

const PostStyle = StyleSheet.create({
  uploadImagesButton: {
    marginBottom: 5,
    marginTop: 15,
    borderRadius: 15,
    borderColor: Colors.green,
    borderWidth: 3,
    flexDirection: 'row',
    padding: 10,
    width: 200,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 15,
  },
  uploadImagesText: {
    paddingLeft: 5,
    color: Colors.green,
    fontFamily: 'Poppins-SemiBold',
  },
  inputBottomMessageText: {
    marginBottom: 15,
    color: Colors.gray600,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingLeft: 20,
  },
  inputBottomMessageErrorText: {
    marginBottom: 15,
    color: Colors.invalidRed,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingLeft: 20,
  },
});

export default PostStyle;
