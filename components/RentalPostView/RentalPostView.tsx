import React from 'react';
import {Image, Text, View} from 'react-native';

const RentalPostView = (props: {rental: Rental}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={{uri: props.rental.picturePaths[0]}} />
      <Text>{props.rental.title}</Text>
    </View>
  );
};

export default RentalPostView;
