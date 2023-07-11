import React from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import socialLoginButtonStyles from './SocialLoginButton.style';
import Util from '../../Util';

const SocialLoginButton = (props: {
  socialName: 'Apple' | 'Google' | 'Facebook';
}) => {
  return (
    <Pressable style={socialLoginButtonStyles.button}>
      <View style={socialLoginButtonStyles.iconContainer}>
        <Image
          style={
            props.socialName === 'Facebook'
              ? socialLoginButtonStyles.facebookLogo
              : socialLoginButtonStyles.logo
          }
          source={Util.getImageSource(props.socialName)}
        />
      </View>
      <Text style={socialLoginButtonStyles.buttonText}>
        Continue with {props.socialName}
      </Text>
    </Pressable>
  );
};

export default SocialLoginButton;
