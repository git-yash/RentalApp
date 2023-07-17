import React from 'react';
import {Pressable, Text} from 'react-native';
import logInOrSignUpStyles from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp.style';

const ContinuePressable = (props: {
  onPress: any;
  isDisabled: boolean;
  text: string;
}) => {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.isDisabled}
      style={
        props.isDisabled
          ? logInOrSignUpStyles.continuePressableDisabled
          : logInOrSignUpStyles.continuePressableEnabled
      }>
      <Text style={logInOrSignUpStyles.continueText}>{props.text}</Text>
    </Pressable>
  );
};

export default ContinuePressable;
