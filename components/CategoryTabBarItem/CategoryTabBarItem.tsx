import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/Colors';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Util from '../../Util';

const CategoryTabBarItem = (props: {
  label: string;
  iconName: string;
  isSelected: boolean;
  setWhichCategorySelected: any;
}) => {
  return (
    <Pressable
      onPress={() => {
        props.setWhichCategorySelected(props.label);
        ReactNativeHapticFeedback.trigger('impactHeavy', Util.options);
      }}>
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
            fontSize: 12,
            color: props.isSelected ? 'black' : Colors.gray500,
          }}>
          {props.label}
        </Text>
      </View>
    </Pressable>
  );
};

export default CategoryTabBarItem;
