import React, {useEffect} from 'react';
import {View} from 'react-native';
import ScreenNameConstants from '../../ScreenNameConstants';

const PostTab = (props: {navigation: any}) => {
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      props.navigation.navigate(ScreenNameConstants.PostRentalScreens, {
        screen: ScreenNameConstants.PostModal,
      });
    });
  }, [props.navigation]);
  return <View />;
};

export default PostTab;
