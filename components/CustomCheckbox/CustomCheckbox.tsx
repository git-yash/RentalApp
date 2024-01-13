import React from 'react';
import Colors from '../../assets/Colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import customCheckboxStyle from './CustomCheckbox.style';

const CustomCheckbox = (props: {
  value: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor={Colors.green}
      iconComponent={
        <FontAwesomeIcon icon={faCheck} color={'white'} size={14} />
      }
      unfillColor="#FFFFFF"
      text={props.text}
      innerIconStyle={{borderWidth: 2}}
      style={customCheckboxStyle.checkbox}
      textStyle={customCheckboxStyle.checkboxText}
      isChecked={props.value}
      onPress={(isChecked: boolean) => {
        props.onChange(isChecked);
      }}
    />
  );
};

export default CustomCheckbox;
