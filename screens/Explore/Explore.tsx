import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import exploreStyles from "./Explore.style";
import LogInOrSignUp from "../LogInOrSignUp/LogInOrSignUp";

const Explore = (props: {navigation: any}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
          ReactNativeHapticFeedback.trigger('impactMedium', options);
        }}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        style={exploreStyles.modal}>
        <View style={exploreStyles.modalView}>
          <LogInOrSignUp />
        </View>
      </Modal>
    </View>
  );
};


export default Explore;
