import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../../Colors';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

const TabBarIcon = (props: {isFocused: boolean; icon: IconDefinition}) => {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      color={props.isFocused ? Colors.green : 'gray'}
      size={23}
    />
  );
};

export default TabBarIcon;
