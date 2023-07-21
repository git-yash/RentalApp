import React from 'react';
import {Avatar} from 'native-base';
import Colors from '../../assets/Colors';
import {View} from 'react-native';

const ProfileImage = (props: {initials: string; uri: string | undefined}) => {
  return (
    <View>
      <Avatar
        bg={Colors.gray700}
        size={'xl'}
        source={{
          uri:
            props.uri === undefined ? 'https://bit.ly/broken-link' : props.uri,
        }}>
        {props.initials}
      </Avatar>
    </View>
  );
};

export default ProfileImage;
