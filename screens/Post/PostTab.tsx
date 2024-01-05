import React, {useEffect} from 'react';
import {View} from 'react-native';

const PostTab = (props: {navigation: any}) => {
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      props.navigation.navigate('PostModal');
    });
  }, [props.navigation]);
  return <View />;
};

export default PostTab;
