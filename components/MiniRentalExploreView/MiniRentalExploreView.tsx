import React from 'react';
import {Rental} from '../../modals/Rental';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const MiniRentalExploreView = (props: {rental: Rental}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(props.rental.picturePaths.length)}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          borderRadius: 15,
          flexDirection: 'row',
          padding: 5,
        }}>
        <Image
          source={{uri: props.rental.picturePaths[0]}}
          style={{height: 100, width: 100, borderRadius: 15, margin: 5}}
        />
        <View>
          <Text
            style={{margin: 5, fontFamily: 'Poppins-SemiBold', fontSize: 20}}>
            {props.rental.title}
          </Text>
          <Text
            style={{margin: 5, fontFamily: 'Poppins-Regular', fontSize: 15}}>
            {props.rental.user?.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniRentalExploreView;
