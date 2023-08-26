import React from 'react';
import {Text} from 'react-native';
import screenTitleStyle from './ScreenTitle.style';

const ScreenTitle = (props: {title: string}) => {
  return <Text style={screenTitleStyle.titleText}>{props.title}</Text>;
};

export default ScreenTitle;
