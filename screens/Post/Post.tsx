import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LogInToViewScreen from '../../components/LogInToViewScreen/LogInToViewScreen';
import Colors from '../../assets/Colors';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import postStyle from './Post.style';
import usePost from './usePost';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

const Post = (props: {navigation: any}) => {
  const {handleUploadImagesButton, images} = usePost();
  const [title, setTitle] = useState('');
  const imageLengthText = images?.length >= 1 ? '(' + images?.length + ')' : '';
  return (
    <SafeAreaView>
      <View style={{paddingTop: 15}}>
        <View style={{paddingLeft: 15}}>
          <ScreenTitle title={'Post'} />
        </View>
        {auth().currentUser && (
          <View style={{paddingTop: 15}}>
            <CustomTextInput
              inputTitle={'Title'}
              placeholderText={'Enter a title...'}
              value={title}
              onChange={setTitle}
              errorMessage={undefined}
              autoCapitalize={'sentences'}
              keyboardType={'default'}
              maxCharacterLength={33}
              textContentType={'name'}
            />
            <TouchableOpacity
              style={postStyle.uploadImagesButton}
              onPress={() => handleUploadImagesButton()}>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                color={Colors.green}
              />
              <Text style={postStyle.uploadImagesText}>
                Upload Images {imageLengthText}
              </Text>
            </TouchableOpacity>
            <Text style={postStyle.inputBottomMessageText}>
              You must upload at least 1 image
            </Text>
          </View>
        )}
        {!auth().currentUser && (
          <LogInToViewScreen message={'Log in to make a post'} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Post;
