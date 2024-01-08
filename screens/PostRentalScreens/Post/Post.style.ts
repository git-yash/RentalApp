import {StyleSheet} from 'react-native';
import Colors from '../../../assets/Colors';

const PostStyle = StyleSheet.create({
  uploadImagesButton: {
    marginBottom: 10,
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
  bottomView: {position: 'absolute', bottom: 0, right: 0, left: 0},
});

export default PostStyle;
