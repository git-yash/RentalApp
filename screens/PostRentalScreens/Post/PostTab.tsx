import React, {useEffect} from 'react';
import {View} from 'react-native';
import Post from './Post';

const PostTab = (props: {navigation: any}) => {
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      props.navigation.navigate('PostRentalScreens', {screen: Post});
    });
  }, [props.navigation]);
  return <View />;
};

export default PostTab;
