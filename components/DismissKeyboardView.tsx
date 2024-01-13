import React, {ReactNode} from 'react';
import {Keyboard, TouchableWithoutFeedback, ViewStyle} from 'react-native';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

const DismissKeyboardView: React.FC<Props> = ({children, style}) => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={style}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
