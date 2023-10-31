import React from 'react';
import {View, Text} from 'react-native';
import orDividerStyles from './OrDivider.style';

const DividerComponent = () => {
  return (
    <View style={orDividerStyles.listModalContainer}>
      <View style={orDividerStyles.line} />
      <Text style={orDividerStyles.text}>OR</Text>
      <View style={orDividerStyles.line} />
    </View>
  );
};

export default DividerComponent;
