import React from 'react';
import {Text, View} from 'react-native';
import {Price} from '../../src/API';
import customMapMarkerStyles from './CustomMapMarker.style';

const CustomMapMarker = (props: {
  key: number;
  price: Price;
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
        ${props.price.amount}/{props.price.timeIncrement}
      </Text>
    </View>
  );
};

export default CustomMapMarker;
