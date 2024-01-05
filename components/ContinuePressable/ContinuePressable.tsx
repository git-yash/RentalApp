import React from 'react';
import {Text, View} from 'react-native';
import logInOrSignUpStyles from '../../ModalScreens/LogInOrSignUp/LogInOrSignUp.style';
import {Spinner} from 'native-base';
import {Bounceable} from 'rn-bounceable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ContinuePressable = (props: {
  onPress: any;
  isDisabled: boolean;
  text: string;
  isLoading: boolean;
}) => {
  return (
    <GestureHandlerRootView>
      <Bounceable
        onPress={props.onPress}
        disabled={props.isDisabled || props.isLoading}>
        <View
          style={
            props.isDisabled
              ? logInOrSignUpStyles.continuePressableDisabled
              : logInOrSignUpStyles.continuePressableEnabled
          }>
          {props.isLoading && <Spinner color={'white'} />}
          {!props.isLoading && (
            <Text style={logInOrSignUpStyles.continueText}>{props.text}</Text>
          )}
        </View>
      </Bounceable>
    </GestureHandlerRootView>
  );
};

export default ContinuePressable;
