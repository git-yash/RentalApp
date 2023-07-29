import React from 'react';
import {Text, View} from 'react-native';
import Colors from '../../assets/Colors';

const CustomMapMarker = (props: {price: number; isSelected: boolean}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.green,
        padding: 5,
        borderRadius: 50,
        paddingRight: 10,
        paddingLeft: 10,
      }}>
      <Text style={{fontFamily: 'Poppins-SemiBold', color: 'white'}}>
        ${props.price}
      </Text>
    </View>
  );
};

export default CustomMapMarker;
