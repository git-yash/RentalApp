import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../assets/Colors';

const TabBarIcon = (props: {isFocused: boolean; icon: IconDefinition}) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      color={props.isFocused ? Colors.green : 'gray'}
      size={20}
    />
  );
};

export default TabBarIcon;
