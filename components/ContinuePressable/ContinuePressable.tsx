import React from 'react';
import {Pressable, Text} from 'react-native';
import logInOrSignUpStyles from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp.style';
import {Spinner} from 'native-base';

const ContinuePressable = (props: {
  onPress: any;
  isDisabled: boolean;
  text: string;
  isLoading: boolean;
}) => {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.isDisabled || props.isLoading}
      style={
        props.isDisabled
          ? logInOrSignUpStyles.continuePressableDisabled
          : logInOrSignUpStyles.continuePressableEnabled
      }>
      {props.isLoading && <Spinner color={'white'} />}
      {!props.isLoading && (
        <Text style={logInOrSignUpStyles.continueText}>{props.text}</Text>
      )}
    </Pressable>
  );
};

export default ContinuePressable;
