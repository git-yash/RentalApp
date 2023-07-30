import React from 'react';
import {Text, View} from 'react-native';
import customMapMarkerStyles from './CustomMapMarker.style';

const CustomMapMarker = (props: {
  key: number;
  price: number;
  isSelected: boolean;
}) => {
  return (
    <View
      style={
        props.isSelected
          ? customMapMarkerStyles.selectedView
          : customMapMarkerStyles.unSelectedView
      }>
      <Text
        style={
          props.isSelected
            ? customMapMarkerStyles.selectedText
            : customMapMarkerStyles.unSelectedText
        }>
        ${props.price}
      </Text>
    </View>
  );
};

export default CustomMapMarker;
