import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/Colors';

const CategoryTabBarItem = (props: {
  label: string;
  iconName: string;
  isSelected: boolean;
  setWhichCategorySelected: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => props.setWhichCategorySelected(props.label)}>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: props.isSelected ? 3 : 0,
          marginLeft: 7,
          marginRight: 7,
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <Icon
          name={props.iconName}
          size={25}
          color={props.isSelected ? 'black' : Colors.gray500}
        />
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 10,
            color: props.isSelected ? 'black' : Colors.gray500,
          }}>
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryTabBarItem;
