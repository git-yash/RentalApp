import React from 'react';
import {Text, View} from 'react-native';
import customMapMarkerStyles from './CustomMapMarker.style';
import {Price} from '../../modals/Price';
import Util from '../../Util';

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
        ${props.price.price}/
        {Util.getTimeIncrementString(props.price.timeIncrement)[0]}
      </Text>
    </View>
  );
};

export default CustomMapMarker;
