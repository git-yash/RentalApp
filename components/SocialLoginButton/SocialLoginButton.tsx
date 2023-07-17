import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import socialLoginButtonStyles from './SocialLoginButton.style';
import Util from '../../Util';

const SocialLoginButton = (props: {
  socialName: 'Apple' | 'Google' | 'Facebook';
}) => {
  return (
    <TouchableOpacity style={socialLoginButtonStyles.button}>
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
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
