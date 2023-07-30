import React, {useEffect} from 'react';
import {Rental} from '../../modals/Rental';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const MiniRentalExploreView = (props: {rental: Rental}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(props.rental.picturePaths.length)}>
      <View style={{backgroundColor: 'white', margin: 10, borderRadius: 15}}>
        <Image
          source={{uri: props.rental.picturePaths[0]}}
          style={{height: 300, width: 300}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MiniRentalExploreView;
