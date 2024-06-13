import React from 'react';
import {Avatar} from 'native-base';
import Colors from '../../assets/Colors';
import {Text, View} from 'react-native';
import Util from '../../Util';
import useUserStore from '../../store/userStore';

const ProfileImageNameView = (props: {uri: string | undefined}) => {
  const {authUser, userAttributes} = useUserStore();

  return (
    <View style={{padding: 15, flexDirection: 'row'}}>
      <Avatar
        bg={Colors.gray700}
        size={'xl'}
        source={{
          uri: props.uri,
        }}>
        {authUser?.username
          ? Util.getUserInitials(userAttributes?.name as string)
          : ''}
      </Avatar>
      <Text
        style={{
          alignSelf: 'center',
          paddingLeft: 10,
          fontFamily: 'Poppins-SemiBold',
          fontSize: 25,
        }}>
        {userAttributes?.name as string}
      </Text>
    </View>
  );
};

export default ProfileImageNameView;
