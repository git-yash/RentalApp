import React from 'react';
import {Avatar} from 'native-base';
import Colors from '../../assets/Colors';
import {View} from 'react-native';
import Util from '../../Util';
import auth from '@react-native-firebase/auth';

const ProfileImage = (props: {uri: string | undefined}) => {
  return (
    <View>
      <Avatar
        bg={Colors.gray700}
        size={'xl'}
        source={{
          uri: props.uri,
        }}>
        {auth().currentUser ? Util.getUserInitials() : ''}
      </Avatar>
    </View>
  );
};

export default ProfileImage;
