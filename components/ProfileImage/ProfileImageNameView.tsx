import React from 'react';
import {Avatar} from 'native-base';
import Colors from '../../assets/Colors';
import {Text, View} from 'react-native';
import Util from '../../Util';
import auth from '@react-native-firebase/auth';

const ProfileImageNameView = (props: {uri: string | undefined}) => {
  return (
    <View style={{padding: 15, flexDirection: 'row'}}>
      <Avatar
        bg={Colors.gray700}
        size={'xl'}
        source={{
          uri: props.uri,
        }}>
        {auth().currentUser ? Util.getUserInitials() : ''}
        <Avatar.Badge bg={Colors.green} />
      </Avatar>
      <Text
        style={{
          alignSelf: 'center',
          paddingLeft: 10,
          fontFamily: 'Poppins-SemiBold',
          fontSize: 25,
        }}>
        {auth().currentUser?.displayName}
      </Text>
    </View>
  );
};

export default ProfileImageNameView;
