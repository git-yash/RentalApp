import React from 'react';
import {Pressable, Text, View} from 'react-native';
import logInOrSignUpStyles from '../../screens/LogInOrSignUp/LogInOrSignUp.style';
import {Spinner} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Bounceable} from 'rn-bounceable';

const ContinuePressable = (props: {
  onPress: any;
  isDisabled: boolean;
  text: string;
  isLoading: boolean;
}) => {
  return (
    <GestureHandlerRootView>
      <Bounceable>
        <Pressable
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
        </Pressable>
      </Bounceable>
    </GestureHandlerRootView>
  );
};

export default ContinuePressable;
