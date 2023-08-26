import React, {useEffect} from 'react';
import {
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

const Post = (props: {navigation: any}) => {
  const {handleUploadImagesButton} = usePost();
  return (
    <SafeAreaView>
      <View style={{paddingLeft: 15, paddingTop: 15}}>
        <ScreenTitle title={'Post'} />
        {auth().currentUser && (
          <View>
            <TouchableOpacity
              style={postStyle.uploadImagesButton}
              onPress={() => handleUploadImagesButton()}>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                color={Colors.green}
              />
              <Text style={postStyle.uploadImagesText}>Upload Images</Text>
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
