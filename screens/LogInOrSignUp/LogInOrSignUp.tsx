import React from 'react';
import {Pressable, Text, View} from 'react-native';
import logInOrSignUpStyles from './LogInOrSignUp.style';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import exploreStyles from '../Explore/Explore.style';

const LogInOrSignUp = (props: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  return (
    <Modal
      isVisible={props.isModalVisible}
      onSwipeComplete={() => {
        props.setIsModalVisible(false);
        ReactNativeHapticFeedback.trigger('impactMedium', options);
      }}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      style={exploreStyles.modal}>
      <View style={exploreStyles.modalView}>
        <View style={logInOrSignUpStyles.container}>
          <View style={logInOrSignUpStyles.iconContainer}>
            <Pressable onPress={() => props.setIsModalVisible(false)}>
              <FontAwesomeIcon icon={faXmark} size={20} />
            </Pressable>
          </View>
          <View style={logInOrSignUpStyles.textContainer}>
            <Text style={logInOrSignUpStyles.text}>Log in or Sign up</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogInOrSignUp;
