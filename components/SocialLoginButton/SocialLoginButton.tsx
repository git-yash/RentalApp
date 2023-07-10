import React from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import socialLoginButtonStyles from './SocialLoginButton.style';

const SocialLoginButton = (props: {
  socialName: 'Apple' | 'Google' | 'Facebook';
  imageURI: string | undefined;
}) => {
  return (
    <Pressable style={socialLoginButtonStyles.button}>
      <View style={socialLoginButtonStyles.iconContainer}>
        <Image
          style={socialLoginButtonStyles.logo}
          source={{uri: props.imageURI}}
        />
      </View>
      <Text style={socialLoginButtonStyles.buttonText}>
        Continue with {props.socialName}
      </Text>
    </Pressable>
  );
};

export default SocialLoginButton;
